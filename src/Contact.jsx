import { useEffect, useState } from "react";
import "./contact.css";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const section = document.querySelector(".contact-section");
    const { top } = section.getBoundingClientRect();
    if (top <= window.innerHeight && top >= 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`contact-section ${isVisible ? "fade-in" : ""}`}>
      <div className="contact-text-container">
        <h2 className="contact-subtitle">(Need an unfair advantage?)</h2>
        <h1 className="contact-title">Let&apos;s make it happen</h1>
        <button className="message-button">Message Me</button>
        <p className="global-message">We are working globally! 🌎</p>
      </div>
    </div>
  );
};

export default Contact;
