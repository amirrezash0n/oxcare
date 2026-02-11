import { useState } from "react";
import Button from "../common/Button/Button";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <h1 className={styles.title}>oxcare</h1>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <ul className={styles.listItem}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#doctors">Doctors</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
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
            <li>
              <a href="#home" onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#doctors" onClick={() => setIsMenuOpen(false)}>
                Doctors
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => setIsMenuOpen(false)}>
                Services
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </li>
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
