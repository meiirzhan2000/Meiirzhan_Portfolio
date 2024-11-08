import React from 'react';
import styles from './SkillsStyles.module.css';
import { useTheme } from '../../common/ThemeContext';
import { 
  DiHtml5, DiCss3, DiJavascript, DiReact, DiNodejs, DiGit, DiBootstrap, 
  DiAws, DiGoogleCloudPlatform, DiJava, DiPython, DiMysql, DiAndroid, DiApple 
} from "react-icons/di";
import SkillList from '../../common/SkillList';
import { RiFlutterLine } from "react-icons/ri";
import { TbBrandReactNative, TbSql, TbBrandKotlin, TbDatabaseSearch, TbBrandCSharp } from "react-icons/tb";
import { GrAchievement, GrUserManager, GrTime, GrTask, GrGroup } from "react-icons/gr";

function Skills() {
  const { theme } = useTheme();

  // Define colors based on the theme
  const iconColor = theme === 'light' ? '#333' : '#fff'; // Dark icons in light mode, light icons in dark mode

  const paddingStyle = {
    paddingTop: '40px',
    paddingBottom: '40px',
  };

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      
      {/* Technical Skills */}
      <h2 className="sectionSubtitle" style={{ paddingBottom: '40px' }}>Technical Skills</h2>
      <div className={styles.skillList}>
        <SkillList icon={<DiHtml5 color={iconColor} />} skill="HTML" info="Markup language used for structuring web content." />
        <SkillList icon={<DiCss3 color={iconColor} />} skill="CSS" info="Style sheet language used for describing the presentation of a document." />
        <SkillList icon={<DiJavascript color={iconColor} />} skill="JavaScript" info="High-level programming language for web development." />
        <SkillList icon={<DiReact color={iconColor} />} skill="React" info="JavaScript library for building user interfaces." />
        <SkillList icon={<RiFlutterLine color={iconColor} />} skill="Flutter" info="UI toolkit for building natively compiled applications." />
        <SkillList icon={<TbBrandReactNative color={iconColor} />} skill="React Native" info="Framework for building native apps using React." />
        <SkillList icon={<DiNodejs color={iconColor} />} skill="Node.js" info="JavaScript runtime built on Chrome's V8 JavaScript engine." />
        <SkillList icon={<DiGit color={iconColor} />} skill="Git" info="Version control system for tracking changes in source code." />
        <SkillList icon={<DiBootstrap color={iconColor} />} skill="Bootstrap" info="CSS framework for building responsive, mobile-first websites." />
      </div>
      
      <hr />
      
      <div className={styles.skillList}>
        <SkillList icon={<DiJava color={iconColor} />} skill="Java" info="General-purpose, object-oriented programming language." />
        <SkillList icon={<TbBrandKotlin color={iconColor} />} skill="Kotlin" info="Cross-platform, statically typed programming language." />
        <SkillList icon={<TbBrandCSharp color={iconColor} />} skill="C#" info="Modern, object-oriented programming language developed by Microsoft." />
        <SkillList icon={<DiPython color={iconColor} />} skill="Python" info="High-level, general-purpose programming language." />
        <SkillList icon={<TbSql color={iconColor} />} skill="SQL" info="Standard language for accessing and managing databases." />
        <SkillList icon={<TbDatabaseSearch color={iconColor} />} skill="Database Management" info="Skills in managing and maintaining databases." />
        <SkillList icon={<DiMysql color={iconColor} />} skill="MySQL" info="Open-source relational database management system." />
        <SkillList icon={<DiAws color={iconColor} />} skill="AWS Cloud Solutions" info="Experience with Amazon Web Services for cloud solutions." />
        <SkillList icon={<DiGoogleCloudPlatform color={iconColor} />} skill="Google Cloud Platform" info="Knowledge of Google Cloud services for cloud computing." />
      </div>
      
      <hr />
      
      <div className={styles.skillList}>
        <SkillList icon={<DiAndroid color={iconColor} />} skill="Android Development" info="Developing applications for Android devices." />
        <SkillList icon={<DiApple color={iconColor} />} skill="iOS Development" info="Developing applications for Apple devices." />
      </div>

      {/* Other Skills */}
      <h2 className="sectionSubtitle" style={paddingStyle}>Other Skills</h2>
      <div className={styles.skillList}>
        <SkillList icon={<GrAchievement color={iconColor} />} skill="Achievement-Oriented" info="Driven by setting and achieving challenging goals." />
        <SkillList icon={<GrUserManager color={iconColor} />} skill="Leadership" info="Experience in leading and managing teams effectively." />
        <SkillList icon={<GrTime color={iconColor} />} skill="Time Management" info="Ability to manage time efficiently and prioritize tasks." />
        <SkillList icon={<GrTask color={iconColor} />} skill="Multitasking" info="Skilled in handling multiple tasks simultaneously." />
        <SkillList icon={<GrGroup color={iconColor} />} skill="Teamwork" info="Effective collaboration with team members to achieve objectives." />
      </div>
    </section>
  );
}

export default Skills;
