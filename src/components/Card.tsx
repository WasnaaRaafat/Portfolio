import { ItemProps } from '@/types/Card.types';
import React from 'react';
import RevealWithColor from './RevealWithColor';

const Card = (props: ItemProps) => {
  const { title, image, demo_url, github_url, text } = props.item;
  return (
    <div className='w-[300px] lg:w-[370px] xl:w-[500px] h-[600px] sm:h-[500px] rounded-md overflow-hidden grid-cols-4 mb-10'>
      <figure>
        <img
          src={image}
          alt='card'
          className='rounded-lg w-full h-[350px] object-cover mb-6'
        />
      </figure>
      <RevealWithColor width='100%'>
        <div className='flex flex-row align-middle items-center justify-between'>
          <h1 className='font-bold text-center text-white text-xl mb-3'>
            {title}
          </h1>
          <hr className='my-2 mx-auto h-[2px] bg-secondary_text w-[50%]' />
          {github_url && (
            <a
              href={github_url}
              className='px-2'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src='/Portfolio/assets/icons/github.svg'
                alt='github-icon'
                width={40}
                height={40}
              />
            </a>
          )}
          {demo_url && (
            <a
              href={demo_url}
              className='px-2'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src='/Portfolio/assets/icons/rightArrow.svg'
                alt='arrow-icon'
                width={40}
                height={40}
              />
            </a>
          )}
        </div>
      </RevealWithColor>
      <RevealWithColor>
        <p className='text-white mt-4'>{text}</p>
      </RevealWithColor>
    </div>
  );
};

export default Card;
