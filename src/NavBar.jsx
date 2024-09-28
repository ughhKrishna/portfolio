import MobileNavBar from "./MobileNavBar";

function NavBar() {
  return (
    <>
      <header>
        <div className="aboutme-navbar">
          <p className="name-navbar">
            Krishna Rathnam<sup>&copy;</sup>
          </p>
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
        <p className="menu cta">Menu</p>
      </header>
      <MobileNavBar />
    </>
  );
}

export default NavBar;
