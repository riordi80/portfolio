import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>Acerca</NavLink></li>
        <li><Link to="#">Porfolio</Link></li>
        <li><Link to="#">Blog</Link></li>
        <li><Link to="#">Servicios</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
