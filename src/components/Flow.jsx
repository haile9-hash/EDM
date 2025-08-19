import React, { useState, useEffect, useRef } from 'react';
import "../styles/Flow.css";

const Flow = () => {
  const steps = [
    { label: "STEP 01", description: "Joins Enat Debremarkos" },
    { label: "STEP 02", description: "Receive Support" },
    { label: "STEP 03", description: "Attend School" },
    { label: "STEP 04", description: "Grow with Love" },
    { label: "STEP 05", description: "Achieve Dreams" }
  ];

  const [activeStep, setActiveStep] = useState(-1);
  const [isVisible, setIsVisible] = useState(false);
  const flowRef = useRef(null);

  // Detect when the component is in view
  useEffect(() => {
    const currentRef = flowRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setActiveStep(0);
        } else {
          setIsVisible(false);
          setActiveStep(-1);
        }
      },
      { threshold: 0.5 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Step animation
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveStep(prev => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [isVisible, steps.length]);

  return (
    <div className="flow-container" ref={flowRef}>
      <h2 className="flow-heading">
        Life in Enat Debremarkos Charity for a Child
      </h2>

      <div className="flow-wrapper">
        {/* Background line */}
        <div className="flow-line-bg"></div>

        {/* Animated line */}
        <div
          className="flow-line-animate"
          style={{ 
            width: isVisible ? `${(activeStep + 1) * (100 / steps.length)}%` : '0%',
            transition: 'width 1.5s ease-in-out'
          }}
        ></div>

        {/* Steps */}
        <div className="flow-steps">
          {steps.map((step, index) => (
            <div className="flow-step" key={index}>
              <div 
                className={`step-dot ${index <= activeStep ? 'active' : ''}`}
              ></div>
              <div className={`step-box ${index <= activeStep ? 'active' : ''}`}>
                {step.label}
              </div>
              <div className={`step-desc ${index <= activeStep ? 'active' : ''}`}>
                {step.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flow;
