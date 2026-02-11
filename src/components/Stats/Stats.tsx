import styles from "./Stats.module.css";

function Stats() {
  const statsData = [
    { number: "24/7", label: "Online Support" },
    { number: "100+", label: "Doctors" },
    { number: "1M+", label: "Active Patients" },
    { number: "5M+", label: "Interested" },
  ];

  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.statsGrid}>
          {statsData.map((stat, index) => (
            <div key={index} className={styles.statCard}>
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
