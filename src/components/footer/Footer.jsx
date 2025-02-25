import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        <p>
          © 2025 Porfolio · Todos los derechos reservados.{' '}
          <Link to="/privacy">Política de Privacidad</Link> |{' '}
          <Link to="/contact">Contacto</Link>
        </p>
      </div>
      <div className="footer-social">
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      <div className="footer-links">
        <Link to="/home">Inicio</Link>
        <Link to="/about">Acerca</Link>
        <a href="https://github.com/riordi80" target="_blank" rel="noopener noreferrer">Github</a>
        <a href="https://www.figma.com/community/file/1170206889562959306" target="_blank" rel="noopener noreferrer">Figma</a>
        <a href="https://example.com/inspiracion" target="_blank" rel="noopener noreferrer">Inspiración</a>
      </div>
    </footer>
  );
}

export default Footer;
