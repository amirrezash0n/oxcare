import { FaStar } from "react-icons/fa";
import styles from "./Feedback.module.css";

interface FeedbackTypes {
  name: string;
  date: string;
  srcImg: string;
  text: string;
}

export default function Feedback({ name, date, srcImg, text }: FeedbackTypes) {
  return (
    <div className={`${styles.feedback} gradient-border `}>
      <div className={styles.feedbackHeader}>
        <div className={styles.feedbackClientWrapper}>
          <img className={styles.feedbackClientImg} src={srcImg} alt={srcImg} />
          <div className={styles.feedbackClientInfos}>
            <span className={styles.feedbackClientName}>{name}</span>
            <span className={styles.feedbackClientDate}>{date}</span>
          </div>
        </div>
        <div className={styles.feedbackRates}>
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className={styles.feedbackRate} />
          ))}
        </div>
      </div>
      <p className={styles.feadbackText}>{text}</p>
    </div>
  );
}
