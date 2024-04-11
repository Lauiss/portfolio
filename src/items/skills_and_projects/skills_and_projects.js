import React, { useState } from 'react';
// import Timeline from 'react-timeline-scribble';
import { Chrono } from 'react-chrono';
import './skills_and_projects.css';

const SkillsAndProjects = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const skills = [
    { name: 'JavaScript', icon: 'prout', frameworks: ['Node.js', 'Express.js'] },
    { name: 'React', icon: 'prout', frameworks: ['Redux', 'Next.js'] },
    // Ajoutez plus de compétences ici
  ];

  const projects = [
    { title: 'caca sur mel', date: '2020-01-01' },
    { title: 'caca sur les ops', date: '2020-06-01' },
    { title: 'caca sur les a', date: '2020-06-01' },
    { title: 'caca sur les b', date: '2020-06-01' },
    { title: 'caca sur les C', date: '2020-06-01' },
    // Ajoutez plus de projets ici
  ];

  return (
    <div className="skills-and-projects">
      <div className="skills">
        <h2>Compétences</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index} onMouseOver={() => setActiveSkill(skill)}>
              {skill.icon} {skill.name}
            </li>
          ))}
        </ul>
        {activeSkill && (
          <div className="frameworks">
            <h3>Frameworks pour {activeSkill.name}</h3>
            <ul>
              {activeSkill.frameworks.map((framework, index) => (
                <li key={index}>{framework}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="projects">
        <h2>Projets</h2>
        <Chrono mode="VERTICAL_ALTERNATING" disableToolbar={true} timelinePointShape='diamond' scrollable={true}
          items={projects.map(project => ({ title: project.title, cardTitle: project.date }))} />
      </div>
    </div>
  );
};

export default SkillsAndProjects;
