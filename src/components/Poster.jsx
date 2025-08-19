import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Poster.css";

const Poster = ({ showEvents }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    showEvents = true;
    localStorage.setItem('bannerClosed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="poster">
      <div className="content">
        <span>See special events to celebrate our children!</span>
        <Link to="/events" className="link" onClick={handleClose}>
          View Photos & Videos
        </Link>
        <button
          className="closeBtn"
          onClick={handleClose}
          aria-label="Close poster"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Poster;