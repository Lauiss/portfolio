import React from 'react';
import { Chrono } from 'react-chrono';
import './projects.css';


const Projects = ({ translate, isDarkMode, language }) => {

  console.log(language);

  const projects = [
    {date: translate('AUTOCLICKER_DATE'), title: translate('AUTOCLICKER_TITLE'), description: translate('AUTOCLICKER_DESCRIPTION'), repoType: translate('PRIVATE_REPOSITORY')},
    {date: translate('DISCORD_BOT_DATE'), title: translate('DISCORD_BOT_TITLE'), description: translate('DISCORD_BOT_DESCRIPTION'), repoType: translate('PRIVATE_REPOSITORY')},
    {date: translate('PWD_GENERATOR_DATE'), title: translate('PWD_GENERATOR_TITLE'), description: translate('PWD_GENERATOR_DESCRIPTION'), repoType: translate('PRIVATE_REPOSITORY')},
    {date: translate('VINTED_API_AND_PROXY_MANAGER_DATE'), title: translate('VINTED_API_AND_PROXY_MANAGER_TITLE'), description: translate('VINTED_API_AND_PROXY_MANAGER_DESCRIPTION'), repoType: translate('PRIVATE_REPOSITORY')},
    {date: translate('PORTFOLIO_DATE'), title: translate('PORTFOLIO_TITLE'), description: translate('PORTFOLIO_DESCRIPTION'), repoType: translate('PRIVATE_REPOSITORY')}
  ];

  const theme =  isDarkMode ? {
    primary: '#f7f7f7',
    secondary: '#282c34',
    cardBgColor: '#f7f7f7',
    cardForeColor: '#282c34',
    titleColor: '#00000',
    titleColorActive: '#63E6BE'
  } : {
    primary: '#63E6BE',
    secondary: '#f7f7f7',
    cardBgColor: '#f7f7f7',
    cardForeColor: '#f7f7f7',
    titleColor: '#63E6BE',
    titleColorActive: '#63E6BE'
  }

  return (
      <div className="projects">
        <h2>{translate('PROJECTS')}</h2>
        <div className='chrono'>
        <Chrono
          key={`${language}-${isDarkMode} ? 'dark' : 'light'`}
          mode="VERTICAL_ALTERNATING"
          disableToolbar={true}
          timelinePointShape='diamond'
          scrollable={{ scrollbar: true }}
          theme={theme}
          className='chrono'
          items={projects.map(project => ({ title: project?.date, cardTitle:project?.title, cardSubtitle: project?.repoType, cardDetailedText: project?.description }))} />
        </div>
      </div>
  );
};

export default Projects;
