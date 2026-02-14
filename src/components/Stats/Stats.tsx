import styles from "./Stats.module.css";

function Stats() {
  const statsData = [
    {
      number: "24/7",
      label: "Online Support",
      statCardBg: true,
      aos: "fade-right",
    },
    { number: "100+", label: "Doctors", statCardBg: false, aos: "fade-up" },
    {
      number: "1M+",
      label: "Active Patients",
      statCardBg: true,
      aos: "fade-down",
    },
    {
      number: "5M+",
      label: "Interested",
      statCardBg: false,
      aos: "fade-left",
    },
  ];

  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.statsGrid}>
          {statsData.map((stat, index) => (
            <div
              className={`${styles.statCard} ${stat.statCardBg ? styles.statCardPrimary : styles.statCardSecondery}`}
              key={index}
              data-aos={stat.aos}
            >
              <h3 className={styles.statNumber}>{stat.number}</h3>
              <p className={styles.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
