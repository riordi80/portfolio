import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import menuButton from "./menu-button.svg";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  
  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Close the menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  // Login with Google
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error in Google Login:", error);
    }
  };

  // "Home" is active when the route is "/" or "/home"
  const isInicioActive = location.pathname === "/" || location.pathname === "/home";

  return (
    <nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        <img src={menuButton} alt="Menu" />
      </button>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <NavLink
            to="/home"
            className={() => (isInicioActive ? "active" : "")}
            onClick={handleLinkClick}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={handleLinkClick}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={handleLinkClick}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="auth-links">
        {user ? (
          <button onClick={handleLogout}>Log out</button>
        ) : (
          <button onClick={handleGoogleLogin}>Sign in</button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
