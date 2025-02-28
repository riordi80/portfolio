import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import BlogComponent from "../../components/blog/BlogComponent";
import "./BlogPage.css";

const posts = [
  {
    id: 3,
    title: "Tips for Efficient Coding",
    date: "2025-02-14",
    author: "Richard Ortiz",
    content: "Here are some practical tips and best practices for writing clean and efficient code. Focus on creating reusable components, applying consistent styling, and optimizing performance to build scalable applications.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Design Trends in 2025",
    date: "2025-01-28",
    author: "Richard Ortiz",
    content: "In this post, I explore the latest design trends and examine their impact on modern web development. Discover innovative ideas and practical examples that inspire creative design solutions.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1,
    title: "My First Blog Post",
    date: "2025-01-14",
    author: "Richard Ortiz",
    content: "This is my first blog post where I share insights about UI/UX design and development. I discuss practical approaches, creative ideas, and real-world examples that mark the beginning of my journey in building user-friendly applications.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];


function BlogPage() {
  return (
    <>
      <Header />
      <section className="blog-page">
        <h2>Blog</h2>
        <BlogComponent posts={posts} />
      </section>
      <Footer />
    </>
  );
}

export default BlogPage;
