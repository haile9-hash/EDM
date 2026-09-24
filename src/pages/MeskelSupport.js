import React, { useEffect, useState } from "react";

import {
  HeartHandshake,
  Info,
  ShieldCheck,
  Smartphone,
  ChevronDown,
  Heart,
  CheckCircle2,
  Sprout,
  Flower2,
  Gift,
  Sparkles,
  MousePointerClick,
  CreditCard,
  FileCheck2,
  X,
  Building2,
  Copy,
  Check,
  ScanLine,
  BadgeCheck,
  Lock,
  HandHeart,
  Phone,
  Mail,
  ArrowRight,
  Send,
} from "lucide-react";

import "../styles/MeskelSupport.css";

/* =========================================================
   SOURCE IMAGE
   This image is inside src/assets/images
========================================================= */

import childrenVillageImage from "../assets/images/children-village.jpg";

/* =========================================================
   PUBLIC IMAGES
   These files are inside public/images
========================================================= */

const enatLogo = "public/images/enat-logo.png";
const cbeQr = "public/images/cbe_qr.png";
const telebirrQr = "public/images/telebirr_qr.png";


function MeskelSupport({ setIsHomePage }) {

  /* =========================================================
     LANGUAGE
  ========================================================= */

  const [language, setLanguage] = useState(
    localStorage.getItem("meskelLanguage") || "am"
  );


  /* =========================================================
     PAYMENT STATE
  ========================================================= */

  const [selectedAmount, setSelectedAmount] = useState(null);
  const [copiedValue, setCopiedValue] = useState("");


  /* =========================================================
     PAGE STATE
  ========================================================= */

  useEffect(() => {

    if (setIsHomePage) {
      setIsHomePage(false);
    }

  }, [setIsHomePage]);


  /* =========================================================
     LANGUAGE + PAGE TITLE
  ========================================================= */

  useEffect(() => {

    document.documentElement.lang = language;

    document.title =
      language === "am"
        ? "መስቀል ድጋፍ | እናት ደብረማርቆስ ህፃናት መንደር"
        : "Meskel Support | Enat Debremarkos Children's Village";

  }, [language]);


  /* =========================================================
     TRANSLATION
  ========================================================= */

  const t = (am, en) => {

    return language === "am"
      ? am
      : en;

  };


  /* =========================================================
     LANGUAGE TOGGLE
  ========================================================= */

  const toggleLanguage = () => {

    const newLanguage =
      language === "am"
        ? "en"
        : "am";

    setLanguage(newLanguage);

    localStorage.setItem(
      "meskelLanguage",
      newLanguage
    );

  };


  /* =========================================================
     SUPPORT AMOUNTS
  ========================================================= */

  const supportAmounts = [

    {
      amount: 200,
      icon: <Sprout />,
      am: "ትንሽ ድጋፍ",
      en: "Small contribution",
    },

    {
      amount: 500,
      icon: <Flower2 />,
      am: "የመስቀል ድጋፍ",
      en: "Meskel contribution",
      featured: true,
    },

    {
      amount: 1000,
      icon: <Heart />,
      am: "የቤተሰብ ድጋፍ",
      en: "Family contribution",
    },

    {
      amount: 5000,
      icon: <Gift />,
      am: "የበዓል ድጋፍ",
      en: "Holiday contribution",
    },

    {
      amount: 10000,
      icon: <Sparkles />,
      am: "ልዩ ድጋፍ",
      en: "Special contribution",
    },

  ];


  /* =========================================================
     OPEN PAYMENT MODAL
  ========================================================= */

  const openPaymentModal = (amount) => {

    setSelectedAmount(amount);

    document.body.classList.add(
      "meskel-modal-open"
    );

  };


  /* =========================================================
     CLOSE PAYMENT MODAL
  ========================================================= */

  const closePaymentModal = () => {

    setSelectedAmount(null);

    document.body.classList.remove(
      "meskel-modal-open"
    );

  };


  /* =========================================================
     COPY TO CLIPBOARD
  ========================================================= */

  const copyToClipboard = async (value) => {

    try {

      await navigator.clipboard.writeText(value);

      setCopiedValue(value);

      setTimeout(() => {

        setCopiedValue("");

      }, 1800);

    } catch (error) {

      console.error(
        "Copy failed:",
        error
      );

    }

  };


  /* =========================================================
     ESCAPE KEY
  ========================================================= */

  useEffect(() => {

    const handleKeyDown = (event) => {

      if (
        event.key === "Escape" &&
        selectedAmount
      ) {

        closePaymentModal();

      }

    };


    document.addEventListener(
      "keydown",
      handleKeyDown
    );


    return () => {

      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

    };

  }, [selectedAmount]);


  /* =========================================================
     CURRENT YEAR
  ========================================================= */

  const currentYear =
    new Date().getFullYear();


  /* =========================================================
     GOOGLE FORM
  ========================================================= */

  const googleFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSc7_2CR0n1GMbY9F7Yk_2cQG5_kOVdnKWnD7Yf7YsOH0vzyNw/viewform?usp=publish-editor";


  return (

    <div className="meskel-page">


      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="meskel-navbar">

        <div className="meskel-container meskel-nav-content">

          <a
            href="#meskel-home"
            className="meskel-logo"
          >

            <img
              src={enatLogo}
              alt="Enat Debremarkos Children's Village"
            />

            <div className="meskel-logo-text">

              <strong>

                {t(
                  "እናት ደብረማርቆስ",
                  "Enat Debremarkos"
                )}

              </strong>

              <span>

                {t(
                  "ህፃናት መንደር",
                  "Children's Village"
                )}

              </span>

            </div>

          </a>


          <div className="meskel-nav-actions">

            <button
              className="meskel-language-btn"
              type="button"
              onClick={toggleLanguage}
              aria-label="Change language"
              title={
                language === "am"
                  ? "Switch to English"
                  : "ወደ አማርኛ ቀይር"
              }
            >

              <span className="meskel-language-code">

                {language === "am"
                  ? "AM / EN"
                  : "EN / AM"}

              </span>

            </button>


            <a
              href="#meskel-support"
              className="meskel-nav-support-btn"
            >

              {t(
                "ድጋፍ ያድርጉ",
                "Give Support"
              )}

            </a>

          </div>

        </div>

      </header>


      <main>


        {/* =====================================================
            HERO
        ===================================================== */}

        <section
          className="meskel-hero"
          id="meskel-home"
        >

          <video
            className="meskel-hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={childrenVillageImage}
          >

            <source
              src="/video/meskel.mp4"
              type="video/mp4"
            />

          </video>


          <div className="meskel-hero-overlay"></div>

          <div className="meskel-hero-glow meskel-glow-one"></div>

          <div className="meskel-hero-glow meskel-glow-two"></div>


          <div className="meskel-container meskel-hero-container">

            <div className="meskel-hero-content">


              <div className="meskel-badge">

                <span className="meskel-cross-symbol">
                  ✝
                </span>

                <span>

                  {t(
                    "መስቀል 2019",
                    "Meskel 2026"
                  )}

                </span>

              </div>


              <h1>

                <span>

                  {t(
                    "እንኳን ለብርሃነ መስቀል",
                    "Happy Meskel"
                  )}

                </span>

                <span className="meskel-title-line">

                  {t(
                    "በሰላም አደረሳችሁ!",
                    "May you celebrate in peace!"
                  )}

                </span>

              </h1>


              <p className="meskel-hero-description">

                {t(

                  "በዚህ የመስቀል በዓል ለእናት ደብረማርቆስ ህፃናት መንደር ያለዎትን ድጋፍ ያድርጉ። ትንሽ ድጋፍ ትልቅ ደስታን ይፈጥራል።",

                  "This Meskel, support the children of Enat Debremarkos Children's Village. Every contribution can help bring joy, hope, and a brighter celebration."

                )}

              </p>


              <div className="meskel-hero-buttons">

                <a
                  href="#meskel-support"
                  className="meskel-primary-btn"
                >

                  <HeartHandshake size={19} />

                  {t(
                    "ድጋፍ ያድርጉ",
                    "Give Support"
                  )}

                </a>


                <a
                  href="#meskel-about"
                  className="meskel-secondary-btn"
                >

                  <Info size={19} />

                  {t(
                    "የድጋፍ ዘመቻው",
                    "About Campaign"
                  )}

                </a>

              </div>


              <div className="meskel-hero-trust">

                <div>

                  <ShieldCheck size={17} />

                  <span>

                    {t(
                      "በእምነት ይደግፉ",
                      "Support with confidence"
                    )}

                  </span>

                </div>


                <div>

                  <Smartphone size={17} />

                  <span>

                    {t(
                      "ቀላል የክፍያ መንገዶች",
                      "Easy payment options"
                    )}

                  </span>

                </div>

              </div>

            </div>

          </div>


          <a
            href="#meskel-about"
            className="meskel-scroll-down"
            aria-label="Scroll down"
          >

            <ChevronDown size={19} />

          </a>

        </section>


        {/* =====================================================
            ABOUT
        ===================================================== */}

        <section
          className="meskel-section meskel-about"
          id="meskel-about"
        >

          <div className="meskel-container">

            <div className="meskel-section-heading">

              <span className="meskel-section-label">

                {t(
                  "የፍቅር ድጋፍ",
                  "A Gift of Love"
                )}

              </span>


              <h2>

                {t(
                  "በመስቀል ደስታን እንካፈል",
                  "Share the Joy of Meskel"
                )}

              </h2>


              <p>

                {t(

                  "የበዓሉን ደስታ ከእናት ደብረማርቆስ ህፃናት መንደር ጋር እንካፈል።",

                  "Let's share the joy of Meskel with the children of Enat Debremarkos Children's Village."

                )}

              </p>

            </div>


            <div className="meskel-about-grid">


              <div className="meskel-about-image-wrapper">

                <div className="meskel-image-decoration"></div>

                <img
                  src={childrenVillageImage}
                  alt="Enat Debremarkos Children's Village"
                  className="meskel-about-image"
                />

              </div>


              <div className="meskel-about-content">

                <div className="meskel-content-icon">

                  <Heart size={25} />

                </div>


                <h3>

                  {t(
                    "አንድ ትንሽ ድጋፍ፣ ትልቅ ደስታ",
                    "A Small Contribution Can Bring Great Joy"
                  )}

                </h3>


                <p>

                  {t(

                    "ይህ የመስቀል ድጋፍ ዘመቻ ለእናት ደብረማርቆስ ህፃናት መንደር የበዓሉን ደስታ ለማካፈል የተዘጋጀ ነው።",

                    "This Meskel support campaign has been created to help share the joy of the holiday with the children of Enat Debremarkos Children's Village."

                  )}

                </p>


                <p>

                  {t(

                    "የመረጡትን የድጋፍ መጠን በመምረጥ በባንክ ማስተላለፍ፣ በቴሌብር ወይም QR Code በመጠቀም ድጋፍዎን ማድረግ ይችላሉ።",

                    "Choose a support amount and contribute using bank transfer, Telebirr, or a QR code."

                  )}

                </p>


                <div className="meskel-about-points">

                  <div>

                    <CheckCircle2 size={19} />

                    <span>

                      {t(
                        "ቀላል የክፍያ አማራጮች",
                        "Simple payment options"
                      )}

                    </span>

                  </div>


                  <div>

                    <CheckCircle2 size={19} />

                    <span>

                      {t(
                        "የክፍያ ማረጋገጫ",
                        "Payment confirmation"
                      )}

                    </span>

                  </div>


                  <div>

                    <CheckCircle2 size={19} />

                    <span>

                      {t(
                        "በሞባይል ላይ ቀላል አጠቃቀም",
                        "Mobile-friendly experience"
                      )}

                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            SUPPORT
        ===================================================== */}

        <section
          className="meskel-section meskel-support"
          id="meskel-support"
        >

          <div className="meskel-container">

            <div className="meskel-section-heading">

              <span className="meskel-section-label">

                {t(
                  "ድጋፍ ያድርጉ",
                  "Make a Contribution"
                )}

              </span>


              <h2>

                {t(
                  "የድጋፍ መጠን ይምረጡ",
                  "Choose Your Support Amount"
                )}

              </h2>


              <p>

                {t(
                  "የሚመችዎትን የድጋፍ መጠን ይምረጡ።",
                  "Choose the support amount that works for you."
                )}

              </p>

            </div>


            <div className="meskel-support-grid">

              {supportAmounts.map((item) => (

                <button
                  key={item.amount}
                  type="button"
                  className={`meskel-support-card ${
                    item.featured
                      ? "featured"
                      : ""
                  }`}
                  onClick={() =>
                    openPaymentModal(item.amount)
                  }
                >

                  {item.featured && (

                    <span className="meskel-popular-badge">

                      {t(
                        "የብዙዎች ምርጫ",
                        "Popular"
                      )}

                    </span>

                  )}


                  <div className="meskel-support-card-icon">

                    {item.icon}

                  </div>


                  <h3>

                    {item.amount.toLocaleString()}

                    <small> ETB</small>

                  </h3>


                  <p>

                    {t(
                      item.am,
                      item.en
                    )}

                  </p>


                  <span className="meskel-select-link">

                    {t(
                      "ይምረጡ",
                      "Select"
                    )}

                    <ArrowRight size={15} />

                  </span>

                </button>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            HOW IT WORKS
        ===================================================== */}

        <section className="meskel-section meskel-how">

          <div className="meskel-container">

            <div className="meskel-section-heading">

              <span className="meskel-section-label">

                {t(
                  "ቀላል ሂደት",
                  "Simple Process"
                )}

              </span>


              <h2>

                {t(
                  "እንዴት ድጋፍ ማድረግ ይችላሉ?",
                  "How Does It Work?"
                )}

              </h2>

            </div>


            <div className="meskel-steps">


              <div className="meskel-step">

                <div className="meskel-step-number">
                  01
                </div>

                <MousePointerClick />

                <h3>

                  {t(
                    "መጠን ይምረጡ",
                    "Choose an Amount"
                  )}

                </h3>

                <p>

                  {t(
                    "የሚመችዎትን የድጋፍ መጠን ይምረጡ።",
                    "Choose the contribution amount that works for you."
                  )}

                </p>

              </div>


              <div className="meskel-step">

                <div className="meskel-step-number">
                  02
                </div>

                <CreditCard />

                <h3>

                  {t(
                    "ክፍያ ያድርጉ",
                    "Make a Payment"
                  )}

                </h3>

                <p>

                  {t(
                    "በባንክ፣ በቴሌብር ወይም QR Code ይክፈሉ።",
                    "Pay using bank transfer, Telebirr, or QR code."
                  )}

                </p>

              </div>


              <div className="meskel-step">

                <div className="meskel-step-number">
                  03
                </div>

                <FileCheck2 />

                <h3>

                  {t(
                    "ያረጋግጡ",
                    "Confirm Your Payment"
                  )}

                </h3>

                <p>

                  {t(
                    "የክፍያዎን መረጃ በGoogle Form ይላኩ።",
                    "Submit your payment details through the confirmation form."
                  )}

                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            TRUST
        ===================================================== */}

        <section className="meskel-section meskel-trust">

          <div className="meskel-container">

            <div className="meskel-trust-box">

              <div className="meskel-trust-icon">

                <HandHeart size={31} />

              </div>


              <div className="meskel-trust-content">

                <span className="meskel-section-label">

                  {t(
                    "አብረን እናድርግ",
                    "Together"
                  )}

                </span>


                <h2>

                  {t(
                    "የመስቀልን ደስታ እናካፍል",
                    "Let's Share the Joy of Meskel"
                  )}

                </h2>


                <p>

                  {t(

                    "እያንዳንዱ ድጋፍ ዋጋ አለው። ከእኛ ጋር ስለሚሆኑ እናመሰግናለን።",

                    "Every contribution matters. Thank you for standing with us."

                  )}

                </p>

              </div>

            </div>

          </div>

        </section>

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="meskel-footer">

        <div className="meskel-container">

          <div className="meskel-footer-grid">


            <div className="meskel-footer-brand">

              <div className="meskel-footer-logo">

                <img
                  src={enatLogo}
                  alt="Enat Debremarkos Children's Village"
                />

                <div>

                  <strong>
                    Enat Debremarkos
                  </strong>

                  <span>
                    Children's Village
                  </span>

                </div>

              </div>


              <p>

                {t(

                  "በፍቅር እንረዳ። በአንድነት እናስደስት።",

                  "Supporting with love. Creating joy together."

                )}

              </p>

            </div>


            <div className="meskel-footer-contact">

              <h3>

                {t(
                  "ያግኙን",
                  "Contact"
                )}

              </h3>


              <a href="tel:+251918545360">

                <Phone size={16} />

                <span>
                  +251918545360
                </span>

              </a>


              <a href="mailto:enatedebremarkoschildrenvillage@email.com">

                <Mail size={16} />

                <span>
                  enatedebremarkoschildrenvillage@email.com
                </span>

              </a>

            </div>


            <div className="meskel-footer-partner">

              <h3>

                {t(
                  "የቴክኖሎጂ አጋር",
                  "Technology Partner"
                )}

              </h3>


              <p>

                {t(
                  "የተሰራው በ",
                  "Built with care by"
                )}

              </p>


              <strong>

                <a
                  href="https://t.me/codebiruh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CodeBiruh
                </a>

              </strong>

            </div>

          </div>


          <div className="meskel-footer-bottom">

            <p>

              © {currentYear} Enat Debremarkos
              Children's Village.

            </p>


            <p>

              {t(
                "መልካም የመስቀል በዓል!",
                "Happy Meskel!"
              )}

            </p>

          </div>

        </div>

      </footer>


      {/* =====================================================
          PAYMENT MODAL
      ===================================================== */}

      {selectedAmount && (

        <div
          className="meskel-modal"
          onClick={closePaymentModal}
        >

          <div
            className="meskel-modal-box"
            onClick={(event) =>
              event.stopPropagation()
            }
          >


            {/* CLOSE */}

            <button
              type="button"
              className="meskel-modal-close"
              onClick={closePaymentModal}
              aria-label="Close"
            >

              <X size={20} />

            </button>


            {/* =================================================
                MODAL HEADER
            ================================================= */}

            <div className="meskel-modal-header">

              <div className="meskel-modal-icon">

                <HeartHandshake size={27} />

              </div>


              <span className="meskel-section-label">

                {t(
                  "የክፍያ መረጃ",
                  "Payment Information"
                )}

              </span>


              <h2>

                {selectedAmount.toLocaleString()} ETB

              </h2>


              <p>

                {t(

                  "የመረጡትን የድጋፍ መጠን በመክፈል ድጋፍዎን ያድርጉ።",

                  "Complete your contribution using one of the payment options below."

                )}

              </p>

            </div>


            {/* =================================================
                PAYMENT METHODS
            ================================================= */}

            <div className="meskel-payment-methods">


              {/* BANK */}

              <div className="meskel-payment-card">

                <div className="meskel-payment-card-header">

                  <div>

                    <Building2 size={20} />

                    <strong>

                      {t(
                        "የባንክ ማስተላለፊያ",
                        "Bank Transfer"
                      )}

                    </strong>

                  </div>


                  <BadgeCheck size={19} />

                </div>


                <div className="meskel-detail-row">

                  <span>

                    {t(
                      "የባንክ ስም",
                      "Bank Name"
                    )}

                  </span>


                  <strong>
                    Commercial Bank of Ethiopia
                  </strong>

                </div>


                <div className="meskel-detail-row">

                  <span>

                    {t(
                      "የሂሳብ ስም",
                      "Account Name"
                    )}

                  </span>


                  <strong>
                    ENAT DEBREMARKOS
                    CHILDREN'S VILLAGE
                  </strong>

                </div>


                <div className="meskel-detail-row">

                  <span>

                    {t(
                      "የሂሳብ ቁጥር",
                      "Account Number"
                    )}

                  </span>


                  <strong>
                    1000269705977
                  </strong>


                  <button
                    type="button"
                    onClick={() =>
                      copyToClipboard(
                        "1000269705977"
                      )
                    }
                    aria-label="Copy account number"
                  >

                    {copiedValue ===
                    "1000269705977" ? (

                      <Check size={16} />

                    ) : (

                      <Copy size={16} />

                    )}

                  </button>

                </div>

              </div>


              {/* TELEBIRR */}

              <div className="meskel-payment-card">

                <div className="meskel-payment-card-header">

                  <div>

                    <Smartphone size={20} />

                    <strong>
                      Telebirr
                    </strong>

                  </div>


                  <BadgeCheck size={19} />

                </div>


                <div className="meskel-detail-row">

                  <span>

                    {t(
                      "የቴሌብር ስልክ",
                      "Telebirr Number"
                    )}

                  </span>


                  <strong>
                    0918545360
                  </strong>


                  <button
                    type="button"
                    onClick={() =>
                      copyToClipboard(
                        "0918545360"
                      )
                    }
                    aria-label="Copy Telebirr number"
                  >

                    {copiedValue ===
                    "0918545360" ? (

                      <Check size={16} />

                    ) : (

                      <Copy size={16} />

                    )}

                  </button>

                </div>

              </div>


              {/* =================================================
                  QR CODES
              ================================================= */}

              <div className="meskel-payment-card">

                <div className="meskel-payment-card-header">

                  <div>

                    <ScanLine size={20} />

                    <strong>

                      {t(
                        "የክፍያ QR Codes",
                        "Payment QR Codes"
                      )}

                    </strong>

                  </div>


                  <BadgeCheck size={19} />

                </div>


                <div className="meskel-qr-grid">


                  {/* CBE QR */}

                  <div className="meskel-qr-item">

                    <div className="meskel-qr-image-wrapper">

                      <img
                        src={cbeQr}
                        alt="CBE Bank payment QR Code"
                        className="meskel-qr-image"
                      />

                    </div>


                    <strong>

                      {t(
                        "የባንክ QR",
                        "CBE Bank QR"
                      )}

                    </strong>

                  </div>


                  {/* TELEBIRR QR */}

                  <div className="meskel-qr-item">

                    <div className="meskel-qr-image-wrapper">

                      <img
                        src={telebirrQr}
                        alt="Telebirr payment QR Code"
                        className="meskel-qr-image"
                      />

                    </div>


                    <strong>
                      Telebirr QR
                    </strong>

                  </div>

                </div>

              </div>

            </div>


            {/* PAYMENT NOTE */}

            <div className="meskel-payment-note">

              <Lock size={16} />

              <span>

                {t(

                  "የክፍያ መረጃዎ በኃላፊነት ይያዛል።",

                  "Your payment information will be handled responsibly."

                )}

              </span>

            </div>


            {/* GOOGLE FORM */}

            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="meskel-modal-done"
            >

              <Send size={18} />

              {t(
                "የክፍያ ማረጋገጫ ይላኩ",
                "Submit Payment Confirmation"
              )}

            </a>


          </div>

        </div>

      )}

    </div>

  );

}


export default MeskelSupport;