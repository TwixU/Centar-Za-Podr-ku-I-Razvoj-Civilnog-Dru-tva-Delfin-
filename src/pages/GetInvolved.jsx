import React from 'react';
import { Heart, Hand, CreditCard } from 'lucide-react';
import Button from '../components/common/Button';
import './GetInvolved.css';

const GetInvolved = () => {
    return (
        <div className="get-involved-page">
            <div className="container section">
                <h1 className="page-title">Get Involved</h1>
                <p className="page-intro">
                    You can make a difference. Whether through financial support or volunteering your time, your contribution helps us build a safer community.
                </p>

                <div className="involvement-grid">
                    {/* Donate Section */}
                    <div className="involvement-block donate-block">
                        <div className="block-icon">
                            <Heart size={48} />
                        </div>
                        <h2>Donate</h2>
                        <p className="block-desc">
                            Your donation funds vital services like our 24/7 victim hotline, legal aid, and youth workshops.
                        </p>

                        <div className="donation-details">
                            <h3>Bank Transfer Details</h3>
                            <div className="bank-info">
                                <p><strong>Recipient:</strong> Centar za podršku i razvoj civilnog društva "DELFIN"</p>
                                <p><strong>IBAN:</strong> HR7623400091110085485</p>
                                <p><strong>Address:</strong> Braće Radića 13, 34550 Pakrac</p>
                            </div>

                            <div className="impact-examples">
                                <h4>Your Impact:</h4>
                                <ul>
                                    <li><strong>€20</strong> sponsors educational materials for a student.</li>
                                    <li><strong>€50</strong> funds travel for a victim to reach our center.</li>
                                    <li><strong>€100</strong> helps organize a community dialogue event.</li>
                                </ul>
                            </div>
                        </div>

                        <Button href="mailto:contact@centarzpircddelfin.org" variant="primary" className="btn-wide">Contact for Donation Inquiries</Button>
                    </div>

                    {/* Volunteer Section */}
                    <div className="involvement-block volunteer-block">
                        <div className="block-icon">
                            <Hand size={48} />
                        </div>
                        <h2>Volunteer</h2>
                        <p className="block-desc">
                            Join our team of dedicated volunteers. We have opportunities for everyone, from professional roles to event support.
                        </p>

                        <div className="volunteer-roles">
                            <h3>Open Opportunities</h3>
                            <ul className="roles-list">
                                <li>
                                    <strong>Support Volunteers:</strong> Assist on our hotline or provide companionship (Training provided).
                                </li>
                                <li>
                                    <strong>Event Support:</strong> Help organize workshops, campaigns, and public forums.
                                </li>
                                <li>
                                    <strong>Professional Skills:</strong> Legal experts, psychologists, designers, and translators.
                                </li>
                            </ul>
                        </div>

                        <Button to="/contact" variant="secondary" className="btn-wide">Apply to Volunteer</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetInvolved;
