import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/NavBar.css";

function Navbar() {
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  if (location.pathname === "/login") {
    return null;
  }

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleScroll = () => {
    setIsSticky(window.scrollY > 150);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`page-header ${isSticky ? "is-sticky" : ""}`}>
      <nav>
        <Link to="/" className="logo">
          <img
            src="/Images/LogPageImage/hero-img.png"
            alt="logo"
            width={"50px"}
          />
        </Link>
        <div className="nav-items">
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="icons">
            <span className="cart-icon">🛒</span>
            <span className="profile-icon" onClick={toggleProfileMenu}>
              👤
            </span>
          </div>
          <div className="auth-buttons">
            <Link to="/login" className="auth-button login-button">
              Log In
            </Link>
            <Link to="/join" className="auth-button join-button">
              Join Us
            </Link>
          </div>
          <div className={`profile-menu ${isProfileMenuOpen ? "show" : ""}`}>
            <ul>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/orders">Orders</Link>
              </li>
              <li>
                <Link to="/signout">Sign Out</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
