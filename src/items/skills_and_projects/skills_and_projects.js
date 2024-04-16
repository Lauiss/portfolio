import { faAngular, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Chrono } from 'react-chrono';
import './skills_and_projects.css';


const SkillsAndProjects = () => {
  const skills = [
    { name: 'JavaScript', icon: faJs },
    { name: 'Angular', icon: faAngular },
    { name: 'React', icon: faReact },
    { name: 'React', icon: faReact },
    { name: 'React', icon: faReact },
    { name: 'React', icon: faReact },
    { name: 'React', icon: faReact },
    { name: 'React', icon: faReact },
    { name: 'React', icon: faReact },
    // Ajoutez plus de compétences ici
  ];

  const otherSkills = [
    { name: 'Montage photo', icon: faJs },
    { name: 'Montage vidéo', icon: faAngular },
    { name: 'Lever le Tmax', icon: faReact },
    { name: 'Gofast avec les condés', icon: faReact },
    { name: 'React', icon: faReact },
    { name: 'React', icon: faReact },
    { name: 'React', icon: faReact },
    { name: 'React', icon: faReact },
    { name: 'React', icon: faReact },
    // Ajoutez plus de compétences ici
  ];



  const projects = [
    { title: 'caca sur mel', date: '2020-01-01' },
    { title: 'caca sur les ops', date: '2020-06-01' },
    { title: 'caca sur les a', date: '2020-06-01' },
    { title: 'caca sur les b', date: '2020-06-01' },
    { title: 'caca sur les C', date: '2020-06-01' },
    { title: 'caca sur les C', date: '2020-06-01' },
    { title: 'caca sur les C', date: '2020-06-01' },
    { title: 'caca sur les C', date: '2020-06-01' },
    { title: 'caca sur les C', date: '2020-06-01' },
    { title: 'caca sur les C', date: '2020-06-01' },
    { title: 'caca sur les C', date: '2020-06-01' },
    { title: 'caca sur les C', date: '2020-06-01' },
    { title: 'caca sur les C', date: '2020-06-01' },
    { title: 'caca sur les C', date: '2020-06-01' },
    { title: 'caca sur les C', date: '2020-06-01' },
    { title: 'caca sur les C', date: '2020-06-01' },
    { title: 'caca sur les C', date: '2020-06-01' },
    { title: 'caca sur les C', date: '2020-06-01' },
    // Ajoutez plus de projets ici
  ];

  return (
    <div className="skills-and-projects">
      <div className="skills">
        <h2>Compétences</h2>

        <div className='skills-container'>
          {skills.map((skill, index) => (
            <div key={index} class="skill-badge">
              <FontAwesomeIcon icon={skill.icon} className='icon' />
              {skill.name}
            </div>
          ))}
        </div>
        <h2> Autres compétences</h2>
        <div className='other-skills-container'>
          {otherSkills.map((skill, index) => (
            <div key={index} class="other-skill-badge">
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
