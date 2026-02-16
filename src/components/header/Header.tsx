import { useState } from "react";
import Button from "../common/Button/Button";
import styles from "./Header.module.css";

const mobileListItems = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Doctors", href: "#doctors" },
  { title: "Services", href: "#services" },
  { title: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <h1 className={styles.title}>oxcare</h1>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <ul className={styles.listItem}>
            {mobileListItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Buttons */}
        <div className={styles.buttonsWrapper}>
          <Button className={styles.loginBtn}>Login</Button>
          <Button className={styles.signupBtn}>Signup</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburger}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}>
        <div className="container">
          <ul className={styles.mobileList}>
            {mobileListItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} onClick={() => setIsMenuOpen(false)}>
                  {item.title}
                </a>
              </li>
            ))}
            <li className={styles.mobileButtons}>
              <Button className={styles.mobileLoginBtn}>Login</Button>
              <Button className={styles.mobileSignupBtn}>Signup</Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
