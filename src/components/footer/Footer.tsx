import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerMain}>
          {/* ستون اول - لوگو و توضیحات */}
          <div className={styles.footerColumn}>
            <h2 className={styles.footerLogo}>oxcare</h2>
            <p className={styles.footerDescription}>
              Eu sit proin amet quis malesuada vitae elit.
              <br />
              Vel consectetur nibh quis ullamcorper quis.
              <br />
              Quam enim tortor, id sed
            </p>
            <div className={styles.footerIcons}>
              <span className={styles.footerIcon}>🔍</span>
              <span className={styles.footerIcon}>🛒</span>
              <span className={styles.footerIcon}>📧</span>
            </div>
          </div>

          {/* ستون دوم - Quick Links */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>Quick Links</h3>
            <ul className={styles.footerList}>
              <li className={styles.footerListItem}>
                <a href="#home" className={styles.footerLink}>
                  Home
                </a>
              </li>
              <li className={styles.footerListItem}>
                <a href="#about" className={styles.footerLink}>
                  About
                </a>
              </li>
              <li className={styles.footerListItem}>
                <a href="#doctors" className={styles.footerLink}>
                  Doctors
                </a>
              </li>
              <li className={styles.footerListItem}>
                <a href="#services" className={styles.footerLink}>
                  Services
                </a>
              </li>
              <li className={styles.footerListItem}>
                <a href="#contact" className={styles.footerLink}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* ستون سوم - Services */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>Services</h3>
            <ul className={styles.footerList}>
              <li className={styles.footerListItem}>
                <a href="#" className={styles.footerLink}>
                  Vaccination
                </a>
              </li>
              <li className={styles.footerListItem}>
                <a href="#" className={styles.footerLink}>
                  NDD
                </a>
              </li>
              <li className={styles.footerListItem}>
                <a href="#" className={styles.footerLink}>
                  Filled Prescription As Is
                </a>
              </li>
              <li className={styles.footerListItem}>
                <a href="#" className={styles.footerLink}>
                  Patient Referral
                </a>
              </li>
              <li className={styles.footerListItem}>
                <a href="#" className={styles.footerLink}>
                  Other roofing
                </a>
              </li>
            </ul>
          </div>

          {/* ستون چهارم - Location */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>Location</h3>
            <address className={styles.footerAddress}>
              2972 Westheimer Rd.
              <br />
              Santa Ana, Illinois
              <br />
              85486
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}
