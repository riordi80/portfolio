import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import menuButton from './menu-button.svg';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  // Closes the menu when clicking on a link
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // "Home" is active when the pathname is "/" or "/home"
  const isInicioActive = location.pathname === '/' || location.pathname === '/home';

  return (
    <nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        <img src={menuButton} alt="Menu" />
      </button>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <NavLink to="/home" className={() => (isInicioActive ? "active" : "")} onClick={handleLinkClick}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "")} onClick={handleLinkClick}>Blog</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")} onClick={handleLinkClick}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
