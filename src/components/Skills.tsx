import React from 'react';
import Reveal from './Reveal';
import { skills } from '../data/content';

const Skills = () => {
  return (
    <div className='w-[90%] mx-auto my-4' id='skills'>
      <hr className='my-2 w-full mx-auto h-[2px] bg-secondary_text' />
      <Reveal>
        <h2 className='text-primary_yellow font-bold text-2xl py-5'>Skills</h2>
      </Reveal>
      <dl className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-6'>
        {skills.map(({ group, items }) => (
          <Reveal key={group} width='100%'>
            <div>
              <dt className='text-white font-bold mb-2'>{group}</dt>
              <dd>
                <ul className='flex flex-wrap gap-2'>
                  {items.map((item) => (
                    <li
                      key={item}
                      className='text-sm text-secondary_text border border-secondary_text rounded-full px-3 py-0.5'
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </div>
  );
};

export default Skills;
