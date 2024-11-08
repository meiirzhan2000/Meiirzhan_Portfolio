import React from 'react'; 
import { useParams, Link, useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import styles from './ActivityDetailsStyles.module.css';
import activityData from '../../DataActivity/DataActivity';
import cooking from '../../assets/animation/cooking.json';
import gym from '../../assets/animation/gym-fun.json';
import arm from '../../assets/animation/arm.json';
import bjj from '../../assets/animation/bjj.json';
import music from '../../assets/animation/music.json';
import read from '../../assets/animation/read.json';
import podcast from '../../assets/animation/podcust.json';
import tech from '../../assets/animation/tech.json';
import hackathon from '../../assets/animation/hackathon.json';
import fam from '../../assets/animation/fam.json';

const animationMap = {
  cooking: cooking,
  gym: gym,
  arm: arm,
  bjj: bjj,
  reading: read,
  podcasts: podcast,
  music: music,
  family_friends: fam,
  tech_events: hackathon,
  hackathons: tech
};

function ActivityDetails() {
  const { category } = useParams();
  const navigate = useNavigate();
  const activity = activityData.find((item) => item.category === category);

  const handleCategoryClick = (newCategory) => {
    navigate(`/ActivityDetails/${encodeURIComponent(newCategory)}`);
  };

  return (
    <div className={styles.container}>
      {/* Back to Activities Link */}
      <Link to="/#interests" className={styles.backLink}>
        &larr; Back to Activities
      </Link>

      {/* Category Navigation Links */}
      <div className={styles.categoryNav}>
        {activityData.map((item) => (
          <button
            key={item.category}
            onClick={() => handleCategoryClick(item.category)}
            className={`${styles.navButton} ${item.category === category ? styles.active : ''}`}
          >
            {item.category}
          </button>
        ))}
      </div>

      <h1 className={styles.title}>{category} Activities</h1>
      <div className={styles.breadcrumbs}>Home &gt; Activities &gt; {category}</div>
      
      {activity?.details.map((detail, index) => (
        <div
          key={index}
          className={`${styles.section} ${index % 2 === 0 ? styles.leftAlign : styles.rightAlign}`}
        >
          <div className={styles.animationContainer}>
            <Lottie animationData={animationMap[detail.animation]} loop={true} className={styles.animation} />
          </div>
          <div className={styles.textContainer}>
            <h2>{detail.title}</h2>
            <p>{detail.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ActivityDetails;
