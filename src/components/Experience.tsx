import React from 'react';
import Reveal from './Reveal';
import { experience } from '../data/content';

const Experience = () => {
  return (
    <div className='w-[90%] mx-auto my-4' id='experience'>
      <hr className='my-2 w-full mx-auto h-[2px] bg-secondary_text' />
      <Reveal>
        <h2 className='text-primary_yellow font-bold text-2xl py-5'>
          Experience
        </h2>
      </Reveal>
      <ol className='border-l-2 border-secondary_text ml-2'>
        {experience.map((job) => (
          <li
            key={job.company + job.period}
            className='relative pl-6 md:pl-10 pb-6'
          >
            <span
              className='absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary_yellow'
              aria-hidden='true'
            />
            <Reveal width='100%'>
              <div className='flex flex-col md:flex-row md:justify-between md:items-baseline'>
                <h3 className='text-white font-bold text-xl'>
                  {job.role}, {job.company}
                </h3>
                <p className='text-secondary_text'>{job.period}</p>
              </div>
            </Reveal>
            <p className='text-secondary_text mb-4'>{job.companyNote}</p>
            <ul className='list-disc text-white pl-5 md:pl-6 space-y-3'>
              {job.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Experience;
