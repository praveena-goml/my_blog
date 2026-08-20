import Link from "next/link";
import posts from "@/data/posts.json";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <main className="not-found">
        <div className="container">
          <h1>Post Not Found</h1>
          <Link href="/" className="back-link">
            ← Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="article-page">
      <div className="container article-container">
        <Link href="/" className="back-link">
          ← Back to Home
        </Link>

        <p className="article-label">ARTICLE</p>

        <h1>{post.title}</h1>

        <div className="article-divider"></div>

        <p className="article-content">{post.content}</p>

        <div className="article-footer">
          <Link href="/" className="back-button">
            ← More Articles
          </Link>
        </div>
      </div>
    </main>
  );
}