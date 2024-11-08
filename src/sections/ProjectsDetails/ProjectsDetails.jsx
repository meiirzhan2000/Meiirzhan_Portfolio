import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './ProjectsDetailsStyles.module.css';
import projectsData from '../../Data/Data.jsx';

function ProjectsDetails() {
  const { category } = useParams();
  const navigate = useNavigate();

  // Scroll to the top on component load or category change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  // Find the selected category and list of available categories
  const selectedCategory = projectsData.find(cat => cat.category.toLowerCase() === category.toLowerCase());
  const categories = projectsData.map(cat => cat.category);

  // State for main images of each project in the selected category
  const [mainImages, setMainImages] = useState(
    selectedCategory ? selectedCategory.projects.map(project => project.images[0]) : []
  );

  // Handle category change
  const handleCategoryChange = (e) => {
    navigate(`/projects-details/${e.target.value}`);
  };

  // Reset mainImages whenever the category changes
  useEffect(() => {
    if (selectedCategory) {
      setMainImages(selectedCategory.projects.map(project => project.images[0]));
    }
  }, [selectedCategory]);

  // Handle image click to update the main image for each project
  const handleImageClick = (index, image) => {
    const newMainImages = [...mainImages];
    newMainImages[index] = image;
    setMainImages(newMainImages);
  };

  // Navigate back to the Projects section
  const navigateToProjects = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };

  // Display message if no category is found
  if (!selectedCategory) {
    return <div className={styles.container}>No projects found for this category.</div>;
  }

  return (
    <div className={styles.container} key={category}>
      {/* Back to Categories Button */}
      <button onClick={navigateToProjects} className={styles.backButton}>
        ← Back to Categories
      </button>

      <div className={styles.navigation}>
        <select value={category} onChange={handleCategoryChange} className={styles.categorySelect}>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      
      <h1 className={styles.pageTitle}>{selectedCategory.category}</h1>

      {selectedCategory.projects.map((project, projectIndex) => (
        <section
          key={`${category}-${project.id}`}
          className={`${styles.project} ${projectIndex % 2 !== 0 ? styles.reverse : ""}`}
        >
          <div className={styles.projectPhoto}>
            <div className={styles.photoContainer}>
              <div className={styles.photoMain}>
                <img src={mainImages[projectIndex]} alt={`Project ${projectIndex + 1}`} />
              </div>
              <div className={styles.photoAlbum}>
                <ul>
                  {project.images.map((image, imgIndex) => (
                    <li key={imgIndex}>
                      <img
                        src={image}
                        alt={`Sample Image ${imgIndex + 1}`}
                        onClick={() => handleImageClick(projectIndex, image)}
                        className={styles.albumImage}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.projectInfo}>
            <div className={styles.title}>
              <h1>{project.title}</h1>
              <span>Completed: {project.completedDate}</span>
            </div>
            <div className={styles.description}>
              <h3>Description</h3>
              <p>{project.description}</p>
            </div>
            <div className={styles.actions}>
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubButton}
                >
                  GitHub
                </a>
              )}
              {project.moreDetailsLink && (
                <a
                  href={project.moreDetailsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.detailsButton}
                >
                  More Details
                </a>
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProjectsDetails;
