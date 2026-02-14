import styles from "./WhyUs.module.css";
import TopSection from "../common/TopSection/TopSection";
import { benefitsItem } from "./whyUsBenefits ";
import BenefitItem from "./BenefitItem";

export default function WhyUs() {
  return (
    <section className="container">
      <TopSection>Why Should you take our services</TopSection>
      <div className={styles.benefitsWrapper}>
        <div className={styles.imgWrapper}>
          <img
            className={styles.benefitImg}
            src="/images/whyUs.png"
            alt="whyUs"
          />
        </div>

        <div className={styles.benefitItems}>
          {benefitsItem.map((item) => (
            <BenefitItem
              title={item.title}
              aos={item.aos}
              text={item.text}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
