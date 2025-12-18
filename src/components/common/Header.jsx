import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    // Helper to check active state
    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <header className="header">
            <div className="container header-container">
                <Link to="/" className="logo" onClick={closeMenu}>
                    Centar <span className="logo-accent">Delfin</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="nav-desktop">
                    <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
                    <Link to="/about" className={`nav-link ${isActive('/about')}`}>About Us</Link>
                    <Link to="/programs" className={`nav-link ${isActive('/programs')}`}>Programs</Link>
                    <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact</Link>
                    <Link to="/get-involved" className="btn btn-primary nav-cta">
                        <Heart size={16} style={{ marginRight: '8px' }} />
                        Get Involved
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Nav Drawer */}
                <div className={`nav-mobile ${isMenuOpen ? 'open' : ''}`}>
                    <div className="nav-mobile-content">
                        <Link to="/" className={`mobile-link ${isActive('/')}`} onClick={closeMenu}>Home</Link>
                        <Link to="/about" className={`mobile-link ${isActive('/about')}`} onClick={closeMenu}>About Us</Link>
                        <Link to="/programs" className={`mobile-link ${isActive('/programs')}`} onClick={closeMenu}>Programs</Link>
                        <Link to="/contact" className={`mobile-link ${isActive('/contact')}`} onClick={closeMenu}>Contact</Link>
                        <Link to="/get-involved" className="btn btn-primary mobile-cta" onClick={closeMenu}>
                            Get Involved
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
