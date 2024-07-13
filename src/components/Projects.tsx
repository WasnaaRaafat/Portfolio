import React from 'react';
import { Tabs, Tab } from './Tabs';
import {
  CoolProjects,
  WorkProjects,
  PersonalProjects,
} from './../data/projects';
import Card from './Card';

const Projects = () => {
  return (
    <div id='projects'>
      <Tabs>
        <Tab label='Personal Projects' >
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 place-items-center justify-items-center'>
            {PersonalProjects.map((project, index) => (
              <Card item={project} key={index} />
            ))}
          </div>
        </Tab>
        <Tab label='Work Projects'>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 justify-items-center place-items-center justify-center'>
            {WorkProjects.map((project, index) => (
              <Card item={project} key={index} />
            ))}
          </div>
        </Tab>
        <Tab label='Cool Projects'>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 justify-items-center place-items-center justify-center'>
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
