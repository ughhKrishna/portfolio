import { useEffect, useState } from "react";
import "./PageReveal.css";

export default function PageReveal() {
  const [atStart, setAtStart] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAtStart(false);
    }, 5000);
  }, []);

  return (
    <>
      <div className={`page-reveal ${atStart && "page-reveal--active"}`}>
        <p className="page-reveal-text">A agency for all your needs.</p>
      </div>
    </>
  );
}
