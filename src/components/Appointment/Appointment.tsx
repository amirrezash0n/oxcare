import styles from "./Appointment.module.css";
import Button from "../common/Button/Button";

export default function Appointment() {
  return (
    <section className="container">
      <div data-aos="zoom-in" className={styles.appointmentWrapper}>
        <span className={styles.appointmentQuestion}>
          Need a doctor’s counsealing?
        </span>
        <h2 className={styles.appointmentTitle}>
          Just make an appointment and motivated
        </h2>
        <Button className={styles.appointmentButton}>Get Appointment</Button>
      </div>
    </section>
  );
}
