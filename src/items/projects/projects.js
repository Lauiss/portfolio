import React, { useState } from 'react';
import pfp from '../../assets/pdp.png';
import './projects.css';


const Projects = ({ translate }) => {

  const projects = [
    { date: translate('PORTFOLIO_DATE'), title: translate('PORTFOLIO_TITLE'), description: translate('PORTFOLIO_DESCRIPTION'), repoType: translate('PRIVATE_REPOSITORY') },
    { date: translate('OPDL_DATE'), title: translate('OPDL_TITLE'), description: translate('OPDL_DESCRIPTION'), repoType: 'https://github.com/Lauiss/onepiecedle' },
    { date: translate('VINTED_API_AND_PROXY_MANAGER_DATE'), title: translate('VINTED_API_AND_PROXY_MANAGER_TITLE'), description: translate('VINTED_API_AND_PROXY_MANAGER_DESCRIPTION'), repoType: 'https://github.com/Lauiss/vinApi' },
    { date: translate('PWD_GENERATOR_DATE'), title: translate('PWD_GENERATOR_TITLE'), description: translate('PWD_GENERATOR_DESCRIPTION'), repoType: 'https://github.com/Lauiss/mdpgenerator' },
    { date: translate('DISCORD_BOT_DATE'), title: translate('DISCORD_BOT_TITLE'), description: translate('DISCORD_BOT_DESCRIPTION'), repoType: translate('PRIVATE_REPOSITORY') },
    { date: translate('AUTOCLICKER_DATE'), title: translate('AUTOCLICKER_TITLE'), description: translate('AUTOCLICKER_DESCRIPTION'), repoType: 'https://github.com/Lauiss/autorsl' },
  ];

 const [currentIndex, setCurrentIndex] = useState(0);

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
        <div className="carousel">
          <div className="card-container">
            <a className='card-link' href={project?.repoType}>
              <div className='card-background'>
                <img className='card-image' src={pfp} alt={project?.title} />
                <div>
                  <h3 className="card-title">{project?.title}</h3>
                  <p className="card-subtitle">{project?.date}</p>
                  <p className='card-text'>{project?.description}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <button className="carousel-button right" onClick={handleNextClick}>
          &#9654;
        </button>
      </div>
    </div>
    </div>
  );
};

export default Projects;
