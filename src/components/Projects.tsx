import React from 'react';
import { Tabs, Tab } from './Tabs';
import { WorkProjects, PersonalProjects } from './../data/projects';
import Card from './Card';
import Reveal from './Reveal';

const gridClasses =
  'grid grid-cols-1 md:grid-cols-2 gap-x-8 items-start justify-items-center';

const Projects = () => {
  return (
    <div id='projects'>
      <Tabs>
        <Tab label='Work Projects'>
          <p className='text-secondary_text text-center mb-8'>
            Client work built as part of the Zinzo team.
          </p>
          <div className={gridClasses}>
            {WorkProjects.map((project) => (
              <Reveal key={project.title} width='100%'>
                <Card item={project} />
              </Reveal>
            ))}
          </div>
        </Tab>
        <Tab label='Personal Projects'>
          <div className={gridClasses}>
            {PersonalProjects.map((project) => (
              <Reveal key={project.title} width='100%'>
                <Card item={project} />
              </Reveal>
            ))}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Projects;
