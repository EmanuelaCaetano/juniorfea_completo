import { getDoc, doc, collection, query, orderBy, getDocs } from "firebase/firestore";
import db from "@/utils/firestore";
import PostDetails from "@/components/PostDait";
import { notFound } from "next/navigation";

interface Params {
  id: string;
}

export async function generateStaticParams() {
  const postsCollection = collection(db, "posts");
  const querySnapshot = await getDocs(postsCollection);
  return querySnapshot.docs.map((doc) => ({ id: doc.id }));
}

const getPostData = async (id: string) => {
  const postDoc = doc(db, "posts", id);
  const postSnapshot = await getDoc(postDoc);

  if (!postSnapshot.exists()) {
    return null;
  }

  const postData = postSnapshot.data();

  // 🔥 Corrigir o timestamp do Firestore (para evitar erro de serialização)
  const formattedPost = {
    ...postData,
    id: postSnapshot.id,
    createdAt: postData.createdAt
      ? new Date(postData.createdAt.seconds * 1000).toISOString()
      : null,
  };

  const postsCollection = collection(db, "posts");
  const q = query(postsCollection, orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);

  const postsData = querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      ...data,
      id: doc.id,
      createdAt: data.createdAt
        ? new Date(data.createdAt.seconds * 1000).toISOString()
        : null,
    };
  });

  return {
    post: formattedPost,
    latestPosts: postsData.filter((doc) => doc.id !== id).slice(0, 3),
  };
};

// 🔥 Garantindo que `Page` é um componente válido
export default async function Page({ params }: { params: Params }) {
  const { id } = params;

  if (!id) {
    return notFound(); // Se `id` for indefinido, retorna 404
  }

  const postData = await getPostData(id);

  if (!postData) {
    return notFound(); // Se o post não for encontrado, retorna 404
  }

  return <PostDetails postData={postData} />;
}
