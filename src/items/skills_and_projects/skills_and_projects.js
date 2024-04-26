import { faAngular, faJava, faJs, faReact, faSwift, faWindows } from '@fortawesome/free-brands-svg-icons';
import { faCamera, faCode, faDatabase, faTerminal, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Chrono } from 'react-chrono';
import './skills_and_projects.css';


const SkillsAndProjects = ({ translate }) => {
  const skills = [
    { name: 'JavaScript', icon: faJs },
    { name: 'Angular', icon: faAngular },
    { name: 'React', icon: faReact },
    { name: 'Ionic', icon: faAngular },
    { name: 'Java', icon: faJava },
    { name: 'Swift', icon: faSwift },
    { name: 'Batch', icon: faTerminal },
    { name: 'Shell', icon: faTerminal },
    { name: 'Powershell', icon: faTerminal },
    { name: 'SQL', icon: faDatabase },
    { name: 'C#', icon: faCode },
  ];

  const otherSkills = [
    { name: translate('PHOTO_EDITING'), icon: faCamera },
    { name: translate('VIDEO_EDITING'), icon: faVideo },
    { name: translate('SUITE_ADOBE'), icon: faReact },
    { name: translate('SUITE_MICROSOFT'), icon: faWindows },
    { name: translate('PROJECT_MANAGEMENT'), icon: faReact },
  ];

  const projects = [
    { title: translate('AUTOCLICK'), date: '2020-06-21' },
    { title: translate('DISCORD_BOT'), date: '2021-01-24' },
    { title: translate('PWD_GENERATOR'), date: '2021-08-02' },
    { title: translate('VINTED_API_AND_PROXY_MANAGER'), date: '2023-03-10' },
    { title: translate('PORTFOLIO'), date: '2024-02-26' },
  ];

  const theme = {
    primary: '#63E6BE',
    secondary: '#FFFFFF',
    cardBgColor: '#FFFFFF',
    cardForeColor: '#000000',
    titleColor: '#000000',
    titleColorActive: '#63E6BE'
  }

  return (
    <div className="skills-and-projects">
      <div className="skills">
        <h2>{translate('SKILLS')}</h2>

        <div className='skills-container'>
          {skills.map((skill, index) => (
            <div key={index} className="skill-badge">
              <FontAwesomeIcon icon={skill.icon} className='icon' />
              {skill.name}
            </div>
          ))}
        </div>
        <h2>{translate('OTHER_SKILLS')}</h2>
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
        <h2>{translate('PROJECTS')}</h2>
        <Chrono mode="VERTICAL_ALTERNATING" disableToolbar={true} timelinePointShape='diamond'
          scrollable={{ scrollbar: true }} theme={theme} className='chrono'
          items={projects.map(project => ({ title: project.title, cardTitle: project.date }))} />
      </div>
    </div>
  );
};

export default SkillsAndProjects;
