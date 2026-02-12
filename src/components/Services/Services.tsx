import styles from "./Services.module.css";
import TopSection from "../common/TopSection/TopSection";
import Service from "./Service";
import { servicesCard } from "./servicesCard";

export default function Services() {
  return (
    <section className={`container`}>
      <TopSection>Our Services</TopSection>
      <div className={styles.services}>
        {servicesCard.map((service, index) => (
          <Service
            key={index}
            title={service.title}
            src={service.src}
            alt={service.alt}
          />
        ))}
      </div>
    </section>
  );
}
