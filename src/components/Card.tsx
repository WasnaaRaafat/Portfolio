import { ItemProps } from '@/types/Card.types';
import React from 'react';

const Card = (props: ItemProps) => {
  const { title, image, demo_url, github_url } = props.item;
  return (
    <div className='w-[280px] h-[300px] rounded-md bg-white overflow-hidden grid-cols-4'>
      <figure>
        <img src={image} alt='' className='w-[280px] h-[200px]' />
      </figure>
      <h1 className='p-2'>{title}</h1>
      <div className='pl-2 mb-4'>
        {github_url && (
          <a href={github_url} target='_blank' rel="noreferrer">
            <button className='rounded-lg bg-primary text-white p-3 mt-2 font-bold hover:text-primary hover:bg-secondary mr-1'>
              Github
            </button>
          </a>
        )}
        <a href={demo_url} target='_blank' rel="noreferrer">
          <button className='rounded-lg bg-primary text-white p-3 mt-2 font-bold hover:text-primary hover:bg-secondary'>
            Demo
          </button>
        </a>
      </div>
    </div>
  );
};

export default Card;
