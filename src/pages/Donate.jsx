import React, { useState, useEffect } from "react";
import {
  FaHeart,
  FaGlobe,
  FaMapMarkerAlt,
  FaCreditCard,
  FaPaypal,
  FaMobile,
  FaUniversity,
  FaShieldAlt,
  FaUsers,
  FaBaby,
  FaHome,
  FaGraduationCap,
  FaArrowRight,
  FaCalculator,
  FaStar,
  FaQuoteLeft,
  FaCheckCircle,
  FaLock
} from "react-icons/fa";
import "../styles/Donate.css";

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState("international");
  const [selectedFrequency, setSelectedFrequency] = useState("one-time");
  const [activeTab, setActiveTab] = useState("amount");
  const [impactCalculation, setImpactCalculation] = useState("");

  const donationAmounts = {
    international: [
      { amount: 25, impact: "Provides meals for 1 child for a week", children: 0.5 },
      { amount: 50, impact: "Covers medical care for 1 child for a month", children: 1 },
      { amount: 100, impact: "Supports 1 child's education for 3 months", children: 2 },
      { amount: 250, impact: "Provides shelter for 1 child for 2 months", children: 5 },
      { amount: 500, impact: "Covers full care for 1 child for 1 month", children: 10 },
      { amount: 1000, impact: "Supports 2 children for a full month", children: 20 }
    ],
    national: [
      { amount: 1000, impact: "Provides meals for 1 child for a week", currency: "ETB", children: 0.5 },
      { amount: 2000, impact: "Covers medical care for 1 child for a month", currency: "ETB", children: 1 },
      { amount: 4000, impact: "Supports 1 child's education for 3 months", currency: "ETB", children: 2 },
      { amount: 10000, impact: "Provides shelter for 1 child for 2 months", currency: "ETB", children: 5 },
      { amount: 20000, impact: "Covers full care for 1 child for 1 month", currency: "ETB", children: 10 },
      { amount: 40000, impact: "Supports 2 children for a full month", currency: "ETB", children: 20 }
    ]
  };

  const impactStats = [
    { icon: FaUsers, number: "50", label: "Children Currently Cared For", color: "#667eea" },
    { icon: FaBaby, number: "18", label: "children reunited with family", color: "#38a169" },
    { icon: FaHome, number: "82", label: "children placed in legal domestic adoption", color: "#ed8936" },
    { icon: FaGraduationCap, number: "62", label: "children supported outside the village", color: "#805ad5" }
  ];

  const testimonials = [
    {
      name: "Hans werner",
      role: "Monthly Donor",
      text: "Knowing that my monthly donation helps provide a safe home for these children gives me so much joy. The updates I receive show the real impact of my contribution.",
      rating: 5
    },
    {
      name: "Dr Klaus Reisenberger",
      role: "Corporate Sponsor",
      text: "Our company has been supporting Enat Debremarkos for 2 years. The transparency and dedication of the team is remarkable. We've seen firsthand how donations transform lives.",
      rating: 5
    },
    {
      name: "Almaz Tadesse",
      role: "Local Supporter",
      text: "በኢትዮጵያ ውስጥ ለሚገኙ ህጻናት የምናደርገው ድጋፍ በጣም አስፈላጊ ነው። እነዚህ ህጻናት ተስፋ እና ፍቅር ያገኛሉ።",
      rating: 5
    }
  ];

  const securityFeatures = [
    { icon: FaLock, title: "256-bit SSL Encryption", description: "Bank-level security for all transactions" },
    { icon: FaShieldAlt, title: "PCI DSS Compliant", description: "Meets highest payment security standards" },
    { icon: FaCheckCircle, title: "Verified Organization", description: "Registered charity with full transparency" }
  ];

  useEffect(() => {
    const amount = selectedAmount || parseFloat(customAmount) || 0;
    
    if (amount > 0) {
      const childrenHelped = Math.floor(amount / 50);
      const mealsProvided = Math.floor(amount / 5);
      const monthsOfCare = Math.floor(amount / 500);
      
      const formatCurrency = (amount) => {
        if (donationType === "national") {
          return `${amount.toLocaleString()} ETB`;
        }
        return `$${amount}`;
      };
      
      const formattedAmount = formatCurrency(amount);

      if (selectedFrequency === "monthly") {
        setImpactCalculation(`Your monthly donation of ${formattedAmount} will help ${childrenHelped} children each month, providing ${mealsProvided} meals monthly and ${monthsOfCare * 12} months of care annually.`);
      } else {
        setImpactCalculation(`Your donation of ${formattedAmount} will help ${childrenHelped} children, provide ${mealsProvided} meals, and support ${monthsOfCare} months of care.`);
      }
    } else {
      setImpactCalculation("");
    }
  }, [selectedAmount, customAmount, selectedFrequency, donationType]);

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const formatCurrency = (amount) => {
    if (donationType === "national") {
      return `${amount.toLocaleString()} ETB`;
    }
    return `$${amount}`;
  };

  const getCurrentAmount = () => {
    return selectedAmount || parseFloat(customAmount) || 0;
  };

  const getProgressPercentage = () => {
    switch (activeTab) {
      case "amount": return getCurrentAmount() > 0 ? 33 : 0;
      case "frequency": return 66;
      case "payment": return 100;
      default: return 0;
    }
  };

  return (
    <div className="donate-page">
      {/* Hero Section */}
      <section className="donate-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <FaHeart className="hero-icon" />
            Transform Lives Today
          </h1>
          <p className="hero-subtitle">
            Your donation provides love, care, and hope to Ethiopia's most vulnerable children.
            Join our community of supporters making a real difference.
          </p>
          <div className="hero-cta">
            <div className="urgency-indicator">
              <span className="urgency-dot"></span>
              <span>45 children need your support right now</span>
            </div>
          </div>
        </div>
        <div className="hero-stats">
          {impactStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="stat-item" style={{ '--stat-color': stat.color }}>
                <IconComponent className="stat-icon" />
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Main Donation Form */}
      <section className="donation-form-section">
        <div className="form-container">
          {/* Progress Indicator */}
          <div className="progress-indicator">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${getProgressPercentage()}%` }}
              ></div>
            </div>
            <div className="progress-steps">
              <div className={`step ${activeTab === "amount" ? "active" : ""}`}>Amount</div>
              <div className={`step ${activeTab === "frequency" ? "active" : ""}`}>Frequency</div>
              <div className={`step ${activeTab === "payment" ? "active" : ""}`}>Payment</div>
            </div>
          </div>

          {/* Donation Type Selector */}
          <div className="donation-type-selector">
            <h2>Choose Your Donation Method</h2>
            <div className="type-buttons">
              <button
                className={`type-button ${donationType === "international" ? "active" : ""}`}
                onClick={() => setDonationType("international")}
              >
                <FaGlobe className="type-icon" />
                <div>
                  <h3>International Donation</h3>
                  <p>PayPal, Credit Card, Bank Transfer (USD)</p>
                </div>
              </button>
              <button
                className={`type-button ${donationType === "national" ? "active" : ""}`}
                onClick={() => setDonationType("national")}
              >
                <FaMapMarkerAlt className="type-icon" />
                <div>
                  <h3>Ethiopian Donation</h3>
                  <p>Mobile Money, Bank Transfer (ETB)</p>
                </div>
              </button>
            </div>
          </div>

          {/* Donation Form Tabs */}
          <div className="form-tabs">
            <div className="tab-headers">
              <button
                className={`tab-header ${activeTab === "amount" ? "active" : ""}`}
                onClick={() => setActiveTab("amount")}
              >
                <span className="tab-number">1</span>
                Amount
              </button>
              <button
                className={`tab-header ${activeTab === "frequency" ? "active" : ""}`}
                onClick={() => setActiveTab("frequency")}
              >
                <span className="tab-number">2</span>
                Frequency
              </button>
              <button
                className={`tab-header ${activeTab === "payment" ? "active" : ""}`}
                onClick={() => setActiveTab("payment")}
              >
                <span className="tab-number">3</span>
                Payment
              </button>
            </div>

            <div className="tab-content">
              {/* Amount Selection Tab */}
              {activeTab === "amount" && (
                <div className="amount-tab">
                  <h3>Select Donation Amount</h3>
                  <div className="amount-grid">
                    {donationAmounts[donationType].map((item, index) => (
                      <div
                        key={index}
                        className={`amount-card ${selectedAmount === item.amount ? "selected" : ""}`}
                        onClick={() => handleAmountSelect(item.amount)}
                      >
                        <div className="amount-value">
                          {formatCurrency(item.amount)}
                        </div>
                        <div className="amount-impact">{item.impact}</div>
                      </div>
                    ))}
                  </div>

                  <div className="custom-amount">
                    <label>Or enter custom amount:</label>
                    <div className="custom-input-wrapper">
                      <span className="currency-symbol">
                        {donationType === "national" ? "ETB" : "$"}
                      </span>
                      <input
                        type="number"
                        placeholder="Enter amount"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        className="custom-amount-input"
                      />
                    </div>
                  </div>

                  <button
                    className="next-button"
                    onClick={() => setActiveTab("frequency")}
                    disabled={!getCurrentAmount()}
                  >
                    Continue
                    <FaArrowRight />
                  </button>
                </div>
              )}

              {/* Frequency Selection Tab */}
              {activeTab === "frequency" && (
                <div className="frequency-tab">
                  <h3>Donation Frequency</h3>
                  <div className="frequency-options">
                    <div
                      className={`frequency-card ${selectedFrequency === "one-time" ? "selected" : ""}`}
                      onClick={() => setSelectedFrequency("one-time")}
                    >
                      <h4>One-Time Donation</h4>
                      <p>Make a single donation to support our mission</p>
                    </div>
                    <div
                      className={`frequency-card ${selectedFrequency === "monthly" ? "selected" : ""}`}
                      onClick={() => setSelectedFrequency("monthly")}
                    >
                      <h4>Monthly Donation</h4>
                      <p>Provide ongoing support with automatic monthly donations</p>
                      <div className="monthly-badge">Most Impact</div>
                    </div>
                  </div>

                  <div className="frequency-summary">
                    <div className="summary-amount">
                      {formatCurrency(getCurrentAmount())} {selectedFrequency === "monthly" ? "per month" : ""}
                    </div>
                    <div className="summary-impact">
                      {selectedFrequency === "monthly"
                        ? `Provides ongoing support for ${Math.floor(getCurrentAmount() / 50)} children`
                        : "One-time support for our children"
                      }
                    </div>
                  </div>

                  <div className="frequency-buttons">
                    <button
                      className="back-button"
                      onClick={() => setActiveTab("amount")}
                    >
                      Back
                    </button>
                    <button
                      className="next-button"
                      onClick={() => setActiveTab("payment")}
                    >
                      Continue
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              )}

              {/* Payment Method Tab */}
              {activeTab === "payment" && (
                <div className="payment-tab">
                  <h3>Payment Method</h3>

                  {donationType === "international" ? (
                    <div className="payment-methods">
                      <div className="payment-method">
                        <FaCreditCard className="payment-icon" />
                        <div className="payment-info">
                          <h4>Credit/Debit Card</h4>
                          <p>Secure payment via Stripe</p>
                        </div>
                        <button className="select-payment-btn">Select</button>
                      </div>

                      <div className="payment-method">
                        <FaPaypal className="payment-icon" />
                        <div className="payment-info">
                          <h4>PayPal</h4>
                          <p>Pay with your PayPal account</p>
                        </div>
                        <button className="select-payment-btn">Select</button>
                      </div>

                      <div className="payment-method">
                        <FaUniversity className="payment-icon" />
                        <div className="payment-info">
                          <h4>Bank Transfer</h4>
                          <p>Direct bank transfer (USD)</p>
                        </div>
                        <button className="select-payment-btn">Select</button>
                      </div>
                    </div>
                  ) : (
                    <div className="payment-methods">
                      <div className="payment-method">
                        <FaMobile className="payment-icon" />
                        <div className="payment-info">
                          <h4>Mobile Money</h4>
                          <p>Send to: <strong>0912345678</strong> (Enat Debremarkos)</p>
                          <div className="mobile-money-options">
                            <span className="mobile-option">CBE Birr</span>
                            <span className="mobile-option">M-Birr</span>
                            <span className="mobile-option">HelloCash</span>
                            <span className="mobile-option">Amole</span>
                          </div>
                        </div>
                        <button className="select-payment-btn">Select</button>
                      </div>

                      <div className="payment-method">
                        <FaUniversity className="payment-icon" />
                        <div className="payment-info">
                          <h4>Bank Transfer (ETB)</h4>
                          <div className="bank-accounts">                   
                          </div>
                        </div>
                        <button className="select-payment-btn">Select</button>
                      </div>

                      <div className="payment-method">
                        <FaMobile className="payment-icon" />
                        <div className="payment-info">
                          <h4>Ethio Telecom Payment</h4>
                          <p>Send via Telebirr to:</p>
                          <p><strong>0912345678</strong> (Enat Debremarkos)</p>
                          <p>Short Code: <strong>808#</strong></p>
                        </div>
                        <button className="select-payment-btn">Select</button>
                      </div>
                    </div>
                  )}

                  {/* API Agreements Note */}
                  <div className="api-agreement-note">
                    <p>
                      <FaShieldAlt /> All payments are processed securely through our API agreements with:
                    </p>
                    <div className="payment-providers">
                      <span>Ethio Telecom</span>
                      <span>Commercial Bank of Ethiopia</span>
                      <span>Abyssinia Bank</span>
                    </div>
                    <div className="bank-accounts">
    <p className="current-account">For Now use This Acc</p>
  <div className="bank-account">
    <strong>🖤Commercial Bank of Ethiopia</strong>
    <p>Account: 1000269705977</p>
    <p>Name: Enat Debremarkos Children Village</p>
 
  </div>
  <div className="bank-account">
    <strong>🖤Abay Bank </strong>
    <p>Account: 2861114415630015</p>
    <p>Name: Enat Debremarkos Children Village</p>
   
  </div>
  <div className="bank-account">
    <strong>🖤Buna Bank </strong>
    <p>Account:1369501007427</p>
    <p>Name: Enat Debremarkos Children Village </p>

  </div>
  <div className="bank-account">
    <strong>🖤Abyssinia Bank</strong>
    <p>Account: 92035808</p>
    <p>Name: Enat Debremarkos Children Village</p>
  </div>
  <div className="bank-account">
    <strong>🖤Amhara Bank </strong>
    <p>Account: 99000032786666</p>
    <p>Name: Enat Debremarkos Children Village</p>
  </div>
  <div className="bank-account">
    <strong>🖤Birhan Bank </strong>
    <p>Account: 1130590051378</p>
    <p>Name: Enat Debremarkos Children Village</p>
   
  </div>
  <div className="bank-account">
    <strong>🖤Awash Bank </strong>
    <p>Account: 01320658830500</p>
    <p>Name: Enat Debremarkos Children Village</p>
   
  </div>
  <div className="bank-account">
    <strong>🖤 Dashen Bank </strong>
    <p>Account: 5064113129011</p>
    <p>Name: Enat Debremarkos Children Village</p>
   
  </div>
  <div className="bank-account">
    <strong>🖤Hibret Bank</strong>
    <p>Account: 2230113608848016</p>
    <p>Name: Enat Debremarkos Children Village</p>
   
  </div>
  <div className="bank-account">
    <strong>🖤Wegagen Bank</strong>
    <p>Account: 10010359</p>
    <p>Name: Enat Debremarkos Children Village</p>
   
  </div>
  <div className="bank-account">
    <strong>🖤Addis International Bank</strong>
    <p>Account: 582316</p>
    <p>Name: Enat Debremarkos Children Village</p>
   
  </div>
  <div className="bank-account">
    <strong>🖤Tsehay Bank </strong>
    <p>Account: 0407160006142</p>
    <p>Name: Enat Debremarkos Children Village</p>
   
  </div>
  <div className="bank-account">
    <strong>🖤Ahadu Bank </strong>
    <p>Account: 0038703111801</p>
    <p>Name: Enat Debremarkos Children Village</p>
   
  </div>
  <div className="bank-account">
    <strong>🖤Tsehay Bank</strong>
    <p>Account: 1003678233</p>
    <p>Name: Enat Debremarkos Children Village</p>
   
  </div>
  <div className="bank-account">
    <strong>🖤Zemen Bank</strong>
    <p>Account: 3245411140355018</p>
    <p>Name: Enat Debremarkos Children Village</p>
   
  </div>
  <div className="bank-account">
    <strong>🖤Enat Bank </strong>
    <p>Account: 14116109338001</p>
    <p>Name: Enat Debremarkos Children Village</p>
   
  </div>
</div>
                  </div>

                  <div className="payment-summary">
                    <div className="summary-card">
                      <h4>Donation Summary</h4>
                      <div className="summary-row">
                        <span>Amount:</span>
                        <span>{formatCurrency(getCurrentAmount())}</span>
                      </div>
                      <div className="summary-row">
                        <span>Frequency:</span>
                        <span>{selectedFrequency === "monthly" ? "Monthly" : "One-time"}</span>
                      </div>
                      <div className="summary-row">
                        <span>Type:</span>
                        <span>{donationType === "international" ? "International" : "Ethiopian"}</span>
                      </div>
                    </div>
                  </div>

                  <div className="payment-buttons">
                    <button
                      className="back-button"
                      onClick={() => setActiveTab("frequency")}
                    >
                      Back
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Impact Calculator */}
        {impactCalculation && (
          <div className="impact-calculator">
            <FaCalculator className="calculator-icon" />
            <h3>Your Impact</h3>
            <p>{impactCalculation}</p>
          </div>
        )}
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <h2>What Our Supporters Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <FaQuoteLeft className="quote-icon" />
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="star" />
                    ))}
                  </div>
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Security Section */}
      <section className="security-section">
        <div className="security-container">
          <h2>Your Donation is 100% Secure</h2>
          <div className="security-features">
            {securityFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="security-feature">
                  <IconComponent className="security-feature-icon" />
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              );
            })}
          </div>
          <div className="trust-badges">
            <div className="badge"> SSL Secured</div>
            <div className="badge"> Verified Charity</div>
            <div className="badge"> PCI Compliant</div>
          </div>
        </div>
      </section>
      
      {/* Additional Help Section */}
      <div className="additional-help">
        <h3>Additional Resources</h3>
        <div className="help-links">
          <a href="/contact" className="help-link">
            <span>💬</span>
            <span>Contact Form</span>
          </a>
          <a href="/about" className="help-link">
            <span>ℹ️</span>
            <span>About Us</span>
          </a>
          <a href="/story" className="help-link">
            <span>📖</span>
            <span>Our Story</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Donate;
