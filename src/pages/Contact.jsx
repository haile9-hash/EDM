import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_b3qis2m",    // <-- replace with your EmailJS Service ID
        "template_t7jrvpy",   // <-- replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: "Contact Us", // matches {{title}} in your template
        },
        "UdU_sxg1mXTmk73eC"     // <-- replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error.text);
          alert("Oops, something went wrong!");
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="social-links">
          <a href="https://t.me/enatdm" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/telegram.svg"
              alt="Telegram"
            />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tiktok.svg"
              alt="TikTok"
            />
          </a>
          <a
            href="https://www.facebook.com/betremariam.zeleke.1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
              alt="Facebook"
            />
          </a>
        </div>
      </div>

      <div className="contact-right">
        <iframe
          title="Debre Markos Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.507246847432!2d37.72479781478727!3d10.34087629268757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x163b2d9f5a3c4c0d%3A0x5f5b2e4b3c3d3e3f!2sDebre%20Markos!5e0!3m2!1sen!2set!4v1719760000000!5m2!1sen!2set"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
