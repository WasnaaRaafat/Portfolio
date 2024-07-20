import React from 'react';
import Reveal from './Reveal';

const About = () => {
  return (
    <div className='w-[90%] mx-auto my-4' id='about'>
      <hr className='my-2 w-full mx-auto h-[2px] bg-secondary_text' />
      <div className='mx-auto'>
        <Reveal>
          <h1 className='font-bold text-2xl py-4 text-primary_yellow'>
            Education
          </h1>
        </Reveal>
        <Reveal>
          <p className='text-secondary_text'>Univercity of babylon 2015-2019</p>
        </Reveal>
      </div>
    </div>
  );
};

export default About;
