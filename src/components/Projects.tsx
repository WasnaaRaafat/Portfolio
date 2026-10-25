import React from 'react';
import { Tabs, Tab } from './Tabs';
import {
  WorkProjects,
  PersonalProjects,
  EarlyProjects,
} from './../data/projects';
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
          <details className='mt-4'>
            <summary className='cursor-pointer text-primary_yellow font-bold text-center hover:underline'>
              Early work: HTML/CSS exercises
            </summary>
            <div className={`${gridClasses} mt-8`}>
              {EarlyProjects.map((project) => (
                <Card key={project.title} item={project} />
              ))}
            </div>
          </details>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Projects;
