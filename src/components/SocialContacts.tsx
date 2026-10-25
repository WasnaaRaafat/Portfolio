import React from 'react';
import { contact, fullName } from '../data/content';

const SocialContacts = ({ className }: { className?: string }) => {
  return (
    <figure
      className={`flex flex-row justify-center items-center pb-2 ${className}`}
    >
      <a
        href={`mailto:${contact.email}`}
        className='px-2'
        aria-label={`Email ${fullName}`}
      >
        <img
          src='/Portfolio/assets/icons/mail.svg'
          alt=''
          width={20}
          height={20}
        />
      </a>
      <a
        href={contact.phoneHref}
        className='px-2'
        aria-label={`Call ${fullName} on ${contact.phoneDisplay}`}
      >
        <img
          src='/Portfolio/assets/icons/telephone.svg'
          alt=''
          width={20}
          height={20}
        />
      </a>
      <a
        href={contact.linkedin}
        className='px-2'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='LinkedIn profile'
      >
        <img
          src='/Portfolio/assets/icons/linkedin.svg'
          alt=''
          width={25}
          height={25}
        />
      </a>
      <a
        href={contact.github}
        className='px-2'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='GitHub profile'
      >
        <img
          src='/Portfolio/assets/icons/github.svg'
          alt=''
          width={25}
          height={25}
        />
      </a>
    </figure>
  );
};

export default SocialContacts;
