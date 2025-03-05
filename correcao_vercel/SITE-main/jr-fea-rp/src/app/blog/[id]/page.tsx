import db from "../../../utils/firestore";
import { doc, getDoc, collection, query, orderBy, getDocs } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";

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

const fetchPost = async (id: string): Promise<Post | null> => {
  const postDoc = doc(db, "posts", id);
  const postSnapshot = await getDoc(postDoc);

  if (!postSnapshot.exists()) return null;

  return { id: postSnapshot.id, ...postSnapshot.data() } as Post;
};

const fetchLatestPosts = async (currentId: string): Promise<Post[]> => {
  const postsCollection = collection(db, "posts");
  const q = query(postsCollection, orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs
    .map((doc) => ({ id: doc.id, ...doc.data() } as Post))
    .filter((post) => post.id !== currentId)
    .slice(0, 3);
};

// ❗ Remova FC<PageProps> e use uma função assíncrona diretamente
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
      {/* Data e navegação */}
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

      {/* Imagem */}
      {post.image && (
        <div className="relative h-72 md:h-96 bg-gray-100 mb-6">
          <Image src={post.image} alt={post.title} layout="fill" objectFit="contain" className="rounded-lg" />
        </div>
      )}

      {/* Índice e conteúdo */}
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

      {/* Mais notícias */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Mais notícias</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPosts.map((latestPost) => (
            <Link key={latestPost.id} href={`/blog/${latestPost.id}`} className="cursor-pointer border border-gray-300 rounded-lg shadow-lg overflow-hidden bg-white">
              {latestPost.image && (
                <div className="relative h-32 bg-gray-100">
                  <Image src={latestPost.image} alt={latestPost.title} layout="fill" objectFit="cover" />
                </div>
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{latestPost.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{latestPost.subtitles[0]?.content.substring(0, 100)}...</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
