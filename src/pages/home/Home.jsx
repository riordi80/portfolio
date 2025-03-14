import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Porfolio from "../../components/porfolio/Porfolio";
import "./Home.css";
import profileImage from "./thmb.jpg";
import { db } from "../../firebaseConfig";

function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsCollection = collection(db, "projects");
        const projectSnapshot = await getDocs(projectsCollection);
        const projectsList = projectSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setProjects(projectsList);
      } catch (error) {
        console.error("Error fetching projects: ", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <Header />
      <div className="home-container">
        <div className="home-content">
          <h1>
            Hello, I'm <span>Richard Ortiz</span>
          </h1>
          <p>
            I'm a Freelance <strong>UI/UX Designer</strong> and{" "}
            <strong>Developer</strong> based in LPGC, Canary Islands.
            I strive to build immersive and beautiful web applications through
            carefully crafted code and user-centric design.
          </p>
          <button className="cta-button">Say Hello!</button>
          <div className="stats">
            <div className="stat-box">
              <h2>15 Y.</h2>
              <p>Experience</p>
            </div>
            <div className="stat-box">
              <h2>250+</h2>
              <p>Project Completed</p>
            </div>
            <div className="stat-box">
              <h2>58</h2>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
        <div className="home-image">
          <img src={profileImage} alt="Profile" />
        </div>
      </div>
      <Porfolio
        title="Porfolio"
        description="Explore my work and be inspired by the creativity and functionality of each project."
        projects={projects}
      />
      <Footer />
    </>
  );
}

export default Home;
