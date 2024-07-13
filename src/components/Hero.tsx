import React from 'react';
const Hero = () => {
  return (
    <div className='h-[600px] w-full flex flex-row justify-evenly items-center'>
      <div className='text-center'>
        <p className='text-3xl font-bold mb-4 text-secondary_text'>
          Hello I am Wasnaa Al-Rubaye <br />
          <span className='mt-8'> Frontend developer</span>
        </p>
        <a href='#projects'>
          <button className='rounded-lg bg-secondary p-3 mt-2 font-bold hover:text-primary text-white'>
            Cool project below
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
