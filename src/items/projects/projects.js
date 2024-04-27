import React from 'react';
import { Chrono } from 'react-chrono';
import './projects.css';


const Projects = ({ translate }) => {

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
      <div className="projects">
        <h2>{translate('PROJECTS')}</h2>
        <Chrono mode="VERTICAL_ALTERNATING" disableToolbar={true} timelinePointShape='diamond'
          scrollable={{ scrollbar: true }} theme={theme} className='chrono'
          items={projects.map(project => ({ title: project.title, cardTitle: project.date }))} />
      </div>
  );
};

export default Projects;
