import React from 'react';
import styles from './ActivitiesStyles.module.scss';
import { Link } from 'react-router-dom';

function Activities() {
  return (
    <section id="activities" className={styles.activities}>
      <h1 className={styles.sectionTitle}>Interests</h1>
      <div className={styles.activitiesContainer}>
        <Link to="/ActivityDetails/Health%20&%20Fitness" className={styles.panel}>
          <div className={styles.ring}>
            <div className={`${styles.card} ${styles.card1}`}></div>
            <div className={styles.border}>
              <p className={styles.title}>Health & Fitness</p>
              <div className={styles.slide}>
                <h6 className={styles.para}>Cooking, Gym, Arm Wrestling, BJJ</h6>
              </div>
            </div>
          </div>
        </Link>
        
        <Link to="/ActivityDetails/Personal%20Growth%20&%20Hobbies" className={styles.panel}>
          <div className={styles.ring}>
            <div className={`${styles.card} ${styles.card2}`}></div>
            <div className={styles.border}>
              <p className={styles.title}>Personal Growth & Hobbies</p>
              <div className={styles.slide}>
                <h6 className={styles.para}>Reading, Music, Podcasts</h6>
              </div>
            </div>
          </div>
        </Link>
        
        <Link to="/ActivityDetails/Social%20&%20Community" className={styles.panel}>
          <div className={styles.ring}>
            <div className={`${styles.card} ${styles.card3}`}></div>
            <div className={styles.border}>
              <p className={styles.title}>Social & Community</p>
              <div className={styles.slide}>
                <h6 className={styles.para}>Tech Events, Hackathons, Family & Friends</h6>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Activities;
