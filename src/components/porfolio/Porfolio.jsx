import "./Porfolio.css";

function porfolio(props) {
  const title = props.title;
  const description = props.description;
  const projects = props.projects;

  return (
    <section className="porfolio-section">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="porfolio-grid">
        {projects.map((item) => (
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
