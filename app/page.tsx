import Link from "next/link";
import posts from "@/data/posts.json";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <p className="hero-label">WELCOME TO MY BLOG</p>

          <h1>
            Thoughts, ideas
            <br />
            and <span>stories.</span>
          </h1>

          <p className="hero-description">
            A simple space where I share what I learn, build, and discover
            along the way.
          </p>

          <a href="#posts" className="hero-button">
            Explore Posts →
          </a>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="posts-section" id="posts">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-label">MY ARTICLES</p>
              <h2>Latest Posts</h2>
            </div>

            <p className="section-description">
              Read my latest thoughts and experiences.
            </p>
          </div>

          <div className="posts-grid">
            {posts.map((post) => (
              <article className="post-card" key={post.slug}>
                <div className="post-number">
                  {String(posts.indexOf(post) + 1).padStart(2, "0")}
                </div>

                <div className="post-content">
                  <h3>{post.title}</h3>

                  <p>{post.content}</p>

                  <Link
                    href={`/posts/${post.slug}`}
                    className="read-more"
                  >
                    Read Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="container about-box">
          <div>
            <p className="section-label">ABOUT THIS BLOG</p>
            <h2>A little place on the internet.</h2>
          </div>

          <p>
            This blog is built with Next.js and is a place to document my
            learning journey, projects, ideas, and experiences in technology.
          </p>
        </div>
      </section>
    </main>
  );
}