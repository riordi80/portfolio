import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const NotFound = () => {
  return (
    <>
    <Header></Header>
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, pero la página que buscas no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
    <Footer></Footer>
    </>
  );
};

export default NotFound