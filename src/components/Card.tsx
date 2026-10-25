import { ItemProps } from '../types/Card.types';
import React from 'react';
import RevealWithColor from './RevealWithColor';

const Card = (props: ItemProps) => {
  const {
    title,
    image,
    liveUrl,
    repoUrl,
    role,
    stack,
    summary,
    problem,
    highlights,
    result,
  } = props.item;
  const hasCaseStudy = Boolean(problem || highlights?.length || result);

  return (
    <article className='w-full max-w-[500px] mx-auto rounded-md overflow-hidden mb-10'>
      <figure>
        {image ? (
          <img
            src={image}
            alt={`Screenshot of the ${title} website`}
            width={800}
            height={450}
            loading='lazy'
            className='rounded-lg w-full h-auto aspect-video object-cover object-top mb-6'
          />
        ) : (
          <div className='rounded-lg w-full aspect-video mb-6 flex items-center justify-center border-2 border-dashed border-secondary_text text-secondary_text'>
            {'{TODO: add image}'}
          </div>
        )}
      </figure>
      <RevealWithColor width='100%'>
        <div className='flex flex-row items-center justify-between gap-2'>
          <h3 className='font-bold text-white text-xl'>{title}</h3>
          <hr className='mx-2 h-[2px] bg-secondary_text flex-1' />
          {repoUrl && (
            <a
              href={repoUrl}
              className='px-2 shrink-0'
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`View ${title} source on GitHub`}
            >
              <img
                src='/Portfolio/assets/icons/github.svg'
                alt=''
                width={40}
                height={40}
              />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              className='px-2 shrink-0'
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`View ${title} live site`}
            >
              <img
                src='/Portfolio/assets/icons/rightArrow.svg'
                alt=''
                width={40}
                height={40}
              />
            </a>
          )}
        </div>
      </RevealWithColor>
      {role && <p className='text-secondary_text mt-2'>{role}</p>}
      {stack && (
        <ul className='flex flex-wrap gap-2 mt-3' aria-label='Tech stack'>
          {stack.map((tech) => (
            <li
              key={tech}
              className='text-sm text-primary_yellow border border-primary_yellow rounded-full px-3 py-0.5'
            >
              {tech}
            </li>
          ))}
        </ul>
      )}
      {summary && <p className='text-white mt-4'>{summary}</p>}
      {hasCaseStudy && (
        <details className='mt-4 text-white'>
          <summary className='cursor-pointer text-primary_yellow font-bold hover:underline'>
            Read case study
          </summary>
          <div className='mt-3 space-y-3'>
            {problem && (
              <p>
                <strong>Problem: </strong>
                {problem}
              </p>
            )}
            {highlights && highlights.length > 0 && (
              <div>
                <strong>What I built:</strong>
                <ul className='list-disc pl-5 mt-1 space-y-1'>
                  {highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            )}
            {result && (
              <p>
                <strong>Result: </strong>
                {result}
              </p>
            )}
          </div>
        </details>
      )}
    </article>
  );
};

export default Card;
