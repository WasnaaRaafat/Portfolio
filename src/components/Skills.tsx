import React from 'react';

const Skills = () => {
  return (
    <div className='w-[80%] mx-auto my-4' id='skills'>
      <hr className='py-2 mx-auto' />
      {/* Technical skills */}
      <div>
        <h1 className='text-white font-bold text-2xl py-5'>
          Technical Proficiency
        </h1>
        <p className='text-secondary_text mb-5'>
          My technical arsenal includes a robust understanding of modern web
          technologies and development tools:
        </p>
        <ul className='list-disc text-white pl-8'>
          <li className='py-4'>
            <strong>Frontend Technologies: </strong>HTML, CSS, SASS, JavaScript,
            React, Vue.js, Next.js, TypeScript.
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
      </div>
    </div>
  );
};

export default Skills;
