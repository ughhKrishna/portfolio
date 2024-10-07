// import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import LandingPage from "./LandingPage";
import Projects from "./Projects";
// import PageReveal from "./PageReveal";
import Service from "./Service";
import Contact from "./Contact";
function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Track the scroll position
    };

    window.addEventListener("scroll", handleScroll);

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
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (serviceSection) {
      observer.observe(serviceSection);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (serviceSection) {
        observer.unobserve(serviceSection);
      }
    };
  }, []);
  return (
    <>
      {/* <PageReveal /> */}
      {/* <NavBar /> */}
      <LandingPage scrollY={scrollY} />
      <div style={{ height: "100vh" }}></div>
      <Service isVisible={isVisible} scrollY={scrollY} />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
