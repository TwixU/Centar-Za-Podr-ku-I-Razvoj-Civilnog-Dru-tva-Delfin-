import React from 'react';
import './Programs.css';

const Programs = () => {
    return (
        <div className="programs-page">
            <div className="container section">
                <h1 className="page-title">Our Programs</h1>
                <p className="page-intro">
                    We operate interrelated programs designed to address specific community needs and advance human rights.
                </p>

                <div className="programs-list">
                    {/* Program 1 */}
                    <div className="program-block" id="victim-support">
                        <div className="program-header">
                            <h2>Victim and Witness Support</h2>
                        </div>
                        <div className="program-details">
                            <h3>Goals</h3>
                            <p>To provide compassionate support and practical assistance to survivors of violence and crime, helping them navigate legal systems and recover from trauma.</p>
                            <h3>Who We Serve</h3>
                            <p>Victims of domestic violence, sexual assault, and marginalized groups in Western Slavonia.</p>
                            <h3>Impact</h3>
                            <p>We operate a support hotline and provide free psychosocial counseling and legal advice. Our presence ensures that help reaches even remote rural areas.</p>
                        </div>
                    </div>

                    {/* Program 2 */}
                    <div className="program-block" id="womens-rights">
                        <div className="program-header">
                            <h2>Women’s Rights & Gender Equality</h2>
                        </div>
                        <div className="program-details">
                            <h3>Goals</h3>
                            <p>To combat gender-based discrimination and violence, fostering a culture that respects women’s rights.</p>
                            <h3>Activities</h3>
                            <p>Educational workshops, support groups, and the "16 Days of Activism" campaign. We advocate for stronger legal protections against femicide and violence.</p>
                        </div>
                    </div>

                    {/* Program 3 */}
                    <div className="program-block" id="civic-education">
                        <div className="program-header">
                            <h2>Civic Education & Active Citizenship</h2>
                        </div>
                        <div className="program-details">
                            <h3>Goals</h3>
                            <p>To foster an informed, active citizenry. We educate youth and adults on democracy and human rights.</p>
                            <h3>Impact</h3>
                            <p>Our workshops empower citizens to participate in local decision-making and start their own community initiatives.</p>
                        </div>
                    </div>

                    {/* Program 4 */}
                    <div className="program-block" id="peacebuilding">
                        <div className="program-header">
                            <h2>Peacebuilding & Intercultural Dialogue</h2>
                        </div>
                        <div className="program-details">
                            <h3>Goals</h3>
                            <p>To promote reconciliation and prevent future conflicts by building bridges between ethnic groups.</p>
                            <h3>Activities</h3>
                            <p>Intercultural dialogues, "Dealing with the Past" workshops, and community events that celebrate diversity.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Programs;
