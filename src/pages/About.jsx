import React from 'react';
import { Target, Users, Clock } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="container section">
                <h1 className="page-title">About Us</h1>
                <p className="page-intro">
                    Centar za podršku i razvoj civilnog društva "Delfin" is a beacon of hope and support in Western Slavonia.
                </p>

                {/* Mission & Values */}
                <section className="about-section">
                    <h2 className="section-header">Mission & Values</h2>
                    <div className="values-grid">
                        <div className="value-item">
                            <Target className="value-icon" size={32} />
                            <h3>Our Mission</h3>
                            <p>To promote human rights, equality, and nonviolence while strengthening the capacity of civil society. We aim to prevent human rights violations and empower citizens.</p>
                        </div>
                        <div className="value-item">
                            <Users className="value-icon" size={32} />
                            <h3>Our Values</h3>
                            <p>Justice, peace, inclusivity, and active citizenship. We believe in transparency, collaboration, and respect for diversity.</p>
                        </div>
                    </div>
                </section>

                {/* Our Story */}
                <section className="about-section story-section">
                    <div className="story-content">
                        <h2 className="section-header">Our Story</h2>
                        <p>
                            Founded in <strong>2002</strong> by a group of dedicated women peace activists in Pakrac, Delfin emerged from the need to rebuild trust in a post-war region.
                            Building on the work of the Antiwar Campaign and the local Women’s Club, we started with small support groups for women affected by violence.
                        </p>
                        <p>
                            Over two decades, we have grown into a respected regional NGO. From establishing victim support networks where none existed to advocating for policy changes at the national level, Delfin has consistently stepped in where official services were lacking.
                        </p>
                        <div className="story-timeline">
                            <div className="timeline-item">
                                <span className="timeline-year">2002</span>
                                <span className="timeline-desc">Founded by women peace activists.</span>
                            </div>
                            <div className="timeline-item">
                                <span className="timeline-year">2005</span>
                                <span className="timeline-desc">Mirjana Bilopavlović nominated for Nobel Peace Prize (1000 PeaceWomen).</span>
                            </div>
                            <div className="timeline-item">
                                <span className="timeline-year">2025</span>
                                <span className="timeline-desc">Convened parliamentary meeting on femicide prevention.</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team */}
                <section className="about-section team-section">
                    <h2 className="section-header">Our Team</h2>
                    <div className="team-intro">
                        <p>
                            Our team is composed of passionate professionals in social work, law, and education, led by our president <strong>Mirjana Bilopavlović</strong>.
                            Combined with our dedicated volunteers, we are deeply connected to the community we serve.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
