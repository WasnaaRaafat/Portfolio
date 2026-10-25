import React from 'react';
import SocialContacts from './SocialContacts';
import { contact, fullName, location } from '../data/content';

const Footer = () => {
  return (
    <div className='mt-8 py-2 text-center text-sm bottom-0' id='footer'>
      <hr className='my-2 mx-auto h-[2px] bg-secondary_text w-[90%]' />
      <p className='text-white font-bold mt-4'>{fullName}</p>
      <p className='text-secondary_text mb-1'>{location}</p>
      <p className='text-secondary_text mb-3'>
        <a
          href={`mailto:${contact.email}`}
          className='inline-block py-2 hover:underline'
        >
          {contact.email}
        </a>
        {' · '}
        <a
          href={contact.phoneHref}
          className='inline-block py-2 hover:underline'
        >
          {contact.phoneDisplay}
        </a>
      </p>
      <SocialContacts />
      <p className='text-white text-[12px]'>
        Copyright &copy; {new Date().getFullYear()} {fullName}, all rights
        reserved.
      </p>
    </div>
  );
};

export default Footer;
