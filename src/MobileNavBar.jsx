import React from "react";

export default function MobileNavBar() {
  return (
    <div id="mobile__menu" className="overlay">
      <a className="close">&times;</a>
      <div className="overlay__content">
        <a href="#">Services</a>
        <a href="#">Projects</a>
        <a href="#">About</a>
      </div>
    </div>
  );
}
