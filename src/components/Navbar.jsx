import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data/content";
import logo from "../assets/logo1.png";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
      {/* Text Logo */}
      <a href="/" className={styles.logoLink} onClick={close}>
        <span
          style={{ color: "var(--navy)", fontWeight: 700, fontSize: "1.4rem" }}
        >
          Jhustie Mae
        </span>
      </a>

      {/* Desktop links */}
      <ul className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <a href={href} className={styles.link} onClick={close}>
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <button
        className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
