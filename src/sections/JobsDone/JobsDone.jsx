import React, { useState, useEffect } from 'react';
import { useTheme } from '../../common/ThemeContext';
import Slider from 'react-slick';
import tutorImage from '../../assets/t1.png';
import tr2 from '../../assets/tr2.png';
import tr3 from '../../assets/tr3.png';
import fartechImage from '../../assets/p1.png';
import fartechImage2 from '../../assets/ft2.png';
import fartechImage3 from '../../assets/ft3.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './JobsDoneStyles.module.css';

function Jobs() {
  const { theme } = useTheme();
  const [jobListWidth, setJobListWidth] = useState(window.innerWidth - 80);

  useEffect(() => {
    // Function to set the max-width of the jobList dynamically
    const updateJobListWidth = () => {
      if (window.innerWidth <= 900) {
        setJobListWidth(window.innerWidth - 80);
      } else {
        setJobListWidth(window.innerWidth - 150);
      }
    };

    // Set the max-width initially
    updateJobListWidth();

    // Add event listener to handle resize
    window.addEventListener('resize', updateJobListWidth);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', updateJobListWidth);
  }, []);

  const slides = [
    {
      description: 'Taught programming languages including Java, Python, and C.',
      image: tutorImage,
    },
    {
      description: 'Developed personalized lesson plans to improve student skills.',
      image: tr2,
    },
    {
      description: 'Encouraged students to study by letting them teach back concepts.',
      image: tr3,
    },
    {
      description: 'Developed a chatbot using React, Twilio API, and Google Cloud.',
      image: fartechImage,
    },
    {
      description: 'Worked closely with clients to meet their requirements.',
      image: fartechImage2,
    },
    {
      description: 'Worked with Dialogflow, Flutter on AR navigation systems.',
      image: fartechImage3,
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
        },
      },
    ],
  };

  return (
    <section id="jobs" className={styles.container}>
      <h1 className={styles.sectionTitle}>Job Experience</h1>
      <div
        className={`${styles.jobList} slider-container`}
        style={{ maxWidth: `${jobListWidth}px` }}
      >
        <div className={styles.item}>
          <Slider {...sliderSettings}>
            {slides.map((slide, index) => (
              <div key={index} className={styles.slide}>
                <img src={slide.image} alt={`Slide ${index + 1}`} className={styles.jobImage} />
                <p className={styles.jobDescription}>{slide.description}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Jobs;
