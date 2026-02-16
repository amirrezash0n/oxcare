import styles from "./Services.module.css";
import TopSection from "../common/TopSection/TopSection";
import Service from "./Service";
import { ServicesCard } from "./servicesCard";

export default function Services() {
  return (
    <section className={`container`}>
      <TopSection>Our Services</TopSection>
      <div className={styles.services}>
        {ServicesCard.map((service, index) => (
          <Service
            key={index}
            aos={service.aos}
            title={service.title}
            src={service.src}
            alt={service.alt}
          />
        ))}
      </div>
    </section>
  );
}
