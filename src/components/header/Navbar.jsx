import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">Acerca</Link></li>
        <li><Link to="#">Porfolio</Link></li>
        <li><Link to="#">Blog</Link></li>
        <li><Link to="#">Servicios</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;
