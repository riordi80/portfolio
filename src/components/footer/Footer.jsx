import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaRss } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        <p>
          © 2025 Porfolio · All rights reserved |{' '}
          <Link to="/privacy-policy">Privacy Policy</Link> |{' '}
          <Link to="/terms-and-conditions">Terms and Conditions</Link> |{' '}
          <Link to="/refund-policy">Refund Policy</Link>
        </p>
      </div>
      <div className="footer-social">
        <a href="https://facebook.com/" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <Link to="/rss">
          <FaRss />
        </Link>
      </div>
      <div className="footer-links">
        <Link to="/home">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
        <a href="#" target="_blank" rel="noreferrer">Github</a>
        <a href="#" target="_blank" rel="noreferrer">Figma Inspiration</a>
      </div>
    </footer>
  );
}

export default Footer;
