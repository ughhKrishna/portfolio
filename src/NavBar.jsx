import { useState } from "react";

function NavBar() {
  const [phoneOpen, setPhoneOpen] = useState(false);

  function addActive() {
    setPhoneOpen(true);
  }

  function removeActive() {
    setPhoneOpen(false);
  }

  return (
    <>
      <header>
        <div className="aboutme-navbar">
          <p className="name-navbar">
            KR<sup>&copy;</sup>
          </p>
          <span className="name-side-navbar">
            (Web Developer & ML engineer)
          </span>
          {/* <p className="name-side-navbar">(Web Developer & ML engineer)</p> */}
        </div>
        <nav>
          <ul className="nav__links">
            <li>
              <a href="#service">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </nav>
        <a
          className="cta"
          href="https://ig.me/m/castleofimprnt"
          target="_blank"
        >
          Contact
        </a>
        <p className="menu cta" onClick={addActive}>
          Menu
        </p>
      </header>
      <div
        id="mobile__menu"
        className={`overlay ${phoneOpen ? "overlay--active" : "none"}`}
      >
        <a className="close" onClick={removeActive}>
          &times;
        </a>
        <div className="overlay__content">
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
        </div>
      </div>
    </>
  );
}

export default NavBar;
