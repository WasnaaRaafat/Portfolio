import React from 'react';
import Reveal from './Reveal';

const Skills = () => {
  return (
    <div className='w-[90%] mx-auto my-4' id='skills'>
      <hr className='my-2 w-full mx-auto h-[2px] bg-secondary_text' />
      {/* Technical skills */}
      <div>
        <Reveal>
          <h1 className='text-primary_yellow font-bold text-2xl py-5'>
            Technical Proficiency
          </h1>
        </Reveal>
        <Reveal>
          <p className='text-secondary_text mb-5'>
            My technical arsenal includes a robust understanding of modern web
            technologies and development tools, such as:
          </p>
        </Reveal>
        <Reveal>
          <ul className='list-disc text-white pl-7 md:pl-14'>
            <li className='py-4'>
              <strong>Frontend Technologies: </strong>HTML, CSS, SASS,
              JavaScript, React, Vue.js, Next.js, TypeScript.
            </li>
            <li className='py-4'>
              <strong>Version Control: </strong>Git and GitHub.
            </li>
            <li className='py-4'>
              <strong>E-commerce Platforms: </strong>Experienced with Shopify
              Liquid
            </li>
            <li className='py-4'>
              <strong>Graphic Design Tools: </strong> Adobe Photoshop and Figma.
            </li>
          </ul>
        </Reveal>
      </div>
    </div>
  );
};

export default Skills;
