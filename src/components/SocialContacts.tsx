import React from 'react';

const SocialContacts = ({ className }: { className?: string }) => {
  return (
    <figure
      className={`flex flex-row justify-center items-center pb-2 ${className}`}
    >
      <a href='mailto:wasnaaraafat@gmail.com' className='px-2'>
        <img
          src='/Portfolio/assets/icons/mail.svg'
          alt='mail-icon'
          width={20}
          height={20}
        />
      </a>
      <a href='tel:+9647800903465' className='px-2'>
        <img
          src='/Portfolio/assets/icons/telephone.svg'
          alt='telephone-icon'
          width={20}
          height={20}
        />
      </a>
      <a
        href='https://www.linkedin.com/in/wasnaa/'
        className='px-2'
        target='_blank'
        rel='noreferrer'
      >
        <img
          src='/Portfolio/assets/icons/linkedin.svg'
          alt='linkedin-icon'
          width={25}
          height={25}
        />
      </a>
      <a
        href='https://github.com/WasnaaRaafat'
        className='px-2'
        target='_blank'
        rel='noreferrer'
      >
        <img
          src='/Portfolio/assets/icons/github.svg'
          alt='github-icon'
          width={25}
          height={25}
        />
      </a>
    </figure>
  );
};

export default SocialContacts;
