import { Link } from "react-router-dom";
import logo from "./porfolio.svg";
import Navbar from "./navbar/Navbar";
import "./Header.css";

function Header() {
  return (
    <header>
      <Link to="/">
      <img src={logo} alt="Porfolio" className="logo" />
      </Link>
      <Navbar />
    </header>
  );
}

export default Header;
