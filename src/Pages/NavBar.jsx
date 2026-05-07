import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

function NavBar({ theme, onToggleTheme }) {
  const location = useLocation();
  const navRef = useRef(null);
  const pillRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    const pill = pillRef.current;
    if (!nav || !pill) return;

    const activeLink = nav.querySelector(".link.active");
    if (!activeLink) return;

    const navRect = nav.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();

    pill.style.left = `${linkRect.left - navRect.left}px`;
    pill.style.width = `${linkRect.width}px`;
  }, [location.pathname]); // re-runs on every route change

  return (
    <div className="nav" ref={navRef}>
      <div className="pill" ref={pillRef} />

      {LINKS.map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          className={`link ${location.pathname === to ? "active" : ""}`}
        >
          {label}
        </Link>
      ))}

      <button className="theme-toggle" onClick={onToggleTheme}>
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </div>
  );
}

export default NavBar;