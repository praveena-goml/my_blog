import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Blog",
  description: "A simple personal blog built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="container nav-container">
            <a href="/" className="logo">
              My<span>Blog</span>
            </a>

            <nav className="nav">
              <a href="/">Home</a>
              <a href="#about">About</a>
            </nav>
          </div>
        </header>

        {children}

        <footer className="footer">
          <p>© 2026 My Blog. Built with Next.js.</p>
        </footer>
      </body>
    </html>
  );
}