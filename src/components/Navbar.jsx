import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import Logo from "../assets/images/Enate logo.jpg";

function Navbar({ activeSection, isHomePage, setIsHomePage }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const location = useLocation();

  // Update home page status when location changes
  useEffect(() => {
    setIsHomePage(location.pathname === "/");
  }, [location, setIsHomePage]);

  // Check for mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
      // Close mobile menu when resizing to desktop view
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = 'unset';
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll effect only on home page
  useEffect(() => {
    if (!isHomePage) return;
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isDropdownOpen) setIsDropdownOpen(false);
  };

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const scrollToSection = (sectionId) => {
    closeAllMenus();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Check if current page matches path
  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  // Check if we're on About page or its sections
  const isAboutPageActive = () => {
    return location.pathname === "/about" || 
           location.hash === "#history" || 
           location.hash === "#goals" || 
           location.hash === "#roles" || 
           location.hash === "#status";
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest('.dropdown')) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);

  // Add active class based on scroll position (only on home page)
  const isSectionActive = (sectionId) => {
    return (isHomePage && activeSection === sectionId) ? "active" : "";
  };

  return (
    <header className={`header ${scrolled && isHomePage ? "scrolled" : ""}`}>
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <span>Enate Debremarkos Children Village</span>
      </div>
      
      <button 
        className="mobile-menu-btn" 
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? "✕" : "☰"}
      </button>

      <div 
        className={`mobile-menu-overlay ${isMobileMenuOpen ? "active" : ""}`} 
        onClick={closeAllMenus}
      ></div>

      <nav className={`navbar ${isMobileMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link 
              to="/" 
              onClick={(e) => {
                if (isHomePage) {
                  e.preventDefault();
                  scrollToSection('home');
                }
                closeAllMenus();
              }}
              className={`${isSectionActive('home')} ${isActive("/")}`}
            >
              Home
            </Link>
          </li>
          
          <li className="dropdown">
            <div
              className={`dropdown-toggle ${isAboutPageActive() ? "active" : ""} ${isSectionActive('about')}`}
              onClick={(e) => {
                if (isMobileView) {
                  e.preventDefault();
                  toggleDropdown();
                }
              }}
            >
              <Link
                to="/about"
                onClick={(e) => {
                  if (!isMobileView) {
                    e.preventDefault();
                    toggleDropdown();
                  }
                }}
              >
                About Us
              </Link>
              {isMobileView && (
                <span className="dropdown-arrow" onClick={toggleDropdown}>
                  {isDropdownOpen ? "▲" : "▼"}
                </span>
              )}
            </div>
            <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
              <li>
                <Link 
                  to="/about#history" 
                  onClick={() => {
                    closeAllMenus();
                    if (isMobileView) {
                      scrollToSection('history');
                    }
                  }}
                  className={location.hash === "#history" ? "active" : ""}
                >
                  History
                </Link>
              </li>
              <li>
                <Link 
                  to="/about#goals" 
                  onClick={() => {
                    closeAllMenus();
                    if (isMobileView) {
                      scrollToSection('goals');
                    }
                  }}
                  className={location.hash === "#goals" ? "active" : ""}
                >
                  Goals
                </Link>
              </li>
              <li>
                <Link 
                  to="/about#roles" 
                  onClick={() => {
                    closeAllMenus();
                    if (isMobileView) {
                      scrollToSection('roles');
                    }
                  }}
                  className={location.hash === "#roles" ? "active" : ""}
                >
                  Roles
                </Link>
              </li>
              <li>
                <Link 
                  to="/about#status" 
                  onClick={() => {
                    closeAllMenus();
                    if (isMobileView) {
                      scrollToSection('status');
                    }
                  }}
                  className={location.hash === "#status" ? "active" : ""}
                >
                  Status
                </Link>
              </li>
            </ul>
          </li>
          
          <li>
            <Link 
              to="/story" 
              onClick={(e) => {
                if (isHomePage) {
                  e.preventDefault();
                  scrollToSection('story');
                }
                closeAllMenus();
              }}
              className={`${isSectionActive('story')} ${isActive("/story")}`}
            >
              Story
            </Link>
          </li>
          <li>
            <Link 
              to="/join" 
              onClick={(e) => {
                if (isHomePage) {
                  e.preventDefault();
                  scrollToSection('join');
                }
                closeAllMenus();
              }}
              className={`${isSectionActive('join')} ${isActive("/join")}`}
            >
              Join
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              onClick={(e) => {
                if (isHomePage) {
                  e.preventDefault();
                  scrollToSection('contact');
                }
                closeAllMenus();
              }}
              className={`${isSectionActive('contact')} ${isActive("/contact")}`}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link 
              to="/donate" 
              className={`donate-btn ${isActive("/donate")}`} 
              onClick={closeAllMenus}
            >
              Donate
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
