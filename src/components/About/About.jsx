import React, { Component } from "react";
import styles from "./About.module.css";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSection: null,
    };
    this.toggleSection = this.toggleSection.bind(this);
  }

  toggleSection(section) {
    this.setState((prevState) => ({
      openSection: prevState.openSection === section ? null : section,
    }));
  }

  render() {
    const { openSection } = this.state;

    const sections = [
      {
        key: "personal",
        title: "Personal Information",
        content: (
          <>
            <p><strong>Full Name:</strong> Camille Diego Juego</p>
            <p><strong>Age:</strong> 22</p>
            <p><strong>Civil Status:</strong> Single</p>
            <p><strong>Religion:</strong> Catholic</p>
          </>
        ),
      },
      {
        key: "education",
        title: "Education",
        content: (
          <>
            <p><strong>Course:</strong> Bachelor of Science in Information Technology</p>
            <p><strong>Major:</strong> System Development</p>
            <p><strong>School:</strong> Central Luzon State University</p>
            <p><strong>Address:</strong> Bantug, Science City of Muñoz, Nueva Ecija</p>
            <p><strong>Year Graduated:</strong> 2026</p>
        
          </>
        ),
      },
      {
        key: "experience",
        title: "Experiences",
        content: (
          <>
            <ul>
              <li>Journalism (Copy Reading and Headline Writing - English Category)</li>
              <li>DESO Technical Support Staff (COMELEC)</li>
              <li>Capstone Project Manager</li>
              <li>Special Program for Employment of Students (ENRO) – <em>20 days</em></li>
              <li>Freelancer (Academic Server) – <em>2 years</em></li>
            </ul>
          </>
        ),
      },
      {
        key: "skills",
        title: "Skills",
        content: (
          <>
            <ul>
              <li>Project Management</li>
              <li>Business Management</li>
              <li>Time Management</li>
              <li>Web & App Development</li>
              <li>Design & Multimedia</li>
              <li>Writing</li>
            </ul>
          </>
        ),
      },
    ];

    return (
      <section id="about" className={styles.about}>
        <div className={styles.card}>
          <img src="/me.jpg" alt="Camille" className={styles.profileImg} />

          <div className={styles.textContainer}>
          
            <div className={styles.headerText}>
              <br />
              <h1>CAMILLE D. JUEGO</h1>
              <br />
              <p>
                Hello! I’m Camille, or Cams for short — an IT student and an aspiring IT teacher.
                I’m interested in web development, particularly web design, and I love technical writing, 
                exploring UI/UX concepts, and learning new technologies.
                Outside of tech, I enjoy watching movies, reading, writing, traveling, and a good cup of coffee!
              </p>
            </div>

            {/* Accordion */}
            <div className={styles.accordion}>
              {sections.map((section) => (
                <div key={section.key} className={styles.section}>
                  <button
                    onClick={() => this.toggleSection(section.key)}
                    className={styles.sectionHeader}
                    aria-expanded={openSection === section.key}
                  >
                    {section.title}
                    <span className={styles.toggleIcon}>
                      {openSection === section.key ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className={`${styles.sectionContent} ${
                      openSection === section.key ? styles.open : ""
                    }`}
                  >
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
