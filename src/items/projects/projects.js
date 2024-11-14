import React from 'react';
import clicklogo from '../../assets/autoclick.png';
import codelogo from '../../assets/code_generic.png';
import discordlogo from '../../assets/discordbot.png';
import dawnfire from '../../assets/dawnfire.png';
import passwordgeneratorlogo from '../../assets/pwd_generator.png';
import colorbeat from '../../assets/colorbeat.png';
import portfolio from '../../assets/portfolio.png';
import './projects.css';

const Projects = ({ translate }) => {
  const projects = [
    { date: translate('GODOT_WILDJAM_71_DATE'), title: translate('GODOT_WILDJAM_71_TITLE'), description: translate('GODOT_WILDJAM_71_DESCRIPTION'), repoType: 'https://graphific.itch.io/colorbeat', image: colorbeat },
    { date: translate('GODOT_WILDJAM_70_DATE'), title: translate('GODOT_WILDJAM_70_TITLE'), description: translate('GODOT_WILDJAM_70_DESCRIPTION'), repoType: 'https://lauiss.itch.io/dawnfire', image: dawnfire },
    { date: translate('PORTFOLIO_DATE'), title: translate('PORTFOLIO_TITLE'), description: translate('PORTFOLIO_DESCRIPTION'), repoType: translate('PRIVATE_REPOSITORY'), image: portfolio },
    { date: translate('VINTED_API_AND_PROXY_MANAGER_DATE'), title: translate('VINTED_API_AND_PROXY_MANAGER_TITLE'), description: translate('VINTED_API_AND_PROXY_MANAGER_DESCRIPTION'), repoType: 'https://github.com/Lauiss/vinApi' },
    { date: translate('PWD_GENERATOR_DATE'), title: translate('PWD_GENERATOR_TITLE'), description: translate('PWD_GENERATOR_DESCRIPTION'), repoType: 'https://github.com/Lauiss/mdpgenerator', image: passwordgeneratorlogo },
    { date: translate('DISCORD_BOT_DATE'), title: translate('DISCORD_BOT_TITLE'), description: translate('DISCORD_BOT_DESCRIPTION'), repoType: translate('PRIVATE_REPOSITORY'), image: discordlogo },
    { date: translate('AUTOCLICKER_DATE'), title: translate('AUTOCLICKER_TITLE'), description: translate('AUTOCLICKER_DESCRIPTION'), repoType: 'https://github.com/Lauiss/autorsl', image: clicklogo }
  ];
  
  return (
    <div className="projects">
      <h2 className="projects-title">{translate('PERSONAL_PROJECTS')}</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <a href={project.repoType} className="project-link">
            <img
              src={project.image ?? codelogo}
              alt={project.title}
              className="project-image"
            />
            <div className="project-overlay">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-date">{project.date}</p>
              <p className="project-description">{project.description}</p>
              <h4>{translate('VIEW_PROJECT')} <span>→</span></h4>
            </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
