
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
import ro7 from "../assets/images/ro7.jpg";
import ro8 from "../assets/images/ro8.jpg";
import ev9 from "../assets/images/Ev9.jpg";

import "../styles/About.css";

/* =========================================
   BOARD LEADERSHIP
========================================= */

const boardLeadership = [
  {
    name: "Ato Teshome Wale",
    role: "Board Chairman",
    image: ro8,
    description:
      "Mayor of Debre Markos City and Board Chairman of Enat Debre Markos Children Village.",
  },
  {
    name: "Betremaraim Zeleke",
    role: "President",
    image: pic11,
    description:
      "President of Enat Debre Markos Children Village, leading the organization with dedication since its inception.",
  },
  {
    name: "Mr. Andualem Geremew",
    role: "Vice Board Chairman",
    image: ro1,
    description:
      "CEO of Debre Markos Comprehensive Specialized Hospital and Vice Board Chairman of Enat Debre Markos Children Village.",
  },
];

/* =========================================
   BOARD MEMBERS
========================================= */

const boardMembers = [
  {
    name: "Dr. Abinet Sisay",
    role: "Board Member",
    image: ro2,
    description:
      "Gynecology and Obstetrics Specialist at Debre Markos Comprehensive Specialized Hospital, board member, and special fundraiser for the Children Village.",
  },
  {
    name: "Dr. Abiye Zeleke",
    role: "Board Member",
    image: ro3,
    description:
      "Medical Director of Debre Markos Comprehensive Specialized Hospital and board member of Enat Debre Markos Children Village.",
  },
  {
    name: "Dr. Askalemariam Adamu",
    role: "Board Member",
    image: ro4,
    description:
      "Vice President of Research and Community Service at Debre Markos University and board member of Enat Debre Markos Children Village.",
  },
  {
    name: "Mr. Mersha Asmare",
    role: "Board Member",
    image: ro5,
    description:
      "Manager at Commercial Bank of Ethiopia and board member of Enat Debre Markos Children Village.",
  },
  {
    name: "W/ro Birhan Awoke",
    role: "Board Member",
    image: ro6,
    description:
      "CEO of Help Alife Foundation in Debre Markos and board member of Enat Debre Markos Children Village.",
  },
  {
    name: "W/ro Fentanesh Afework",
    role: "Board Member",
    image: ro7,
    description:
      "Head of the Women and Children Affairs Office in Debre Markos City and board member of Enat Debre Markos Children Village.",
  },
];

/* =========================================
   AMBASSADORS
========================================= */

const ambassadors = [
  {
    name: "Artist Bezawit Mesfen",
    role: "Ambassador",
    image: pic10,
    description:
      "Ambassador of Enat Debre Markos Children Village, supporting income-generating initiatives.",
  },
];

/* =========================================
   REUSABLE PROFILE CARD
========================================= */

const ProfileCard = ({ member, ambassador = false }) => (
  <article
    className={`role-item${ambassador ? " ambassador-card" : ""}`}
    key={member.name}
  >
    <div className="role-image">
      <img
        src={member.image}
        alt={member.name}
        className="role-img"
        loading="lazy"
      />

      <span className="role-badge">{member.role}</span>
    </div>

    <div className="role-card-content">
      <h4>{member.name}</h4>
      <p>{member.description}</p>
    </div>
  </article>
);

/* =========================================
   ABOUT PAGE
========================================= */

const About = () => {
  const [activeRole, setActiveRole] = useState("all");

  const [counts, setCounts] = useState({
    totalChildren: 0,
    currentChildren: 0,
    staff: 0,
    adopted: 0,
  });

  const targetCounts = {
    totalChildren: 250,
    currentChildren: 50,
    staff: 5,
    adopted: 101,
  };

  const duration = 2000;
  const animationFrameId = useRef(null);

  useEffect(() => {
    let startTime = null;

    const animateCounters = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      setCounts({
        totalChildren: Math.floor(
          progress * targetCounts.totalChildren
        ),
        currentChildren: Math.floor(
          progress * targetCounts.currentChildren
        ),
        staff: Math.floor(progress * targetCounts.staff),
        adopted: Math.floor(progress * targetCounts.adopted),
      });

      if (progress < 1) {
        animationFrameId.current =
          requestAnimationFrame(animateCounters);
      }
    };

    animationFrameId.current =
      requestAnimationFrame(animateCounters);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  const renderProfiles = (members, ambassador = false) => (
    <div
      className={`roles-grid${
        ambassador ? " ambassador-grid" : ""
      }`}
    >
      {members.map((member) => (
        <ProfileCard
          key={member.name}
          member={member}
          ambassador={ambassador}
        />
      ))}
    </div>
  );

  return (
    <div className="about-container">
      {/* =====================================
          OUR HISTORY
      ===================================== */}

      <section id="history" className="content-section">
        <div className="container">
          <h2 className="section-title">Our History</h2>

          <div className="history-content">
            <div className="history-text">
              <p>
                Enat Debremarkos Children Village (EDCV) is a
                Community-Based Charity Organization (CBO)
                established in October 2018 to support abandoned,
                orphaned, and vulnerable children in Debremarkos
                Town, East Gojjam Zone, Amhara Region, Ethiopia.
              </p>

              <p>
                The organization was founded by staff from
                Debremarkos Comprehensive Specialized Hospital
                and Debremarkos University to address the growing
                crisis of child abandonment, neglect, and abuse.
                Many of these children face psychological trauma,
                exploitation, and health risks due to a lack of
                care and protection.
              </p>

              <p>
                EDCV provides love, protection, and family-like
                care. Its name, "Enat," means "Mother." The
                organization offers shelter, education, healthcare,
                and emotional support to help children grow in a
                safe and nurturing environment. Through family
                reintegration and community support, EDCV strives
                to give children hope and a brighter future.
              </p>
            </div>

            <div className="history-image">
              <img
                src={pic5}
                alt="Enat Debremarkos Children Village"
                className="history-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          IMMEDIATE CHALLENGE
      ===================================== */}

      <section id="challenge" className="content-section">
        <div className="container">
          <h2 className="section-title">Immediate Challenge</h2>

          <div className="history-content">
            <div className="history-text">
              <p>
                Since its establishment in 2018, our organization
                has faced the challenge of caring for vulnerable
                and abandoned children who often arrive in fragile
                health and require immediate medical attention,
                proper nutrition, and emotional support. Through
                generous contributions from individuals, community
                members, and volunteers, we provide shelter, food,
                healthcare, education, and psychosocial support.
              </p>

              <p>
                To ensure a safe and permanent home for these
                children, the Debre Markos City Administration
                allocated two hectares of land for the development
                of a Children's Village. We also established our
                own licensed school, providing education from
                pre-primary to Grade 4 for resident children and
                children from the surrounding community.
              </p>

              <p>
                Since our establishment, we have provided care,
                protection, and life-changing support to more than
                250 vulnerable children. Today, we continue to
                provide comprehensive care for over 100 children
                aged between three months and ten years.
              </p>
            </div>

            <div className="history-image">
              <img
                src={ev9}
                alt="Children Village activities"
                className="history-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          GOALS AND VALUES
      ===================================== */}

      <section id="goals" className="content-section">
        <div className="container">
          <h2 className="section-title">Our Goals &amp; Values</h2>

          <div className="goals-container">
            <div className="goal-card">
              <h3>OUR GOAL</h3>
              <p>
                To ensure that no abandoned child grows up alone.
              </p>
            </div>

            <div className="goal-card">
              <h3>OUR VISION</h3>
              <p>
                Every abandoned child has a family, a community,
                and a chance to grow up feeling cared for and loved.
              </p>
            </div>

            <div className="goal-card">
              <h3>OUR MISSION</h3>
              <p>
                Every abandoned child has the right to fulfill
                their potential through love, care, and support
                of a family.
              </p>
            </div>

            <div className="goal-card">
              <h3>OUR VALUES</h3>

              <ul className="values-list">
                <li>
                  <strong>Collaborative:</strong> We work together
                  to sustainably improve the lives of abandoned
                  children.
                </li>
                <li>
                  <strong>Authentic:</strong> We are open, honest,
                  and transparent in everything we do.
                </li>
                <li>
                  <strong>Learning:</strong> We respect diversity,
                  listen, and learn from others.
                </li>
                <li>
                  <strong>Ambitious:</strong> We want to achieve
                  lasting change for children and families.
                </li>
                <li>
                  <strong>Commitment:</strong> We stand firm in
                  achieving our goals.
                </li>
              </ul>
            </div>

            <div className="goal-card">
              <h3>Childcare in the Organization</h3>

              <ul className="values-list">
                <li>To make children intelligent</li>
                <li>
                  To build self-confidence and physical ability
                </li>
                <li>To promote Ethiopian values</li>
                <li>To develop good morals</li>
                <li>
                  To nurture visionary citizens who can contribute
                  effectively in all fields
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          ROLES AND RESPONSIBILITIES
      ===================================== */}

      <section id="roles" className="content-section roles-section">
        <div className="container">
          <div className="roles-heading">
            <span className="roles-eyebrow">
              THE PEOPLE BEHIND OUR MISSION
            </span>

            <h2 className="section-title">
              Guided by Vision, Driven by Care
            </h2>

            <p className="roles-subtitle">
              Meet the dedicated leaders, board members, and
              ambassador supporting the mission of Enat
              Debremarkos Children Village.
            </p>
          </div>

          {/* FILTER BUTTONS */}

          <div
            className="roles-filters"
            role="group"
            aria-label="Filter team members"
          >
            <button
              type="button"
              className={`role-filter ${
                activeRole === "all" ? "active" : ""
              }`}
              onClick={() => setActiveRole("all")}
              aria-pressed={activeRole === "all"}
            >
              All Team Members
            </button>

            <button
              type="button"
              className={`role-filter ${
                activeRole === "leadership" ? "active" : ""
              }`}
              onClick={() => setActiveRole("leadership")}
              aria-pressed={activeRole === "leadership"}
            >
              Board Leadership
            </button>

            <button
              type="button"
              className={`role-filter ${
                activeRole === "members" ? "active" : ""
              }`}
              onClick={() => setActiveRole("members")}
              aria-pressed={activeRole === "members"}
            >
              Board Members
            </button>

            <button
              type="button"
              className={`role-filter ${
                activeRole === "ambassadors" ? "active" : ""
              }`}
              onClick={() => setActiveRole("ambassadors")}
              aria-pressed={activeRole === "ambassadors"}
            >
              Ambassadors
            </button>
          </div>

          {/* ALL TEAM MEMBERS */}

          {activeRole === "all" && (
            <>
              <div className="roles-group-heading">
                <span className="roles-group-line" />

                <div>
                  <h3>Board Leadership</h3>
                  <p>
                    The leaders guiding our organization.
                  </p>
                </div>

                <span className="roles-group-line" />
              </div>

              {renderProfiles(boardLeadership)}

              <div className="roles-group-heading board-members-heading">
                <span className="roles-group-line" />

                <div>
                  <h3>Board Members</h3>
                  <p>
                    Dedicated professionals serving our mission.
                  </p>
                </div>

                <span className="roles-group-line" />
              </div>

              {renderProfiles(boardMembers)}

              <div className="roles-group-heading ambassador-heading">
                <span className="roles-group-line" />

                <div>
                  <h3>Our Ambassador</h3>
                  <p>
                    Inspiring support for our children's future.
                  </p>
                </div>

                <span className="roles-group-line" />
              </div>

              {renderProfiles(ambassadors, true)}
            </>
          )}

          {/* BOARD LEADERSHIP ONLY */}

          {activeRole === "leadership" && (
            <>
              <div className="roles-group-heading">
                <span className="roles-group-line" />

                <div>
                  <h3>Board Leadership</h3>
                  <p>
                    The leaders guiding our organization.
                  </p>
                </div>

                <span className="roles-group-line" />
              </div>

              {renderProfiles(boardLeadership)}
            </>
          )}

          {/* BOARD MEMBERS ONLY */}

          {activeRole === "members" && (
            <>
              <div className="roles-group-heading">
                <span className="roles-group-line" />

                <div>
                  <h3>Board Members</h3>
                  <p>
                    Dedicated professionals serving our mission.
                  </p>
                </div>

                <span className="roles-group-line" />
              </div>

              {renderProfiles(boardMembers)}
            </>
          )}

          {/* AMBASSADORS ONLY */}

          {activeRole === "ambassadors" && (
            <>
              <div className="roles-group-heading">
                <span className="roles-group-line" />

                <div>
                  <h3>Our Ambassador</h3>
                  <p>
                    Inspiring support for our children's future.
                  </p>
                </div>

                <span className="roles-group-line" />
              </div>

              {renderProfiles(ambassadors, true)}
            </>
          )}
        </div>
      </section>

      {/* =====================================
          CURRENT STATUS
      ===================================== */}

      <section id="status" className="content-section status-section">
        <div className="container">
          <h2 className="section-title">Current Status</h2>

          <div className="status-grid">
            <div className="status-item">
              <h3>{counts.totalChildren}</h3>
              <p>Children Supported Since Establishment</p>
            </div>

            <div className="status-item">
              <h3>{counts.currentChildren}</h3>
              <p>Children Currently in Our Care</p>
            </div>

            <div className="status-item">
              <h3>{counts.staff}</h3>
              <p>Staff Members</p>
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
