import { useState } from "react";
import useAge from "../hooks/useAge";
import maePhoto from "../assets/mae.jpg";
import styles from "./About.module.css";

const SKILLS = {
  Programming: [
    "Java",
    "Kotlin",
    "Python",
    "C++",
    "C#",
    "JavaScript",
    "VB.NET",
    "PHP",
    "Dart",
  ],
  MobileDevelopment: [
    "Android Studio",
    "Jetpack",
    "XML Layouts",
    "REST API Integration",
    "RFID Integration",
  ],
  Frameworks: ["React", "Flutter", "Laravel", "ASP.NET", "Qt"],
  Databases: ["MySQL", "PostgreSQL", "MongoDB"],
  DataEngineering: ["SQL", "Data Pipelines", "Data Processing"],
  CyberSecurity: [
    "Kali Linux",
    "Wireshark",
    "Cryptography Fundamentals",
    "Cisco Packet Tracer",
    "Network Configuration",
    "Bash",
    "Linux Command Line",
    "Shell Scripting",
  ],
  CloudDevOps: ["AWS", "GCP", "Git", "cPanel"],
  APIs: ["REST APIs", "RFID APIs", "JSON Handling", "Postman Testing"],
};

const PREVIEW_COUNT = 2;
const entries = Object.entries(SKILLS);

export default function About() {
  const age = useAge();
  const [expanded, setExpanded] = useState(false);

  const visibleSkills = expanded ? entries : entries.slice(0, PREVIEW_COUNT);

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = "/Cruz_Jhustie-CV.pdf";
    a.download = "Cruz_Jhustie-CV.pdf";
    a.click();
  };

  return (
    <section className={styles.about} id="about">
      <div className={styles.label}>About Me</div>
      <h2 className={styles.title}>
        The person
        <br />
        behind the code
      </h2>

      <div className={styles.grid}>
        {/* Photo */}
        <div className={styles.imgWrap}>
          <div className={styles.imgFrame} />
          <img src={maePhoto} alt="Jhustie Mae Cruz" className={styles.photo} />
        </div>

        {/* Text */}
        <div className={styles.content}>
          <p>
            I am <strong>Jhustie Mae Cruz</strong>, a{" "}
            <strong>Cum Laude Computer Engineering graduate</strong> from PLM,{" "}
            <strong>
              <span className={styles.age}>{age}</span> years old
            </strong>
            , based in Metro Manila. In the multiverse, I might be a doctor, but
            here, I develop <strong>mobile and web applications</strong>, mostly
            focusing on <strong>RFID integration</strong> at{" "}
            <strong>Newton Scanning System Inc.</strong>
          </p>

          <p>
            My experience includes building software for NFC and RFID, printing
            ID cards with custom programs, and interning as a Python developer.
            I enjoy experimenting with technology, learning new skills, and
            finding creative solutions to complex problems.
          </p>

          <p>
            When I’m not coding, you might find me watching educational series,
            reading about law, medicine, or life in general and occasionally
            contemplating the multiverse. 😄
          </p>

          {/* Skills */}
          <div className={styles.skillsSection}>
            {visibleSkills.map(([category, items]) => (
              <div key={category} className={styles.skillGroup}>
                <h4 className={styles.skillTitle}>
                  {category.replace(/([A-Z])/g, " $1").trim()}
                </h4>
                <div className={styles.tags}>
                  {items.map((skill) => (
                    <span key={skill} className={styles.tag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <button
              className={styles.toggleBtn}
              onClick={() => setExpanded((e) => !e)}
            >
              {expanded
                ? "Show Less ↑"
                : `Show More Skills (${entries.length - PREVIEW_COUNT} more) ↓`}
            </button>
          </div>

          <button className={styles.btn} onClick={handleDownload}>
            Download Resume ↓
          </button>
        </div>
      </div>
    </section>
  );
}
