import React from 'react';
import SocialContacts from './SocialContacts';

const Footer = () => {
  return (
    <div
      className='h-[100px] mt-8 py-2 text-center text-sm bottom-0'
      id='footer'
    >
      <hr className='my-2 mx-auto h-[2px] bg-secondary_text w-[90%]' />
      <SocialContacts />
      <p className='text-white text-[12px]'>
        Copyright &copy; 2024, all rights reserved.
      </p>
    </div>
  );
};

export default Footer;
