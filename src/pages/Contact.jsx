import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import Button from '../components/common/Button';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message. This is a demo form.");
    };

    return (
        <div className="contact-page">
            <div className="container section">
                <h1 className="page-title">Contact Us</h1>
                <p className="page-intro">
                    We are here to help. Reach out to us for support, questions, or to get involved.
                </p>

                <div className="contact-grid">
                    {/* Contact Info */}
                    <div className="contact-info-card">
                        <h2>Get in Touch</h2>
                        <div className="info-item">
                            <MapPin className="info-icon" size={24} />
                            <div>
                                <h3>Visit Us</h3>
                                <p>Braće Radića 13, 2nd Floor</p>
                                <p>34550 Pakrac, Croatia</p>
                                <small>Mon-Fri: 8:00 - 16:00</small>
                            </div>
                        </div>

                        <div className="info-item">
                            <Phone className="info-icon" size={24} />
                            <div>
                                <h3>Call Us</h3>
                                <p>+385 34 411 780</p>
                                <small>Available during working hours</small>
                            </div>
                        </div>

                        <div className="info-item">
                            <Mail className="info-icon" size={24} />
                            <div>
                                <h3>Email Us</h3>
                                <p>contact@centarzpircddelfin.org</p>
                                <small>We respond within 2 business days</small>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="map-placeholder">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.674843922652!2d17.1950!3d45.4370!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI2JzEzLjIiTiAxN8KwMTEnNDIuMCJF!5e0!3m2!1sen!2shr!4v1625060000000!5m2!1sen!2shr"
                                width="100%"
                                height="250"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Google Map"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-card">
                        <h2>Send a Message</h2>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="name@example.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                >
                                    <option value="General">General Inquiry</option>
                                    <option value="Volunteer">Volunteering</option>
                                    <option value="Support">Requesting Support</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="How can we help?"
                                ></textarea>
                            </div>

                            <Button type="submit" variant="primary" className="btn-wide">
                                <Send size={18} style={{ marginRight: '8px' }} /> Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
