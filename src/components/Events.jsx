import React, { useEffect } from 'react';
import '../styles/Events.css';
import pic20 from '../assets/images/pic20.jpg';
import pic21 from '../assets/images/pic21.jpg';
import pic22 from '../assets/images/pic22.jpg';
import Bo1 from '../assets/images/Bo1.jpg';
import Ev1 from '../assets/images/Ev1.jpg';
import Ev2 from '../assets/images/Ev2.jpg';
import Ev3 from '../assets/images/Ev3.jpg';
import Ev4 from '../assets/images/Ev4.jpg';
import Ev5 from '../assets/images/Ev5.jpg';
import Ev7 from '../assets/images/Ev7.jpg';
import Ev8 from '../assets/images/Ev8.jpg';
import Ev10 from '../assets/images/Ev10.jpg';
import Ev11 from '../assets/images/Ev11.png';


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
                <img src={Ev1} alt="Children's Day" />
                <span className="media-type">Photo</span>
              </div>
              <div className="media-info">
                <div className="media-date">July 24, 2021</div>
                <div className="media-caption">When the voluntary Ambassador of the Organization Artist Bezawit Mesfin Support the children.</div>
              </div>
            </div>
             <div className="media-item">
              <div className="media-container">
                <img src={Ev2} alt="Children's Day" />
                <span className="media-type">Photo</span>
              </div>
              <div className="media-info">
                <div className="media-date">July 24, 2021</div>
                <div className="media-caption">When the voluntary Ambassador of the Organization Artist Bezawit Mesfin Support the children.</div>
              </div>
            </div>
             <div className="media-item">
              <div className="media-container">
                <img src={Ev3} alt="Children's Day" />
                <span className="media-type">Photo</span>
              </div>
              <div className="media-info">
                <div className="media-date">April 10,2019</div>
                <div className="media-caption">When the hospital staffs took the first 3 kids from hospital  to the rent house for the First time . </div>
              </div>
            </div>
             <div className="media-item">
              <div className="media-container">
                <img src={Ev4} alt="Children's Day" />
                <span className="media-type">Photo</span>
              </div>
              <div className="media-info">
                <div className="media-date"> July 12,2018</div>
                <div className="media-caption">After visiting the 3 children  sent to the monastery   we have decided to organize charity organization that can help such like children.</div>
              </div>
            </div>
             <div className="media-item">
              <div className="media-container">
                <img src={Ev5} alt="Children's Day" />
                <span className="media-type">Photo</span>
              </div>
              <div className="media-info">
                <div className="media-date">April 15,2019</div>
                <div className="media-caption">The First 3 children in the rent house with their guardians.</div>
              </div>
            </div>
             <div className="media-item">
              <div className="media-container">
                <img src={Ev7} alt="Children's Day" />
                <span className="media-type">Photo</span>
              </div>
              <div className="media-info">
                <div className="media-date">September 2021</div>
                <div className="media-caption">When commerial bank of Ethiopia Staffs support two cows for the children </div>
              </div>
            </div>
             <div className="media-item">
              <div className="media-container">
                <img src={Ev8} alt="Children's Day" />
                <span className="media-type">Photo</span>
              </div>
              <div className="media-info">
                <div className="media-date">October 2020</div>
                <div className="media-caption">when Abandoned child comes to hospital for the First time,</div>
              </div>
            </div>
             
             <div className="media-item">
              <div className="media-container">
                <img src={Ev10} alt="Children's Day" />
                <span className="media-type">Photo</span>
              </div>
              <div className="media-info">
                <div className="media-date"> August 2025</div>
                <div className="media-caption">The current progress of the children house construction.</div>
              </div>
            </div>
             <div className="media-item">
              <div className="media-container">
                <img src={Ev11} alt="Children's Day" />
                <span className="media-type">Photo</span>
              </div>
              <div className="media-info">
                <div className="media-date"></div>
                <div className="media-caption">the abandoned child after developing infection and during treatment.</div>
              </div>
            </div>

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