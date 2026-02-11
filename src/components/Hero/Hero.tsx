import styles from "./Hero.module.css";
import Button from "../common/Button/Button";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.heroWrapper} container`}>
        <div>
          <h2 className={styles.heroTitle}>
            We will help you to improve your mental health
          </h2>
          <p className={styles.heroText}>
            Eu sit proin amet quis malesuada vitae elit. Vel consectetur nibh
            quis ullamcorper quis. Quam enim tortor, id sed
          </p>
          <div className={styles.heroButtons}>
            <Button className={styles.heroActiveBtn}>Get Appointment</Button>
            <Button className={styles.heroNonActiveBtn}>Find Specialist</Button>
          </div>
        </div>
        <div className={styles.heroImgWrapper}>
          <img
            className={styles.heroImg}
            src="images/smiller-man.png"
            alt="hero.pic"
          />
        </div>
      </div>
    </section>
  );
}
