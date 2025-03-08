import { Metadata } from "next";
import db from "@/utils/firestore";
import { doc, getDoc, collection, query, orderBy, getDocs } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";

// 🔹 Tipagem dos dados
interface Subtitle {
  subtitle: string;
  content: string;
}

interface Post {
  id: string;
  title: string;
  image: string | null;
  subtitles: Subtitle[];
}

interface PageProps {
  params: { id: string };
}

// 🔹 SEO dinâmico
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await fetchPost(params.id);
  return {
    title: post ? post.title : "Post não encontrado",
  };
}

// 🔹 Função que busca os posts e retorna os parâmetros
export async function generateStaticParams() {
  const postsCollection = collection(db, "posts");
  const querySnapshot = await getDocs(postsCollection);

  return querySnapshot.docs.map((doc) => ({ id: doc.id }));
}

// 🔹 Página de detalhes do post
export default async function PostDetails({ params }: PageProps) {
  const post = await fetchPost(params.id);
  const latestPosts = await fetchLatestPosts(params.id);

  if (!post) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-gray-500">Post não encontrado.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-gray-500">Data da postagem</p>
        <div className="flex space-x-2">
          <Link href={`/blog/${latestPosts[0]?.id || ""}`} className="p-2 border rounded-full bg-gray-100 hover:bg-gray-200">
            ⬅
          </Link>
          <Link href={`/blog/${latestPosts[1]?.id || ""}`} className="p-2 border rounded-full bg-gray-100 hover:bg-gray-200">
            ➡
          </Link>
        </div>
      </div>

      {post.image && (
        <div className="relative h-72 md:h-96 bg-gray-100 mb-6">
          <Image src={post.image} alt={post.title} fill className="object-contain rounded-lg" />
        </div>
      )}

      <div className="flex">
        <div className="w-1/4 pr-4">
          <h2 className="text-lg font-semibold mb-2">Índice</h2>
          <ul className="space-y-2">
            {post.subtitles.map((subtitle, index) => (
              <li key={index}>
                <a href={`#subtitle-${index}`} className="text-blue-600 hover:underline">
                  {subtitle.subtitle}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-3/4">
          {post.subtitles.map((subtitle, index) => (
            <div key={index} id={`subtitle-${index}`} className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800">{subtitle.subtitle}</h3>
              <p className="text-gray-600 mt-2">{subtitle.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 🔹 Funções assíncronas para buscar os dados
async function fetchPost(id: string): Promise<Post | null> {
  const postDoc = doc(db, "posts", id);
  const postSnapshot = await getDoc(postDoc);
  if (!postSnapshot.exists()) return null;
  return { id: postSnapshot.id, ...postSnapshot.data() } as Post;
}

async function fetchLatestPosts(currentId: string): Promise<Post[]> {
  const postsCollection = collection(db, "posts");
  const q = query(postsCollection, orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs
    .map((doc) => ({ id: doc.id, ...doc.data() } as Post))
    .filter((post) => post.id !== currentId)
    .slice(0, 3);
}