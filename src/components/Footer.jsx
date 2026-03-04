import logo from '../assets/logo1.png';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <img src={logo} alt="Jhustie logo" className={styles.logo} />
      <p className={styles.copy}>
        © {year} Jhustie Mae Cruz. All rights reserved.
      </p>
      <a href="#home" className={styles.top}>Back to top ↑</a>
    </footer>
  );
}
