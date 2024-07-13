import React from 'react';

const Navbar = () => {
  return (
    <section className='flex flex-col md:flex-row mt-8 md:mt-3 justify-between items-center px-14font-bold text-white w-[90%] mx-auto'>
      <p className='text-2xl border rounded-full p-2 border-secondary'>WR</p>
      <ul className='flex flex-row justify-between items-center mt-8 md:mt-0'>
        <a href='#about' className='px-4 hover:underline hover:text-secondary '>
          <li>About</li>
        </a>
        <a
          href='#projects'
          className='px-4  hover:underline hover:text-secondary'
        >
          <li>Projects</li>
        </a>
        <a href='#skills' className='px-4 hover:underline hover:text-secondary'>
          <li>Skills & Experience</li>
        </a>
        <a href='#footer' className='px-4 hover:underline hover:text-secondary'>
          <li>Contacts</li>
        </a>
      </ul>
    </section>
  );
};

export default Navbar;
