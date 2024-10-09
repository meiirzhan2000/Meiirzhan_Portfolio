function SkillList({ icon, skill }) {
    return (
      <div className="skillItem">
        <span className="icon">{icon}</span>
        <p>{skill}</p>
      </div>
    );
  }
  
  export default SkillList;
  