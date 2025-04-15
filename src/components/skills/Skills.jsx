import React from 'react';
import SkillsGroup from './SkillsGroup';
import './skills.css';

const Skills = () => {
  const skillData = [
    {
      title: 'Languages',
      skills: ['C++', 'Java', 'Python'],
    },
    {
      title: 'Web Technologies',
      skills: ['React', 'Spring Boot', 'FastAPI', 'HTML,CSS(Bootstrap,Tailwind)'],
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'MongoDB', 'VectorDB(FAISS,Reddis)'],
    },
    {
      title: 'ML / AI',
      skills: ['Foundational ML/DL', 'LangChain', 'Prompt Engineering'],
    },
    {
      title: 'Tools & Others',
      skills: ['Docker', 'Git', 'GitHub', 'Selenium'],
    },
  ];

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Level</span>

      <div className="skills__container container grid">
        {skillData.map((group, index) => (
          <SkillsGroup key={index} title={group.title} skills={group.skills} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
