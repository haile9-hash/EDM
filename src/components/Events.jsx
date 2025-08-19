import React, { useEffect } from 'react';
import '../styles/Events.css';
import pic20 from '../assets/images/pic20.jpg';
import pic21 from '../assets/images/pic21.jpg';
import pic22 from '../assets/images/pic22.jpg';
import Bo1 from '../assets/images/Bo1.jpg';


const Events = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="events-page">
      <main className="container">
        {/* Photos Section */}
        <section id="photos" className="media-section">
          <h2 className="section-title">Event Photos</h2>
          <div className="media-gallery">
             <div className="media-item">
              <div className="media-container">
                <img src={Bo1} alt="Children's Day" />
                <span className="media-type">Photo</span>
              </div>
              <div className="media-info">
                <div className="media-date">July 24, 2025</div>
                <div className="media-caption">Board Members of the Organization.</div>
              </div>
            </div>
            {/* Photo 1 */}
            <div className="media-item">
              <div className="media-container">
                <img src={pic20} alt="Children's Day" />
                <span className="media-type">Photo</span>
              </div>
              <div className="media-info">
                <div className="media-date">June 1, 2023</div>
                <div className="media-caption">Events are approved by Amesader.</div>
              </div>
            </div>
            
            {/* Photo 2 */}
            <div className="media-item">
              <div className="media-container">
                <img src={pic21} alt="Graduation" />
                <span className="media-type">Photo</span>
              </div>
              <div className="media-info">
                <div className="media-date">May 30, 2023</div>
                <div className="media-caption">Locals volunteer to visit sites</div>
              </div>
            </div>
            
            {/* Photo 3 */}
            <div className="media-item">
              <div className="media-container">
                <img src={pic22} alt="Gala" />
                <span className="media-type">Photo</span>
              </div>
              <div className="media-info">
                <div className="media-date">June 15, 2023</div>
                <div className="media-caption">Foreign volunteers support the organizations</div>
              </div>
            </div>
          </div>
        </section>
        
        
      </main>
    </div>
  );
};

export default Events;