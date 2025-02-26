import logo from "./porfolio.svg";
import Navbar from "./Navbar";
import "./Header.css";

function Header() {
  return (
    <header>
      <img src={logo} alt="Porfolio" className="logo" />
      <Navbar />
    </header>
  );
}

export default Header;
