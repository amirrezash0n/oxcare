import styles from "./TopSection.module.css";

interface TopSectionTypes {
  children: string;
}

export default function TopSection({ children }: TopSectionTypes) {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>{children}</h2>
      <p className={styles.text}>
        Eu sit proin amet quis malesuada vitae elit. Vel consectetur nibh quis
        ullamcorper quis. Quam enim tortor, id sed
      </p>
    </div>
  );
}
