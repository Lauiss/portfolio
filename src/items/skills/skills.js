import { faAngular, faFigma, faGit, faJava, faJs, faPython, faReact, faSwift, faWindows } from '@fortawesome/free-brands-svg-icons';
import { faA, faCamera, faCode, faDatabase, faDiagramProject, faMobile, faTerminal, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './skills.css';


const Skills = ({ translate }) => {
  const skills = [
    { name: 'JavaScript', icon: faJs },
    { name: 'TypeScript', icon: faCode },
    { name: 'Angular', icon: faAngular },
    { name: 'React', icon: faReact },
    { name: 'Ionic', icon: faMobile },
    { name: 'Java', icon: faJava },
    { name: 'Swift', icon: faSwift },
    { name: 'Batch', icon: faTerminal },
    { name: 'Shell', icon: faTerminal },
    { name: 'Powershell', icon: faTerminal },
    { name: 'SQL', icon: faDatabase },
    { name: 'Python', icon: faPython },
    { name: 'GDScript', icon: faCode },
    { name: 'C#', icon: faCode },
  ];

  const otherSkills = [
    { name: translate('PHOTO_EDITING'), icon: faCamera },
    { name: translate('VIDEO_EDITING'), icon: faVideo },
    { name: translate('SUITE_ADOBE'), icon: faA },
    { name: translate('SUITE_MICROSOFT'), icon: faWindows },
    { name: translate('PROJECT_MANAGEMENT'), icon: faDiagramProject },
    { name: 'Figma', icon: faFigma },
    { name: 'Git', icon: faGit },
  ];

  return (
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
  );
};

export default Skills;
