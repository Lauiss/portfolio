import { faAngular, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Chrono } from 'react-chrono';
import './skills_and_projects.css';


const SkillsAndProjects = ({ translate }) => {
  const skills = [
    { name: 'JavaScript', icon: faJs },
    { name: 'Angular', icon: faAngular },
    { name: 'React', icon: faReact },
    { name: 'Ionic', icon: faReact },
    { name: 'Java', icon: faReact },
    { name: 'Swift', icon: faReact },
    { name: 'Batch', icon: faReact },
    { name: 'Shell', icon: faReact },
    { name: 'Powershell', icon: faReact },
    { name: 'SQL', icon: faReact },
    { name: 'C#', icon: faReact },
    // Ajoutez plus de compétences ici
  ];

  const otherSkills = [
    { name: 'Montage photo', icon: faJs },
    { name: 'Montage vidéo', icon: faAngular },
    { name: 'Suite Adobe', icon: faReact },
    { name: 'Suite Microsoft', icon: faReact },
    { name: 'Gestion de projet', icon: faReact },
    // Ajoutez plus de compétences ici
  ];



  const projects = [
    { title: 'Autoclicker pour Raid Shadow Legends', date: '2020-06-21' },
    { title: 'Bot discord avec différentes fonctionnalités', date: '2021-01-24' },
    { title: 'Petit générateur de mot de passe', date: '2021-08-02' },
    { title: 'API Vinted fonctionnelle avec un manageur de proxy', date: '2023-03-10' },
    { title: 'Portfolio', date: '2024-02-26' },
  ];

  return (
    <div className="skills-and-projects">
      <div className="skills">
        <h2>{translate(('SKILLS'))}</h2>

        <div className='skills-container'>
          {skills.map((skill, index) => (
            <div key={index} className="skill-badge">
              <FontAwesomeIcon icon={skill.icon} className='icon' />
              {skill.name}
            </div>
          ))}
        </div>
        <h2> Autres compétences</h2>
        <div className='other-skills-container'>
          {otherSkills.map((skill, index) => (
            <div key={index} className="other-skill-badge">
              <FontAwesomeIcon icon={skill.icon} className='icon' />
              {skill.name}
            </div>
          ))}
        </div>
      </div>
      <div className="projects">
        <h2>Projets</h2>
        <Chrono mode="VERTICAL_ALTERNATING" disableToolbar={true} timelinePointShape='diamond' scrollable={{ scrollbar: true }}
          items={projects.map(project => ({ title: project.title, cardTitle: project.date }))} />
      </div>
    </div>
  );
};

export default SkillsAndProjects;
