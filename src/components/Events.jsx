
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

import Event20 from '../assets/images/Event20.jpg';
import Event21 from '../assets/images/Event21.jpg';
import Event22 from '../assets/images/Event22.jpg';

import vid1 from '../assets/images/Vid1.mp4';

const Events = () => {
  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const element = document.querySelector(hash);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  }, []);

  return (
    <div className="events-page">
      <main className="container">
        {/* Event Photos and Videos */}
        <section id="photos" className="media-section">
          <h2 className="section-title">Event Photos</h2>

          <div className="media-gallery">

            {/* Recent School and Village Photos */}
            <div className="media-item">
              <div className="media-container">
                <img
                  src={Event20}
                  alt="Partial view of the school and children's village"
                  loading="lazy"
                />
                <span className="media-type">Photo</span>
              </div>

              <div className="media-info">
                <div className="media-date">October 16, 2026</div>
                <div className="media-caption">
                  A partial view of the school and children's village.
                </div>
              </div>
            </div>

            <div className="media-item">
              <div className="media-container">
                <img
                  src={Event21}
                  alt="Graduation ceremony for the children"
                  loading="lazy"
                />
                <span className="media-type">Photo</span>
              </div>

              <div className="media-info">
                <div className="media-date">July 7, 2026</div>
                <div className="media-caption">
                  Graduation ceremony for the children.
                </div>
              </div>
            </div>

            <div className="media-item">
              <div className="media-container">
                <img
                  src={Event22}
                  alt="Ethio Telecom supporting the organization"
                  loading="lazy"
                />
                <span className="media-type">Photo</span>
              </div>

              <div className="media-info">
                <div className="media-date">July 24, 2026</div>
                <div className="media-caption">
                  Ethio Telecom providing support to the organization.
                </div>
              </div>
            </div>

            {/* Volunteer Ambassador Photos */}
            <div className="media-item">
              <div className="media-container">
                <img
                  src={Ev1}
                  alt="Artist Bezawit Mesfin supporting the children"
                  loading="lazy"
                />
                <span className="media-type">Photo</span>
              </div>

              <div className="media-info">
                <div className="media-date">July 24, 2021</div>
                <div className="media-caption">
                  The organization's volunteer ambassador, Artist Bezawit
                  Mesfin, supporting the children.
                </div>
              </div>
            </div>

            <div className="media-item">
              <div className="media-container">
                <img
                  src={Ev2}
                  alt="Artist Bezawit Mesfin supporting the children"
                  loading="lazy"
                />
                <span className="media-type">Photo</span>
              </div>

              <div className="media-info">
                <div className="media-date">July 24, 2021</div>
                <div className="media-caption">
                  The organization's volunteer ambassador, Artist Bezawit
                  Mesfin, supporting the children.
                </div>
              </div>
            </div>

            {/* The Organization's Early History */}
            <div className="media-item">
              <div className="media-container">
                <img
                  src={Ev3}
                  alt="The first three children arriving from the hospital"
                  loading="lazy"
                />
                <span className="media-type">Photo</span>
              </div>

              <div className="media-info">
                <div className="media-date">April 10, 2019</div>
                <div className="media-caption">
                  Hospital staff bringing the first three children to the
                  rented house for the first time.
                </div>
              </div>
            </div>

            <div className="media-item">
              <div className="media-container">
                <img
                  src={Ev4}
                  alt="An early visit that inspired the organization"
                  loading="lazy"
                />
                <span className="media-type">Photo</span>
              </div>

              <div className="media-info">
                <div className="media-date">July 12, 2018</div>
                <div className="media-caption">
                  After visiting three children who had been sent to a
                  monastery, we decided to establish a charitable organization
                  to support vulnerable children.
                </div>
              </div>
            </div>

            <div className="media-item">
              <div className="media-container">
                <img
                  src={Ev5}
                  alt="The first three children with their guardians"
                  loading="lazy"
                />
                <span className="media-type">Photo</span>
              </div>

              <div className="media-info">
                <div className="media-date">April 15, 2019</div>
                <div className="media-caption">
                  The first three children at the rented house with their
                  guardians.
                </div>
              </div>
            </div>

            {/* Community and Medical Support */}
            <div className="media-item">
              <div className="media-container">
                <img
                  src={Ev7}
                  alt="Commercial Bank of Ethiopia staff supporting the children"
                  loading="lazy"
                />
                <span className="media-type">Photo</span>
              </div>

              <div className="media-info">
                <div className="media-date">September 2021</div>
                <div className="media-caption">
                  Commercial Bank of Ethiopia staff donating two cows to
                  support the children.
                </div>
              </div>
            </div>

            <div className="media-item">
              <div className="media-container">
                <img
                  src={Ev8}
                  alt="An abandoned child receiving hospital care"
                  loading="lazy"
                />
                <span className="media-type">Photo</span>
              </div>

              <div className="media-info">
                <div className="media-date">October 2020</div>
                <div className="media-caption">
                  An abandoned child receiving medical attention at the
                  hospital.
                </div>
              </div>
            </div>

            {/* Children's Village Construction */}
            <div className="media-item">
              <div className="media-container">
                <img
                  src={Ev10}
                  alt="Progress on the children's village construction"
                  loading="lazy"
                />
                <span className="media-type">Photo</span>
              </div>

              <div className="media-info">
                <div className="media-date">August 2025</div>
                <div className="media-caption">
                  Progress on the construction of the children's village.
                </div>
              </div>
            </div>

            <div className="media-item">
              <div className="media-container">
                <img
                  src={Ev11}
                  alt="A child receiving treatment for an infection"
                  loading="lazy"
                />
                <span className="media-type">Photo</span>
              </div>

              <div className="media-info">
                <div className="media-caption">
                  A child receiving treatment after developing an infection.
                </div>
              </div>
            </div>

            {/* Board Members */}
            <div className="media-item">
              <div className="media-container">
                <img
                  src={Bo1}
                  alt="Board members of the organization"
                  loading="lazy"
                />
                <span className="media-type">Photo</span>
              </div>

              <div className="media-info">
                <div className="media-date">July 24, 2025</div>
                <div className="media-caption">
                  Board members of the organization.
                </div>
              </div>
            </div>

            {/* Other Community Events */}
            <div className="media-item">
              <div className="media-container">
                <img
                  src={pic20}
                  alt="Community event"
                  loading="lazy"
                />
                <span className="media-type">Photo</span>
              </div>

              <div className="media-info">
                <div className="media-date">June 1, 2023</div>
                <div className="media-caption">
                  An event organized with the approval of Amesader.
                </div>
              </div>
            </div>

            <div className="media-item">
              <div className="media-container">
                <img
                  src={pic21}
                  alt="Local volunteers visiting project sites"
                  loading="lazy"
                />
                <span className="media-type">Photo</span>
              </div>

              <div className="media-info">
                <div className="media-date">May 30, 2023</div>
                <div className="media-caption">
                  Local volunteers visiting project sites.
                </div>
              </div>
            </div>

            <div className="media-item">
              <div className="media-container">
                <img
                  src={pic22}
                  alt="Foreign volunteers supporting the organization"
                  loading="lazy"
                />
                <span className="media-type">Photo</span>
              </div>

              <div className="media-info">
                <div className="media-date">June 15, 2023</div>
                <div className="media-caption">
                  International volunteers supporting the organization.
                </div>
              </div>
            </div>

            {/* Event Video */}
            <div className="media-item">
              <div className="media-container">
                <video
                  controls
                  preload="metadata"
                  playsInline
                  aria-label="Video showing the school and children's village"
                >
                  <source src={vid1} type="video/mp4" />
                  Your browser does not support video playback.
                </video>

                <span className="media-type">Video</span>
              </div>

              <div className="media-info">
                <div className="media-date">October 16, 2026</div>
                <div className="media-caption">
                  A  view of the school and children's village..
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
};

export default Events;
