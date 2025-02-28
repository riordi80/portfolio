import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Porfolio from "../../components/porfolio/Porfolio";
import "./Home.css";
import profileImage from "./thmb.jpg";

const projects = [
  {
    id: 1,
    title: "Product Admin Dashboard",
    image:
      "https://plus.unsplash.com/premium_vector-1732563175855-a5e89f7a6b79?q=80&w=2386&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Web Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 2,
    title: "Creative Agency Website",
    image:
      "https://plus.unsplash.com/premium_vector-1726071199482-ff1454a46264?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Branding",
    description:
      "Doloribus, rerum dicta. Dolores quia illum delectus molestias.",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    image:
      "https://plus.unsplash.com/premium_vector-1727153149407-b4f9caeaec69?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "UI/UX",
    description: "Voluptas ratione quod blanditiis neque doloremque!",
  },
  {
    id: 4,
    title: "porfolio Admin Dashboard",
    image:
      "https://plus.unsplash.com/premium_vector-1734127305210-f2425c1d614f?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Web Design",
    description: "Aliquam impedit reprehenderit accusantium temporibus quae.",
  },
  {
    id: 5,
    title: "Travel Blog Website",
    image:
      "https://plus.unsplash.com/premium_vector-1719933451291-e78eb7716872?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Photography",
    description: "Facilis molestias totam temporibus ab!",
  },
  {
    id: 6,
    title: "Product Landing Page",
    image:
      "https://plus.unsplash.com/premium_vector-1721902752336-f3ab143c3827?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Marketing",
    description:
      "Eum, obcaecati ab. Consequuntur rerum aspernatur.",
  },
];

function Home() {
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
        description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
        projects={projects}
      />
      <Footer />
    </>
  );
}

export default Home;
