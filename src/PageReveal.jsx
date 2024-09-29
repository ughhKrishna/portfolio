import { useState } from "react";
import "./PageReveal.css";

export default function PageReveal() {
  const [atStart, setAtStart] = useState(true);

  setTimeout(() => {
    setAtStart(false);
  }, 5000);

  return (
    <>
      <div className={`page-reveal ${atStart && "page-reveal--active"}`}>
        <h1 className="page-reveal-text">A agency for all your needs.</h1>
      </div>
    </>
  );
}
