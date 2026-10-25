import React from 'react';
import SocialContacts from './SocialContacts';
import Reveal from './Reveal';
import {
  contact,
  cvFileName,
  cvPath,
  fullName,
  hero,
  location,
} from '../data/content';

const Hero = () => {
  return (
    <div className='md:min-h-[550px] lg:min-h-[700px] w-full flex flex-col md:flex-row justify-between items-center px-6 lg:px-20 py-11 mt-10 md:mt-0'>
      <div className='text-center md:text-left'>
        <div className='max-w-[148px] min-h-[8px] mb-[40px] bg-secondary_text hidden md:block'></div>
        <p className='text-white font-bold text-lg mb-2'>
          {fullName}
          <span className='font-normal text-secondary_text'>
            {' · '}
            {location}
          </span>
        </p>
        <Reveal width='100%'>
          <h1 className='text-[30px] md:text-[35px] lg:text-[55px] font-bold text-secondary_text'>
            {hero.greeting} <br />
            <span>{hero.role}</span>
          </h1>
        </Reveal>
        <Reveal width='100%'>
          <p className='text-primary_yellow font-bold text-lg mt-2'>
            {hero.tagline}
          </p>
        </Reveal>
        <Reveal>
          <p className='text-white w-full md:w-[70%] mt-4'>{hero.intro}</p>
        </Reveal>
        <div className='max-w-[700px] min-h-[2px] mt-[40px] bg-secondary_text'></div>
        <Reveal width='100%'>
          <div className='max-w-[700px] flex flex-row flex-wrap justify-center md:justify-between align-middle items-center gap-x-8'>
            <div className='flex flex-row flex-wrap justify-center gap-x-8'>
              {hero.stats.map((stat) => (
                <div key={stat.value + stat.label[0]}>
                  <span className='text-primary_yellow text-[55px] mr-3 inline-block'>
                    {stat.value}
                  </span>
                  <p className='font-extrabold text-white inline-block text-left'>
                    {stat.label[0]} <br />
                    {stat.label[1]}
                  </p>
                </div>
              ))}
            </div>
            <SocialContacts className='hidden lg:flex' />
          </div>
        </Reveal>
        <Reveal width='100%'>
          <div className='mt-6'>
            <p className='text-secondary_text mb-4'>{hero.callToAction}</p>
            <div className='flex flex-row flex-wrap justify-center md:justify-start gap-4'>
              <a
                href={cvPath}
                download={cvFileName}
                className='bg-primary_yellow text-primary font-bold py-3 px-6 hover:opacity-90'
              >
                Download CV
              </a>
              <a
                href={`mailto:${contact.email}`}
                className='border border-primary_yellow text-white py-3 px-6 hover:text-primary_yellow'
              >
                Get in touch
              </a>
            </div>
          </div>
        </Reveal>
      </div>
      <img
        src='/Portfolio/assets/images/profilePic4.webp'
        alt={fullName}
        className='rounded-full hidden md:block shrink-0 object-cover w-[300px] h-[300px] xs:w-[300px] xs:h-[300px] md:w-[350px] md:h-[350px] lg:h-[400px] lg:w-[400px] my-4 md:my-0'
      />
    </div>
  );
};

export default Hero;
