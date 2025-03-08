import db from "@/utils/firestore";
import { doc, getDoc, collection, query, orderBy, getDocs } from "firebase/firestore";

// 🔹 Função assíncrona para buscar dados do post no servidor
export async function getPostData(id: string) {
  const postDoc = doc(db, "posts", id);
  const postSnapshot = await getDoc(postDoc);

  if (!postSnapshot.exists()) {
    return null;
  }

  const postData = postSnapshot.data();

  const postsCollection = collection(db, "posts");
  const q = query(postsCollection, orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);

  const postsData = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return {
    post: { id: postSnapshot.id, ...postData },
    latestPosts: postsData.filter((doc) => doc.id !== id).slice(0, 3),
  };
}

import PostDetails from "@/components/PostDait";

const Page = ({ params }: { params: { id: string } }) => {
  return <PostDetails id={params.id} />;
};

export default Page;
