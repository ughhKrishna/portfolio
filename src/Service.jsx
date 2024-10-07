import { useEffect, useState } from "react";
import "./service.css";

const services = [
  {
    number: "01",
    title: "Brand Identity Design",
    content:
      "We create unique brand identities that resonate with your audience. Our process includes comprehensive market research, logo design, and visual identity development, ensuring your brand stands out in a crowded marketplace. Let us help you establish a cohesive brand presence that builds trust and loyalty.",
  },
  {
    number: "02",
    title: "Custom Website Development",
    content:
      "Our website development services focus on creating robust, scalable, and secure websites tailored to your specific business needs. We utilize modern technologies and frameworks to ensure optimal performance, seamless user experiences, and easy content management, making it easy for you to engage with your customers.",
  },
  {
    number: "03",
    title: "Responsive Website Design",
    content:
      "We design beautiful and functional websites that not only capture attention but also drive engagement and conversions. Our design philosophy prioritizes user experience, ensuring that every element is thoughtfully placed to guide visitors through your site. From wireframes to final designs, we create visually stunning websites that reflect your brand identity.",
  },
  {
    number: "04",
    title: "SEO Optimization Services",
    content:
      "Our SEO optimization services are designed to improve your website’s visibility on search engines. We conduct thorough keyword research, on-page optimization, and backlinking strategies to help your business rank higher and attract organic traffic. Stay ahead of the competition and connect with your audience through effective SEO strategies that drive results.",
  },
];
export default function Service() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Check if the screen is mobile

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Track the scroll position
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Update mobile state on resize
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize); // Add resize event listener

    const serviceSection = document.querySelector(".service");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.25 } // Trigger when 35% of the section is visible
    );

    if (serviceSection) {
      observer.observe(serviceSection);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize); // Clean up the resize listener
      if (serviceSection) {
        observer.unobserve(serviceSection);
      }
    };
  }, []);

  return (
    <section
      className={`service ${isVisible ? "animate" : ""}`}
      style={{
        borderTopLeftRadius: isMobile
          ? "0"
          : `${Math.max(25 - scrollY / 20, 0)}%`,
        borderTopRightRadius: isMobile
          ? "0"
          : `${Math.max(25 - scrollY / 20, 0)}%`,
      }}
    >
      {services.map((service, index) => (
        <div
          className={`service-item`}
          key={service.number}
          style={{
            transitionDelay: `${index * 0.5}s`, // Add delay based on index
          }}
        >
          <div className="service-number">{service.number}</div>
          <div className="service-content">
            <h2>{service.title}</h2>
            <p>{service.content}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
