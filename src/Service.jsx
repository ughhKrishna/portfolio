import { useEffect, useState } from "react";
import "./service.css";

const services = [
  {
    number: "01",
    title: "Brand Identity Design",
    content:
      "We craft unique brand identities that capture your vision. From logos to full branding, we ensure your business stands out and connects with your audience.",
  },
  {
    number: "02",
    title: "Custom Website Development",
    content:
      "Our websites are built for your specific business needs, focusing on performance, security, and user experience to boost customer engagement.",
  },
  {
    number: "03",
    title: "Responsive Website Design",
    content:
      "We design responsive, visually striking websites that deliver a seamless experience on any device, driving both engagement and conversions.",
  },
  {
    number: "04",
    title: "SEO Optimization Services",
    content:
      "Boost your website's visibility with our SEO services. We help you rank higher on search engines and drive organic traffic with effective strategies.",
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
