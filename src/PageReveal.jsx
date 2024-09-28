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
        <h1 className="page-reveal-text">design that speaks for your brand.</h1>
      </div>
    </>
  );
}
