import { useState } from "react";
import styles from "./Projects.module.css";
import Card from "../Card/Card";

const themes = [
  {
    theme: "WEB & APP DEVELOPMENT",

    projects: [
      {
        title: "Payroll Management System",
        desc: "A payroll management system for tito solitions (Software Engoneering Project)",
        images: ["/proj/e1.png", "/proj/e2.png"],
        youtube: "https://youtu.be/O7e0rCsMMeo",
      },
      {
        title: "AL1SE: Data Visualization Software",
        desc: "A standalone data visualization software with AI Integration",
        images: ["/proj/b1.png", "/proj/b2.png"],
        youtube: "https://www.youtube.com/watch?v=bbbb",
      },
    ],
  },
  {
    theme: "UI/UX",

    projects: [
      {
        title: "TechTalk",
        desc: "Flutter Flow Final",
        images: ["/proj/t1.png", "/proj/t2.png"],

      },
      {
        title: "Vintage",
        desc: "Flutter Flow",
        images: ["/proj/s1.png"],

      },
    ],
  },
  {
    theme: "PAPERS",

    projects: [
      {
        title: "Capstone Paper",
        desc: "AL1SE: DEEPSEEK-R1 AI INTEGRATED DATA VISUALIZATION SOFTWARE FOR THE DEPARTMENT OF STATISTICS OF CENTRAL LUZON STATE UNIVERSITY (CLSU)",
        images: ["/proj/p1.png"],
      },
      {
        title: "Case Study",
        desc: "BRUNCHBITE: A Unified Food Ordering System for CLSU Campus Dining ",
        images: ["/proj/p2.png"],
      },
    ],
  },

];

const ThemeCard = ({ theme, setActiveProject }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>

          <h3>{theme.theme}</h3>
        </div>

        <div className={styles.cardBack}>
          <ul>
            {theme.projects.map((proj, idx) => (
              <li
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveProject(proj);
                }}
                className={styles.projectLink}
              >
                {proj.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2>{project.title}</h2>
        <p>{project.desc}</p>

        <div className={styles.images}>
          {project.images.map((img, idx) => (
            <img key={idx} src={img} alt={project.title} />
          ))}
        </div>

        {project.youtube && (
          <a
            href={project.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.demoLink}
          >
            ▶ Watch Demo
          </a>
        )}

        <button onClick={onClose} className={styles.closeBtn}> 
          ✖ Close
        </button>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <Card>
      <section id="projects" className={styles.projects}>
        <h2 className={styles.heading}>WORKS/PROJECTS</h2>

        <div className={styles.cardsWrapper}>
          {themes.map((theme, idx) => (
            <ThemeCard
              key={idx}
              theme={theme}
              setActiveProject={setActiveProject}
            />
          ))}
        </div>

        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </section>
    </Card>
  );
};

export default Projects;
