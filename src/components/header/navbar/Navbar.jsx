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

  // Cierra el menú al hacer clic en un enlace
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // Se activa "Inicio" cuando el pathname es "/" o "/home"
  const isInicioActive = location.pathname === '/' || location.pathname === '/home';

  return (
    <nav>
      <button className="menu-toggle" onClick={toggleMenu}><img src={menuButton} alt="Menú" /></button>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <NavLink to="/home" className={() => (isInicioActive ? "active" : "")} onClick={handleLinkClick}>Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")} onClick={handleLinkClick}>Acerca</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")} onClick={handleLinkClick}>Contacto</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
