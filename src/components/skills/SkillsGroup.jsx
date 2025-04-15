import React from 'react';

const SkillsGroup = ({ title, skills }) => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">{title}</h3>

      <div className="skills__box">
        <div className="skills__group">
          {skills.map((skill, index) => (
            <div className="skills__data" key={index}>
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">{skill}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsGroup;
