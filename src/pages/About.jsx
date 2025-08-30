import React, { useState, useEffect, useRef } from "react";
import pic5 from "../assets/images/pic5.jpg";
import pic10 from "../assets/images/pic10.jpg";
import pic11 from "../assets/images/pic11.jpg";
import ro1 from "../assets/images/ro1.jpg";
import ro2 from "../assets/images/ro2.jpg";
import ro3 from "../assets/images/ro3.jpg";
import ro4 from "../assets/images/ro4.jpg";
import ro5 from "../assets/images/ro5.jpg";
import ro6 from "../assets/images/ro6.jpg";
import ro7 from"../assets/images/ro7.jpg";
import ro8 from"../assets/images/ro8.jpg";
import "../styles/About.css";

const About = () => {
  const [counts, setCounts] = useState({
    totalChildren: 0,
    currentChildren: 0,
    staff: 0,
    adopted: 0
  });

  const targetCounts = {
    totalChildren: 215,
    currentChildren: 50,
    staff: 18,
    adopted: 101
  };

  const duration = 2000;
  const animationFrameId = useRef(null);

  useEffect(() => {
    let startTime = null;

    const animateCounters = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      const newCounts = {
        totalChildren: Math.floor(progress * targetCounts.totalChildren),
        currentChildren: Math.floor(progress * targetCounts.currentChildren),
        staff: Math.floor(progress * targetCounts.staff),
        adopted: Math.floor(progress * targetCounts.adopted)
      };

      setCounts(newCounts);

      if (progress < 1) {
        animationFrameId.current = requestAnimationFrame(animateCounters);
      }
    };

    animationFrameId.current = requestAnimationFrame(animateCounters);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [duration, targetCounts.adopted, targetCounts.currentChildren, targetCounts.staff, targetCounts.totalChildren]);

  return (
    <div className="about-container">
      <section id="history" className="content-section">
        <div className="container">
          <h2 className="section-title">Our History</h2>
          <div className="history-content">
            <div className="history-text">
              <p>
                Enat Debremarkos Children Village (EDCV) is a Community-Based Charity Organization (CBO) established in October 2018 to support abandoned, orphaned, and vulnerable children in Debremarkos Town, East Gojjam Zone, Amhara Region, Ethiopia.  
              </p>
              <p>
                The organization was founded by staff from Debremarkos Comprehensive Specialized Hospital and Debremarkos University to address the growing crisis of child abandonment, neglect, and abuse. Many of these children face psychological trauma, exploitation, and health risks due to lack of care and protection.  
              </p>
              <p>
                EDCV provides love, protection, and family-like care (its name, "Enat," means "Mother") to ensure children grow up in a safe and nurturing environment. The center offers shelter, education, healthcare, and emotional support to help them rebuild their lives. By reintegrating children into stable family settings whenever possible, EDCV strives to give them hope and a brighter future. The organization relies on community support and partnerships to continue its vital mission.
              </p>
            </div>
            <div className="history-image">
              <img
                src={pic5}
                alt="Our History"
                className="history-img"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="goals" className="content-section">
        <div className="container">
          <h2 className="section-title">Our Goals & Values</h2>
          <div className="goals-container">
            <div className="goal-card">
              <h3>OUR GOAL</h3>
              <p>To ensure that no abandoned child grows up alone.</p>
            </div>
            <div className="goal-card">
              <h3>OUR VISION</h3>
              <p>
                Every abandoned child has a family, a community, and a chance to
                grow up feeling cared for and loved.
              </p>
            </div>
            <div className="goal-card">
              <h3>OUR MISSION</h3>
              <p>
                Every abandoned child has the right to fulfill their potential
                through love, care, and support of a family.
              </p>
            </div>
            <div className="goal-card">
              <h3>OUR VALUES</h3>
              <ul className="values-list">
                <li>
                  <strong>Collaborative:</strong> We work together to
                  sustainably improve the lives of abandoned children.
                </li>
                <li>
                  <strong>Authentic:</strong> We are open, honest, and
                  transparent in everything we do.
                </li>
                <li>
                  <strong>Learning:</strong> We respect diversity, are
                  open-minded, listen, and learn from others.
                </li>
                <li>
                  <strong>Ambitious:</strong> We want to achieve lasting change
                  for children and families.
                </li>
                <li>
                  <strong>Commitment:</strong> No matter what challenge we face,
                  we stand firm to achieve our goals.
                </li>
              </ul>
            </div>
            <div className="goal-card">
              <h3>Childcare in the organization</h3>
              <ul className="values-list">
                <li>To make them intelligent</li>
                <li>Self-confident, strong in their physical abilities</li>
                <li>Ethiopian-oriented</li>
                <li>Enriched with good morals</li>
                <li>Reasonable in their outlook, visionary citizens who will be effective in all fields they engage in</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="roles" className="content-section">
        <div className="container">
          <h2 className="section-title">Roles & Responsibilities</h2>
          <div className="roles-grid">
            <div className="role-item">
              <div className="role-image">
                <img
                  src={ro8}
                  alt="Teachers"
                  className="role-img"
                />
              </div>
              <h3>Ato Teshome Wale </h3>
              <p>Mayor Of Debremarkos city and Board Chairman of Enat Debremarkos Children village.</p>
            </div>
            <div className="role-item">
              <div className="role-image">
                <img
                  src={pic11}
                  alt="House Parents"
                  className="role-img"
                />
              </div>
              
              <h3>Betremaraim Zeleke</h3>
              <p>President of Enate Debre Markos Children Village, leading the organization with dedication since its inception.</p>
            </div>
            <div className="role-item">
              <div className="role-image">
                <img
                  src={pic10}
                  alt="Social Workers"
                  className="role-img"
                />
              </div>
              <h3>Artist Bezawit Mesfen</h3>
              <p>Ambassador of Enate Debre Markos Children Village, supporting income-generating initiatives.</p>
            </div>
            <div className="role-item">
              <div className="role-image">
                <img
                  src={ro1}
                  alt="Teachers"
                  className="role-img"
                />
              </div>
              <h3>Mr Andualem Geremew </h3>
              <p>CEO of Debremarkos comprehensive specialized Hospital and vice board chair man of Enat Debremarkos children village</p>
            </div>
            <div className="role-item">
              <div className="role-image">
                <img
                  src={ro2}
                  alt="Medical Staff"
                  className="role-img"
                />
              </div>
              <h3>Dr. Abinet Sisay</h3>
              <p>Gyne ObS Specialist Of Debremarkos Comprehensive specialized Hospital and member of Board of Enat Debremarkos children village Also special  fundraiser for the  children village.</p>
            </div>
            <div className="role-item">
              <div className="role-image">
                <img
                  src={ro3}
                  alt="Teachers"
                  className="role-img"
                />
              </div>
              <h3>Dr. Abiye Zeleke </h3>
              <p>Medical Director of Debremarkos Comprehensive Hospital And member of board of Enat Debremarkos children village.</p>
            </div>
            <div className="role-item">
              <div className="role-image">
                <img
                  src={ro4}
                  alt="Teachers"
                  className="role-img"
                />
              </div>
              <h3>Dr Askalemariam Adamu</h3>
              <p>Vice president of Research and community service in Debremarkos University and board member of Enat Debremarkos children village.</p>
            </div>
            <div className="role-item">
              <div className="role-image">
                <img
                  src={ro5}
                  alt="Teachers"
                  className="role-img"
                />
              </div>
              <h3>Mr. Mersha Asmare</h3>
              <p>Manager at commercial bank of Ethiopia and board member of Enat Debremarkos children village.</p>
            </div>
            <div className="role-item">
              <div className="role-image">
                <img
                  src={ro6}
                  alt="Teachers"
                  className="role-img"
                />
              </div>
              <h3>w/ro Birhan Awoke</h3>
              <p>CEO of Help Alife foundation at Debremarkos and board member of Enat Debremarkos children village.</p>
            </div>
            <div className="role-item">
              <div className="role-image">
                <img
                  src={ro7}
                  alt="Teachers"
                  className="role-img"
                />
              </div>
              <h3>w/ro Fentanesh Afework </h3>
              <p>Head of Women and Children Afairs Office in Debremarkos city and board member of Enat Debremarkos Children Village.</p>
            </div>
            
          </div>
        </div>
      </section>

      <section id="status" className="content-section">
        <div className="container">
          <h2 className="section-title">Current Status</h2>
          <div className="status-grid">
            <div className="status-item">
              <h3>{counts.totalChildren}</h3>
              <p>Totally we have recieved</p>
            </div>
            <div className="status-item">
              <h3>{counts.currentChildren}</h3>
              <p>Current Children</p>
            </div>
            <div className="status-item">
              <h3>{counts.staff}</h3>
              <p>Reunited Children</p>
            </div>
            <div className="status-item">
              <h3>{counts.adopted}</h3>
              <p>Children Adopted</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
