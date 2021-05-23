import React from 'react';
import Project from '../Project';

function Portfolio() {
  const projectItems = [
    {
      title: 'Green-Thumbs',
      image: 'green-thumbs.png',
      deployedLink: 'https://tranquil-falls-18471.herokuapp.com/',
      repo: 'https://github.com/Archivary/green-thumbs/',
    },
    {
      title: 'Note Taker',
      image: 'note-taker.png',
      deployedLink: 'https://archanas-note-taker.herokuapp.com/',
      repo: 'https://github.com/archana-nagaraj/Note-Taker',
    },
    {
      title: 'Friendzone',
      image: 'friendzone.png',
      deployedLink: 'https://my-friendzone.herokuapp.com',
      repo: 'https://github.com/dev-dream-team/next-gen-solutions',
    },
    {
      title: 'mvc-tech-blog',
      image: 'mvc-tech-blog.png',
      deployedLink: 'https://stark-journey-61935.herokuapp.com/',
      repo: 'https://github.com/archana-nagaraj/mvc-tech-blog',
    },
    {
      title: 'Weather Dashboard',
      image: 'weather-dashboard_final.png',
      deployedLink: 'https://archana-nagaraj.github.io/Weather-Dashboard/',
      repo: 'https://github.com/archana-nagaraj/Weather-Dashboard',
    },
    {
      title: 'Budget Tracker',
      image: 'budget-tracker.png',
      deployedLink: 'https://archanas-budget-tracker.herokuapp.com/',
      repo: 'https://github.com/archana-nagaraj/budget-tracker',
    },
  ];
  return (
    <section
      id='project-section'
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
      }}
    >
      {projectItems.map((project) => {
        return (
          <Project
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            repo={project.repo}
            key={project.title}
          />
        );
      })}
    </section>
  );
}
export default Portfolio;
