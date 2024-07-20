import React from 'react';
import { Tabs, Tab } from './Tabs';
import {
  CoolProjects,
  WorkProjects,
  PersonalProjects,
} from './../data/projects';
import Card from './Card';
import Reveal from './Reveal';

const Projects = () => {
  return (
    <div id='projects'>
      <Tabs>
        <Tab label='Personal Projects'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center justify-items-center'>
            {PersonalProjects.map((project, index) => (
              <Reveal key={index}>
                <Card item={project} />
              </Reveal>
            ))}
          </div>
        </Tab>
        <Tab label='Work Projects'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center justify-items-center'>
            {WorkProjects.map((project, index) => (
              <Card item={project} key={index} />
            ))}
          </div>
        </Tab>
        <Tab label='Cool Projects'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center justify-items-center'>
            {CoolProjects.map((project, index) => (
              <Card item={project} key={index} />
            ))}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Projects;
