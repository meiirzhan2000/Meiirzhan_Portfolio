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
      <h2 className="sectionSubtitle" style={ {paddingBottom: '40px'} }>Technical Skills</h2>
      <div className={styles.skillList}>
        <SkillList icon={<DiHtml5 color={iconColor} />} skill="HTML" />
        <SkillList icon={<DiCss3 color={iconColor} />} skill="CSS" />
        <SkillList icon={<DiJavascript color={iconColor} />} skill="JavaScript" />
        <SkillList icon={<DiReact color={iconColor} />} skill="React" />
        <SkillList icon={<RiFlutterLine color={iconColor} />} skill="Flutter" />
        <SkillList icon={<TbBrandReactNative color={iconColor} />} skill="React Native" />
        <SkillList icon={<DiNodejs color={iconColor} />} skill="Node.js" />
        <SkillList icon={<DiGit color={iconColor} />} skill="Git" />
        <SkillList icon={<DiBootstrap color={iconColor} />} skill="Bootstrap" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList icon={<DiJava color={iconColor} />} skill="Java" />
        <SkillList icon={<TbBrandKotlin color={iconColor} />} skill="Kotlin" />
        <SkillList icon={<TbBrandCSharp color={iconColor} />} skill="C#" />
        <SkillList icon={<DiPython color={iconColor} />} skill="Python" />
        <SkillList icon={<TbSql color={iconColor} />} skill="SQL" />
        <SkillList icon={<TbDatabaseSearch color={iconColor} />} skill="Database Management" />
        <SkillList icon={<DiMysql color={iconColor} />} skill="MySQL" />
        <SkillList icon={<DiAws color={iconColor} />} skill="AWS Cloud Solutions" />
        <SkillList icon={<DiGoogleCloudPlatform color={iconColor} />} skill="Google Cloud Platform" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList icon={<DiAndroid color={iconColor} />} skill="Android Development" />
        <SkillList icon={<DiApple color={iconColor} />} skill="iOS Development" />
      </div>

      {/* Other Skills */}
      <h2 className="sectionSubtitle" style = { paddingStyle }>Other Skills</h2>
      <div className={styles.skillList}>
        <SkillList icon={<GrAchievement color={iconColor} />} skill="Achievement-Oriented" />
        <SkillList icon={<GrUserManager color={iconColor} />} skill="Leadership" />
        <SkillList icon={<GrTime color={iconColor} />} skill="Time Management" />
        <SkillList icon={<GrTask color={iconColor} />} skill="Multitasking" />
        <SkillList icon={<GrGroup color={iconColor} />} skill="Teamwork" />
      </div>
    </section>
  );
}

export default Skills;
