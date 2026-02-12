import styles from "./Service.module.css";

interface ServiceTypes {
  title: string;
  src: string;
  alt?: string;
}

export default function Service({ title, src, alt }: ServiceTypes) {
  return (
    <div className={styles.service}>
      <div className={styles.serviceImgWrapper}>
        <img className={styles.serviceImg} src={src} alt={alt} />
      </div>
      <h3 className={styles.serviceTitle}>{title}</h3>
      <p>
        Eu sit proin amet quis malesuada vitae elit. Vel consectetur nibh quis
        ullamcorper quis. Quam enim tortor.
      </p>
    </div>
  );
}
