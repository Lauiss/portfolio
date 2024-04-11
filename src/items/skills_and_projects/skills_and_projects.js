import { faAngular, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import React, { useState } from 'react';
import { Chrono } from 'react-chrono';
import './skills_and_projects.css';


const SkillsAndProjects = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const skills = [
    { name: 'JavaScript', icon: { faJs }, frameworks: ['Node.js', 'Express.js'] },
    { name: 'Angular', icon: { faAngular }, frameworks: ['Node.js', 'Express.js'] },
    { name: 'React', icon: { faReact }, frameworks: ['Redux', 'Next.js'] },
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

        <div className='skills-container'>
          {skills.map((skill, index) => (
            <div key={index} onMouseOver={() => setActiveSkill(skill)} class="skill-badge">
              {/* <FontAwesomeIcon icon={skill.icon} className='icon'/> */}
              {skill.name}
            </div>
          ))}
        </div>
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
        <Chrono mode="VERTICAL_ALTERNATING" disableToolbar={true} timelinePointShape='diamond' scrollable
          items={projects.map(project => ({ title: project.title, cardTitle: project.date }))} />
      </div>
    </div>
  );
};

export default SkillsAndProjects;
