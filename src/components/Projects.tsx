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
          <div className='flex flex-row justify-between'>
            {PersonalProjects.map((project, index) => (
              <Card item={project} key={index} />
            ))}
          </div>
        </Tab>
        <Tab label='Work Projects'>
          <div className='flex flex-row justify-between'>
            {WorkProjects.map((project, index) => (
              <Card item={project} key={index} />
            ))}
          </div>
        </Tab>
        <Tab label='Cool Projects'>
          <div className='flex flex-row justify-between'>
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
