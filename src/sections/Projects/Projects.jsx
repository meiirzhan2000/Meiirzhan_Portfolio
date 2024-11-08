import React from 'react';
import styles from './ProjectsStyles.module.css';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div className={styles.container}>
      <h1 className={styles.sectionTitle}>Projects Overview</h1>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2>01</h2>
              <h3>Front-End Development</h3>
              <p>
                Worked on interactive and responsive front-end projects using React, Vue, and CSS frameworks to build dynamic user interfaces.
              </p>
              <Link to="/projects-details/Front-End Development" className={styles.readMoreLink}>Read More</Link>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2>02</h2>
              <h3>Back-End Development</h3>
              <p>
                Built robust back-end services using Node.js, Express, and Java Spring Boot, focusing on API development and database integration.
              </p>
              <Link to="/projects-details/Back-End Development" className={styles.readMoreLink}>Read More</Link>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2>03</h2>
              <h3>Miscellaneous Projects</h3>
              <p>
                This section combines hackathon projects, data solutions, and miscellaneous endeavors, showcasing unique challenges and versatile solutions.
              </p>
              <Link to="/projects-details/Miscellaneous Projects" className={styles.readMoreLink}>Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
