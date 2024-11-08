import React, { useState } from 'react';
import styles from './MenuButtonStyles.module.css';

function MenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.menuButtonContainer}>
      {!isMenuOpen && (
        <button className={styles.menuButton} onClick={toggleMenu}>
          ☰
        </button>
      )}

      {isMenuOpen && (
        <div className={styles.menuOverlay}>
          <button className={styles.exitButton} onClick={closeMenu}>
            ✖
          </button>
          <ul className={`${styles.menuList} ${isMenuOpen ? styles.open : styles.close}`}>
            <li><a href="#hero" data-text="Hero" onClick={closeMenu}>Hero</a></li>
            <li><a href="#jobs" data-text="Jobs" onClick={closeMenu}>Jobs</a></li>
            <li><a href="#projects" data-text="Projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#skills" data-text="Skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="#interests" data-text="Interests" onClick={closeMenu}>Interests</a></li>
            <li><a href="#contact" data-text="Contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default MenuButton;
