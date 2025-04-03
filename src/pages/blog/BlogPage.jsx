import React, { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy, documentId } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import BlogComponent from "../../components/blog/BlogComponent";
import "./BlogPage.css";

function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Posts from Firestore
  useEffect(() => {
    async function fetchPosts() {
      try {
        const q = query(
          collection(db, "blog"),
          orderBy(documentId(), "desc")
        );
        const querySnapshot = await getDocs(q);
        const postsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setPosts(postsData);
        setFilteredPosts(postsData);
      } catch (err) {
        console.error("Error fetching blog posts:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  // Filter articles
  useEffect(() => {
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [searchQuery, posts]);

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
        <div className="search-container">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <BlogComponent posts={filteredPosts} />
      </section>
      <Footer />
    </>
  );
}

export default BlogPage;
