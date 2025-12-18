import React from 'react';
import { ArrowRight, Shield, Users, Globe, Heart } from 'lucide-react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-content">
                    <h1 className="hero-title">Empowering Communities, Promoting Peace</h1>
                    <p className="hero-subtitle">
                        Building a just and inclusive society where every person can live free from fear and discrimination.
                    </p>
                    <div className="hero-actions">
                        <Button to="/get-involved" variant="primary">Get Involved</Button>
                        <Button to="/about" variant="secondary">Learn More</Button>
                    </div>
                </div>
            </section>

            {/* Mission Summary */}
            <section className="section mission-section">
                <div className="container">
                    <div className="mission-grid">
                        <div className="mission-text">
                            <h2>Our Mission</h2>
                            <p>
                                Founded in 2002 in Pakrac, Croatia, <strong>Centar za podršku i razvoj civilnog društva "Delfin"</strong> is dedicated to preventing human rights violations and empowering citizens.
                                We support victims of violence, educate citizens, and foster a culture of peace and equality.
                                Whether it's through our victim support services or civic education programs, we are committed to making a difference.
                            </p>
                            <Button to="/about" className="btn-link">Read Our Story <ArrowRight size={16} /></Button>
                        </div>
                        <div className="mission-stats-container">
                            <div className="stat-card">
                                <span className="stat-number">20+</span>
                                <span className="stat-label">Years of Service</span>
                            </div>
                            <div className="stat-card">
                                <span className="stat-number">100s</span>
                                <span className="stat-label">Lives Impacted</span>
                            </div>
                            <div className="stat-card">
                                <span className="stat-number">4</span>
                                <span className="stat-label">Key Programs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Highlights */}
            <section className="section programs-section">
                <div className="container">
                    <h2 className="section-title text-center">What We Do</h2>
                    <p className="section-subtitle text-center">Our work addresses critical community needs through focused programs.</p>

                    <div className="programs-grid">
                        <Card title="Victim & Witness Support" className="program-card">
                            <Shield className="program-icon" size={40} />
                            <p>Compassionate support and legal assistance for victims of domestic violence and crime.</p>
                            <Button to="/programs" className="btn-text">Learn more</Button>
                        </Card>

                        <Card title="Women's Rights" className="program-card">
                            <Users className="program-icon" size={40} />
                            <p>Promoting gender equality and empowering women through education and advocacy.</p>
                            <Button to="/programs" className="btn-text">Learn more</Button>
                        </Card>

                        <Card title="Civic Education" className="program-card">
                            <Globe className="program-icon" size={40} />
                            <p>Fostering active citizenship and democratic values among youth and adults.</p>
                            <Button to="/programs" className="btn-text">Learn more</Button>
                        </Card>

                        <Card title="Peacebuilding" className="program-card">
                            <Heart className="program-icon" size={40} />
                            <p>Encouraging intercultural dialogue and reconciliation in our post-war region.</p>
                            <Button to="/programs" className="btn-text">Learn more</Button>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container cta-container">
                    <h2>Ready to Make a Difference?</h2>
                    <p>Your support helps us sustain vital services and create a safer community.</p>
                    <div className="cta-buttons">
                        <Button to="/get-involved" variant="primary">Donate to Delfin</Button>
                        <Button to="/get-involved" variant="secondary">Volunteer With Us</Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
