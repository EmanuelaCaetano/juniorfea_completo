import db from "@/utils/firestore";
import { doc, getDoc, collection, query, orderBy, getDocs } from "firebase/firestore";
import PostDetails from "@/components/PostDait";

// Função para buscar os dados do post
const getPostData = async (id: string) => {
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
};

// Componente assíncrono no `app` directory
const Page = async ({ params }: { params: { id: string } }) => {
  // Busca os dados do post diretamente aqui
  const postData = await getPostData(params.id);

  // Caso não exista o post, renderize uma mensagem
  if (!postData) {
    return <div>Post não encontrado</div>;
  }

  // Passe os dados para o componente `PostDetails`
  return <PostDetails postData={postData} />;
};

export default Page;
