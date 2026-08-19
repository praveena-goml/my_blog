import posts from "@/data/posts.json";

export default function Home() {
  return (
    <main>
      <h1>My Blog</h1>

      {posts.map((post) => (
        <div key={post.slug}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </main>
  );
}