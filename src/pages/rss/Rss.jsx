import React from "react";
import { FaRss } from "react-icons/fa";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Rss.css";

function Rss() {
  return (
    <>
      <Header />
      <main className="rss-page">
        <div className="rss-header">
          <FaRss className="rss-icon-header" />
          <h1>RSS Feed</h1>
        </div>
        <p>You can access our RSS feed by clicking on the following link:</p>
        <a href="/feed.xml" target="_blank" rel="noopener noreferrer" className="rss-link">
          <FaRss className="rss-icon" />
          View RSS
        </a>
      </main>
      <Footer />
    </>
  );
}

export default Rss;
