import React from 'react';
import Reveal from './Reveal';
import { education } from '../data/content';

const About = () => {
  return (
    <div className='w-[90%] mx-auto my-4' id='education'>
      <hr className='my-2 w-full mx-auto h-[2px] bg-secondary_text' />
      <div className='mx-auto'>
        <Reveal>
          <h2 className='font-bold text-2xl py-4 text-primary_yellow'>
            Education
          </h2>
        </Reveal>
        <ul className='space-y-4'>
          {education.map((item) => (
            <li key={item.degree}>
              <Reveal width='100%'>
                <div className='flex flex-col md:flex-row md:justify-between md:items-baseline'>
                  <p className='text-white'>
                    <strong>{item.degree}</strong>, {item.institution}
                  </p>
                  <p className='text-secondary_text'>
                    {item.period} · {item.note}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
