import Button from "../common/Button/Button";
import styles from "./CallbackForm.module.css";

export default function CallbackForm() {
  return (
    <section className="container">
      <div
        className={styles.callbackWrapper}
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className={styles.callbackLeft}>
          <span className={styles.callbackQuestion}>
            Need a doctor’s counsealing?
          </span>
          <h2 className={styles.callbackTitle}>
            Request a Call Back Today Now
          </h2>
          <p className={styles.callbackText}>
            Eu sit proin amet quis malesuada vitae elit. Vel consectetur nibh
            quis ullamcorper quis. Quam enim tortor, id sed
          </p>
          <div className={styles.callbackUsers}>
            <div className={styles.callbackImgs}>
              <img
                className={styles.callbackImg}
                src="/images/clients/client1.png"
                alt="#"
              />
              <img
                className={styles.callbackImg}
                src="/images/clients/client2.png"
                alt="#"
              />
              <img
                className={styles.callbackImg}
                src="/images/clients/client3.png"
                alt="#"
              />
            </div>
            <h4 className={styles.callbacknoteMessage}>
              Our Doctors are waiting for your service.
            </h4>
          </div>
        </div>
        <form className={styles.callbackRight} action="#">
          <input
            id={styles.callbackInputTop}
            placeholder="Your Name"
            type="text"
          />
          <input
            id={styles.callbackInputMiddle}
            placeholder="Your Phone Number"
            type="tel"
          />
          <input
            id={styles.callbackInputBottom}
            placeholder="Date"
            type="text"
          />
          <Button className={styles.callbackButoon} type="submit">
            Request Now
          </Button>
        </form>
      </div>
    </section>
  );
}
