import { PROJECTS } from '../data/content';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section className={styles.projects} id="project">
      <div className={styles.label}>Work</div>
      <h2 className={styles.title}>
        Selected<br />Projects
      </h2>

      <div className={styles.grid}>
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      <div className={styles.seeMore}>
        <a
          href="https://github.com/jastieee"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.seeMoreBtn}
        >
          See More on GitHub →
        </a>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <div className={styles.card}>
      <span className={styles.num}>0{index + 1}</span>
      <h3 className={styles.cardTitle}>{project.name}</h3>
      <div className={styles.tags}>
        {project.tags.map(tag => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
      <p className={styles.desc}>{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.visitLink}
      >
        Visit Project →
      </a>
    </div>
  );
}
