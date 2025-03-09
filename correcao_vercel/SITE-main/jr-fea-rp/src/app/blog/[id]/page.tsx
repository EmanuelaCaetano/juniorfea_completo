import { getDoc, doc, collection, query, orderBy, getDocs } from "firebase/firestore";
import db from "@/utils/firestore";
import PostDetails from "@/components/PostDait";
import { notFound } from "next/navigation";

interface Subtitle {
  subtitle: string;
  content: string;
}

interface Post {
  id: string;
  title: string;
  image: string | null;
  subtitles: Subtitle[];
  createdAt: string | null;
}

type Params = Promise<{ id: string }>;

const getPostData = async (id: string): Promise<{ post: Post; latestPosts: Post[] } | null> => {
  const postDoc = doc(db, "posts", id);
  const postSnapshot = await getDoc(postDoc);

  if (!postSnapshot.exists()) {
    return null;
  }

  const postData = postSnapshot.data();

  // 🔥 Garantindo que `postData` tenha todas as propriedades de `Post`
  const formattedPost: Post = {
    id: postSnapshot.id,
    title: postData.title || "Sem título",
    image: postData.image || null,
    subtitles: postData.subtitles || [],
    createdAt: postData.createdAt
      ? new Date(postData.createdAt.seconds * 1000).toISOString()
      : null,
  };

  // Pegando os posts mais recentes para recomendação
  const postsCollection = collection(db, "posts");
  const q = query(postsCollection, orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);

  const postsData: Post[] = querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      title: data.title || "Sem título",
      image: data.image || null,
      subtitles: data.subtitles || [],
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

// ✅ 🔥 Corrigindo `params` com `await`
export default async function Page({ params }: { params: Params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  if (!id) {
    return notFound();
  }

  const postData = await getPostData(id);

  if (!postData) {
    return notFound();
  }

  return <PostDetails postData={postData} />;
}
