import React from 'react';
import Reveal from './Reveal';
const Navbar = () => {
  return (
    <section className='flex flex-col md:flex-row mt-8 justify-between items-center text-white w-[90%] mx-auto'>
      <Reveal>
        <p className='text-2xl border rounded-full p-2 border-primary_yellow'>
          WR
        </p>
      </Reveal>
      <Reveal>
        <ul className='flex flex-row justify-between items-center mt-8 md:mt-0'>
          <a
            href='#about'
            className='px-4 hover:underline hover:text-secondary '
          >
            <li>About</li>
          </a>
          <a
            href='#projects'
            className='px-4  hover:underline hover:text-secondary'
          >
            <li>Projects</li>
          </a>
          <a
            href='#skills'
            className='px-4 hover:underline hover:text-secondary'
          >
            <li>Skills & Experience</li>
          </a>
          <a
            href='#footer'
            className='px-4 hover:underline hover:text-secondary'
          >
            <li>Contacts</li>
          </a>
          <a
            href='/Portfolio/assets/cv/wasnaa_Resume.2024.pdf'
            download="wasnaa's Resume"
            target='_blank'
          >
            <button
              type='button'
              className='hidden border border-primary_yellow py-3 px-6 sm:block'
            >
              My Resume
            </button>
          </a>
        </ul>
      </Reveal>
    </section>
  );
};

export default Navbar;
