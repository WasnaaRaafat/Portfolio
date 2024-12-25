import React from 'react';
import SocialContacts from './SocialContacts';
import Reveal from './Reveal';
const Hero = () => {
  return (
    <Reveal>
      <div className='md:h-[550px] lg:h-[700px] w-full flex flex-col md:flex-row justify-between items-center px-6 lg:px-20 pb-11 mt-10 md:mt-0'>
        <div className='text-center md:text-left'>
          <div className='max-w-[148px] min-h-[8px] mb-[40px] bg-secondary_text hidden md:block'></div>
          <Reveal width='100%'>
            <p className='text-[30px] md:text-[35px] lg:text-[55px] font-bold text-secondary_text'>
              I am Wasnaa, a <br />
              <span>Frontend developer</span>
            </p>
          </Reveal>
          <Reveal>
            <p className='text-white w-full md:w-[70%] mt-2'>
              I am a dedicated and passionate Frontend Developer. Over the
              years, I have honed my skills in a diverse array of technologies,
              with a particular emphasis on HTML, CSS, JavaScript, and
              frameworks such as React, Vue.js, and Next.js.
            </p>
          </Reveal>
          <div className='max-w-[700px] min-h-[2px] mt-[40px] bg-secondary_text'></div>
          <Reveal width='100%'>
            <div className='max-w-[700px] flex flex-row justify-center md:justify-between align-middle items-center'>
              <div>
                <span className='text-primary_yellow text-[55px] mr-3 inline-block'>
                  +3
                </span>
                <p className='font-extrabold text-white inline-block'>
                  Years of experience <br />
                  in web development
                </p>
              </div>
              <SocialContacts className='hidden lg:flex' />
            </div>
          </Reveal>
        </div>
        <img
          src='/Portfolio/assets/images/profilePic4.webp'
          alt='wasnaa'
          className='rounded-full hidden md:block w-[300px] h-[300px] xs:w-[300px] xs:h-[300px] md:w-[350px] md:h-[350px] lg:h-[400px] lg:w-[400px] my-4 md:my-0'
        />
      </div>
    </Reveal>
  );
};

export default Hero;
