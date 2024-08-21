import React, { useState } from 'react';
import clicklogo from '../../assets/click_logo.jpg';
import codelogo from '../../assets/code_logo.png';
import discordlogo from '../../assets/discord_logo.jpg';
import wildjamlogo from '../../assets/godot_wildjam_logo.jpg';
import passwordgeneratorlogo from '../../assets/password_generator_logo.jpg';
import './projects.css';

const Projects = ({ translate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    { date: translate('GODOT_WILDJAM_70_DATE'), title: translate('GODOT_WILDJAM_70_TITLE'), description: translate('GODOT_WILDJAM_70_DESCRIPTION'), repoType: 'https://lauiss.itch.io/dawnfire', image: wildjamlogo },
    { date: translate('GODOT_WILDJAM_71_DATE'), title: translate('GODOT_WILDJAM_71_TITLE'), description: translate('GODOT_WILDJAM_71_DESCRIPTION'), repoType: 'https://graphific.itch.io/colorbeat', image: wildjamlogo },
    { date: translate('PORTFOLIO_DATE'), title: translate('PORTFOLIO_TITLE'), description: translate('PORTFOLIO_DESCRIPTION'), repoType: translate('PRIVATE_REPOSITORY') },
    { date: translate('OPDL_DATE'), title: translate('OPDL_TITLE'), description: translate('OPDL_DESCRIPTION'), repoType: 'https://github.com/Lauiss/onepiecedle' },
    { date: translate('VINTED_API_AND_PROXY_MANAGER_DATE'), title: translate('VINTED_API_AND_PROXY_MANAGER_TITLE'), description: translate('VINTED_API_AND_PROXY_MANAGER_DESCRIPTION'), repoType: 'https://github.com/Lauiss/vinApi' },
    { date: translate('PWD_GENERATOR_DATE'), title: translate('PWD_GENERATOR_TITLE'), description: translate('PWD_GENERATOR_DESCRIPTION'), repoType: 'https://github.com/Lauiss/mdpgenerator', image: passwordgeneratorlogo },
    { date: translate('DISCORD_BOT_DATE'), title: translate('DISCORD_BOT_TITLE'), description: translate('DISCORD_BOT_DESCRIPTION'), repoType: translate('PRIVATE_REPOSITORY'), image: discordlogo },
    { date: translate('AUTOCLICKER_DATE'), title: translate('AUTOCLICKER_TITLE'), description: translate('AUTOCLICKER_DESCRIPTION'), repoType: 'https://github.com/Lauiss/autorsl', image: clicklogo }
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const project = projects[currentIndex];

  return (
    <div className="container">
      <h2>{translate('PERSONAL_PROJECTS')}</h2>
      <div className="projects">
        <div className="carousel-container">
          <button className="carousel-button left" onClick={handlePrevClick}>
            &#9664;
          </button>
          <div className="card-container">
            <a className='card-link' href={project?.repoType}>
              <div className='card-background'>
                <img className='card-image' src={project?.image ?? codelogo} alt={project?.title} />
                <div>
                  <h3 className="card-title">{project?.title}</h3>
                  <p className="card-subtitle">{project?.date}</p>
                  <p className='card-text'>{project?.description}</p>
                </div>
              </div>
            </a>
          </div>
          <button className="carousel-button right" onClick={handleNextClick}>
            &#9654;
          </button>
        </div>
      </div>
    </div >
  );
};

export default Projects;
