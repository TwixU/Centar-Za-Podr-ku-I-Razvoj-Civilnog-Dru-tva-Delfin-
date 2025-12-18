import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <div className="footer-logo">Centar Delfin</div>
                    <p className="footer-mission">
                        Empowering our community through support, education, and advocacy to build a just, violence-free society.
                    </p>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/programs">Our Programs</Link>
                    <Link to="/get-involved">Get Involved</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <div className="contact-item">
                        <MapPin size={18} />
                        <span>Braće Radića 13, 34550 Pakrac, Croatia</span>
                    </div>
                    <div className="contact-item">
                        <Phone size={18} />
                        <span>+385 34 411 780</span>
                    </div>
                    <div className="contact-item">
                        <Mail size={18} />
                        <span>contact@centarzpircddelfin.org</span>
                    </div>
                </div>

                <div className="footer-social">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <Facebook />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <Instagram />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom container">
                <div className="legal-links">
                    <Link to="/privacy">Privacy Policy</Link>
                    <Link to="/terms">Terms of Service</Link>
                </div>
                <div className="copyright">
                    &copy; {currentYear} Centar Delfin. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
