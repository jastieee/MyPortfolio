import useTyped from "../hooks/useTyped";
import styles from "./Hero.module.css";

export default function Hero() {
  const typed = useTyped();

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = "/Cruz_Jhustie-CV.pdf";
    a.download = "Cruz_Jhustie-CV.pdf";
    a.click();
  };

  return (
    <section className={styles.hero} id="home">
      {/* Background blobs */}
      <div className={`${styles.blob} ${styles.blob1}`} />
      <div className={`${styles.blob} ${styles.blob2}`} />

      <div className={styles.content}>
        <p className={styles.eyebrow}>Portfolio</p>

        <h1 className={styles.name}>
          Hey,
          <br />
          it's <em>Jhustie</em>
        </h1>

        <div className={styles.typed} aria-live="polite">
          {typed}
          <span className={styles.cursor} />
        </div>

        <p className={styles.subtitle}>
          Cum Laude Computer Engineering graduate, passionate about innovating
          RFID solutions for mobile devices, exploring cybersecurity, and
          harnessing data technologies and, occasionally, a frustrated doctor in
          spirit 😄 based in Metro Manila.
        </p>

        <div className={styles.cta}>
          <a href="#about" className={styles.btnPrimary}>
            Learn More ↓
          </a>
          <button className={styles.btnOutline} onClick={handleDownload}>
            Download CV
          </button>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span className={styles.scrollLine} />
        scroll down
      </div>
    </section>
  );
}
