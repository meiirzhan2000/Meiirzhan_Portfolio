import styles from './JobsStyles.module.css';
import { useTheme } from '../../common/ThemeContext';
import tutorImage from '../../assets/t1.png';
import fartechImage from '../../assets/p1.png';

function Jobs() {
  const { theme } = useTheme();

  const jobs = [
    {
      title: 'Private Tutor',
      description: 'Taught programming languages including Java, Python, and C. Developed personalized lesson plans to improve student skills.',
      image: tutorImage,
    },
    {
      title: 'Full-stack Developer',
      description: 'Developed a chatbot using React, Twilio API, and Google Cloud. Worked closely with clients to meet their requirements.',
      image: fartechImage,
    },
  ];

  return (
    <section id="jobs" className={styles.container}>
      <h1 className={styles.sectionTitle}>Job Experience</h1>
      <div className={styles.jobList}>
        {jobs.map((job, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.card}>
              <div className={styles.circle2}></div>
              <div className={styles.circle1}></div>
              <img src={job.image} alt={`${job.title} image`} className={styles.jobImage} />
            </div>
            <div className={styles.content}>
              <h3 className={styles.jobTitle}>{job.title}</h3>
              <p>{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Jobs;