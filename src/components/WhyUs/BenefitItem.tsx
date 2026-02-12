import { FaRegCircleCheck } from "react-icons/fa6";
import styles from "./WhyUs.module.css";

interface BenefitItemProps {
  title: string;
  text: string;
}

export default function BenefitItem({ title, text }: BenefitItemProps) {
  return (
    <div className={styles.benefitItem}>
      <div className={styles.benefitLine}></div>
      <div>
        <div className={styles.benefitTitleWrapper}>
          <h4 className={styles.benefitTitle}>{title}</h4>
          <FaRegCircleCheck className={styles.benefitIcon} />
        </div>
        <p className={styles.benefitText}>{text}</p>
      </div>
    </div>
  );
}
