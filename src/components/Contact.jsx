import { SOCIALS } from '../data/content';
import emailIcon    from '../assets/email.png';
import linkedinIcon from '../assets/linkedin.png';
import githubIcon   from '../assets/github.png';
import fbIcon       from '../assets/fb.png';
import styles from './Contact.module.css';

const ICON_MAP = {
  email:    emailIcon,
  linkedin: linkedinIcon,
  github:   githubIcon,
  facebook: fbIcon,
};

const INFO = [
  { icon: '📍', label: 'Location',    value: 'Metro Manila, Philippines' },
  { icon: '🎓', label: 'Education',   value: 'BS Computer Engineering, 4th Year — PLM' },
  { icon: '💼', label: 'Communities', value: 'GDSC PLM · AWSCC Haribon' },
  { icon: '🔍', label: 'Interests',   value: 'Data Science · Cybersecurity · Engineering' },
];

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.inner}>

        {/* Left */}
        <div className={styles.left}>
          <div className={styles.label}>Contact</div>
          <h2 className={styles.title}>Let's work<br />together</h2>
          <p className={styles.sub}>
            Feel free to reach out for collaborations, opportunities, or just
            to say hi!
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=cruzjastie@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.email}
          >
            cruzjastie@gmail.com
          </a>

          <div className={styles.socials}>
            {SOCIALS.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label={label}
              >
                <img src={ICON_MAP[icon]} alt={label} className={styles.socialIcon} />
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Right info card */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Quick Info</h3>
          <ul className={styles.infoList}>
            {INFO.map(item => (
              <li key={item.label} className={styles.infoItem}>
                <div className={styles.infoIcon}>{item.icon}</div>
                <div>
                  <div className={styles.infoLabel}>{item.label}</div>
                  <div className={styles.infoValue}>{item.value}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
