import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import './SkillListStyles.css'; // Importing updated CSS file

function SkillList({ icon, skill, info }) {
  return (
    <Tooltip title={info} arrow>
      <div className="skillItem">
        <span className="icon">{icon}</span>
        <p className="skillText">{skill}</p>
      </div>
    </Tooltip>
  );
}

export default SkillList;
