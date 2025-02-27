import "./Porfolio.css";

const porfolioData = [
  {
    id: 1,
    title: "Product Admin Dashboard",
    image: "https://plus.unsplash.com/premium_vector-1732563175855-a5e89f7a6b79?q=80&w=2386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Web Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 2,
    title: "Creative Agency Website",
    image: "https://plus.unsplash.com/premium_vector-1726071199482-ff1454a46264?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Branding",
    description: "Doloribus, rerum dicta. Dolores quia illum delectus molestias.",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    image: "https://plus.unsplash.com/premium_vector-1727153149407-b4f9caeaec69?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "UI/UX",
    description: "Voluptas ratione quod blanditiis neque doloremque!",
  },
  {
    id: 4,
    title: "porfolio Admin Dashboard",
    image: "https://plus.unsplash.com/premium_vector-1734127305210-f2425c1d614f?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Web Design",
    description: "Aliquam impedit reprehenderit accusantium temporibus quae.",
  },
  {
    id: 5,
    title: "Travel Blog Website",
    image: "https://plus.unsplash.com/premium_vector-1719933451291-e78eb7716872?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Photography",
    description: "Facilis molestias totam temporibus ab!",
  },
  {
    id: 6,
    title: "Product Landing Page",
    image: "https://plus.unsplash.com/premium_vector-1721902752336-f3ab143c3827?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Marketing",
    description: "Eum, obcaecati ab. Consequuntur rerum aspernatur.",
  },
  
];

function porfolio() {
  return (
    <section className="porfolio-section">
      <h2>Porfolio</h2>
      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
      <div className="porfolio-grid">
        {porfolioData.map((item) => (
          <div className="porfolio-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="porfolio-info">
              <p className="category">{item.category}</p>
              <h3>{item.title}</h3>
              <p className="description">{item.description}</p>
              <button className="case-study-btn">Case Study</button>
            </div>
          </div>
        ))}
      </div>
      <button className="more-projects-btn">More Projects</button>
    </section>
  );
}

export default porfolio;
