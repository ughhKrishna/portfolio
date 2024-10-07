/* eslint-disable react/prop-types */
import NavBar from "./NavBar";

export default function LandingPage({ scrollY }) {
  return (
    <>
      <section
        className="landing"
        style={{
          opacity: `${Math.max(1 - scrollY / 300, 0)}`, // Gradually decrease opacity
          transform: `translateY(${scrollY * 0.35}px)`, // Move down as you scroll
          zIndex: scrollY > window.innerHeight * 0.9 ? 0 : 2, // Push behind the service section after scrolling past 90% of window height
        }}
      >
        <NavBar />
        <div className="landing-header">
          <h1 className="my-name">
            Krishna Rathnam<sup>&copy;</sup>
          </h1>
        </div>
        <div className="about-me-container">
          <div className="about-me-text-container">
            <span className="arrow">&#8627;</span>
            <p className="about-me">
              I help growing brands and startups gain a competitive edge with
              results-driven websites and compelling brand identities. By
              blending creative strategy and data insights, I drive visibility,
              conversions, and growth.
            </p>
          </div>
          <div className="img-container">
            <img src="./download.jpg" alt="My Image" />
          </div>
        </div>
      </section>
    </>
  );
}
