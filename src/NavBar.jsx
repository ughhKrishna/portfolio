import { useState } from "react";

function NavBar() {
  const [phoneOpen, setPhoneOpen] = useState(false);
  const doc = document;
  const menuOpen = doc.querySelector(".menu");
  const menuClose = doc.querySelector(".close");
  const overlay = doc.querySelector(".overlay");

  // menuOpen.addEventListener("click", () => {
  //   overlay.classList.add("overlay--active");
  // });

  // menuClose.addEventListener("click", () => {
  //   overlay.classList.remove("overlay--active");
  // });

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
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
        <a className="cta" href="#">
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
