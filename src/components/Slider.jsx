import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Slider.css";

const slides = [
  {
    title: "Providing Loving Homes",
    description:
      "Many of the abandoned children arrik4ving at Enat Debremarkos face immediate health problems including respiratory infections, fever, and malnutrition. Sadly, we have lost 5 children due to these challenges. This is why urgent support is critical<br/>ልጅ ከማኅፀን ብቻ ሳይሆን ከልብም ይወለዳል!!",
    buttonText: "Support Us",
    imageUrl: require("../assets/images/pic1.jpg"),
  },
  {
    title: "Healthcare Support",
    description:
      "Regular health check-ups and proper nutrition are provided to all children in our care.<br/>ልጅ ከማኅፀን ብቻ ሳይሆን ከልብም ይወለዳል!!",
    buttonText: "Stand with Us",
    imageUrl: require("../assets/images/pic2.jpg"),
  },
  {
    title: "Education Programs",
    description:
      "Quality education is the key to breaking the cycle of poverty. Support our school initiatives.<br/>ልጅ ከማኅፀን ብቻ ሳይሆን ከልብም ይወለዳል!!",
    buttonText: "Donate Now",
    imageUrl: require("../assets/images/pic3.jpg"),
  },
  {
    title: "Volunteer Opportunities",
    description:
      "Join our team of dedicated volunteers making a difference in children's lives every day.<br/>ልጅ ከማኅፀን ብቻ ሳይሆን ከልብም ይወለዳል!!",
    buttonText: "Get Involved",
    imageUrl: require("../assets/images/pic6.jpg"),
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleNavigateToDonate = () => {
    navigate("/donate");
  };

  return (
    <section id="home" className="slider-container">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slide"
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          >
            <div className="overlay"></div>
            <div className="slide-content">
              <h1>{slide.title}</h1>
              <p
                dangerouslySetInnerHTML={{
                  __html: slide.description,
                }}
              />
              <button className="support-btn" onClick={handleNavigateToDonate}>
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="slider-nav">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`slider-nav-dot ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        className="slider-arrow left"
        onClick={() =>
          setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
        }
        aria-label="Previous slide"
      >
        &lt;
      </button>
      <button
        className="slider-arrow right"
        onClick={() => setCurrentIndex((prev) => (prev + 1) % slides.length)}
        aria-label="Next slide"
      >
        &gt;
      </button>
    </section>
  );
};

export default Slider;
