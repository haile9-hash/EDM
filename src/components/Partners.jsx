import React from "react";
import "../styles/Partners.css";

// Import local logo images
import eduLogo from "../assets/images/par1.jpg";
import blueLogo from "../assets/images/par2.jpg";
import orangeLogo from "../assets/images/par3.jpg";
import futureLogo from "../assets/images/par4.jpg";
import hopeLogo from "../assets/images/par5.jpg";
import sunriseLogo from "../assets/images/par6.jpg";
const Partners = () => {
  const partners = [
    { id: 1, name: "Hans werner foundation", logo: eduLogo },
    { id: 2, name: "Dr Klaus Reisenberger and His Wife", logo: blueLogo },
    { id: 3, name: "Debre Markos Universty", logo: orangeLogo },
    { id: 4, name: "Debre Markos Refferal Hospital", logo: futureLogo },
    { id: 5, name: "Debremarkos City Administration", logo: hopeLogo },
    { id: 6, name: "Chicago Families:From Chicago America ", logo: sunriseLogo },
    
  ];

  // Duplicate partners for seamless looping
  const duplicatedPartners = [...partners, ...partners];

  const handleMouseEnter = (e) => {
    e.currentTarget.classList.add("paused");
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.classList.remove("paused");
  };

  return (
    <div className="partners-section">
      <div className="partners-header">
        <h2>Our Valued Partners</h2>
      </div>

      <div className="partners-container">
        <div
          className="partners-scroll"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {duplicatedPartners.map((partner, index) => (
            <div key={`${partner.id}-${index}`} className="partner-card">
              <div className="logo-container">
                <img src={partner.logo} alt={partner.name} />
              </div>
              <p className="partner-name">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
