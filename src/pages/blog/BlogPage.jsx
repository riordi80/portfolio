import React, { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy, documentId } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import BlogComponent from "../../components/blog/BlogComponent";
import "./BlogPage.css";

function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const q = query(
          collection(db, "blog"),
          orderBy(documentId(), "desc")
        );
        const querySnapshot = await getDocs(q);
        const postsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setPosts(postsData);
      } catch (err) {
        console.error("Error fetching blog posts:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading posts</div>;
  }

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
