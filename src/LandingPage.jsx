export default function LandingPage() {
  return (
    <>
      <div className="landing-page">
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
      </div>
    </>
  );
}
