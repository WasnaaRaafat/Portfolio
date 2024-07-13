import { ItemProps } from '@/types/Card.types';
import React from 'react';

const Card = (props: ItemProps) => {
  const { title, image, demo_url, github_url } = props.item;
  return (
    <div className='w-[300px]  md:w-[350px] h-[370px] rounded-md bg-white overflow-hidden grid-cols-4 mb-4'>
      <figure>
        <img src={image} alt='' className='w-full h-[200px] object-cover border-b border-b-1 border-gray-200 mb-6 ease-linear transition-transform hover:scale-125' />
      </figure>
      <h1 className='p-2 font-bold text-center text-primary text-xl mb-3'>{title}</h1>
      <div className='mb-4 flex items-center justify-evenly'>
        {github_url && (
          <a href={github_url} target='_blank' rel="noreferrer">
            <button className='rounded-lg bg-primary text-white px-10 py-3 mt-2 font-bold hover:text-primary hover:bg-secondary'>
              Github
            </button>
          </a>
        )}
        <a href={demo_url} target='_blank' rel="noreferrer">
          <button className='rounded-lg bg-primary text-white px-10 py-3 mt-2 font-bold hover:text-primary hover:bg-secondary'>
            Demo
          </button>
        </a>
      </div>
    </div>
  );
};

export default Card;
