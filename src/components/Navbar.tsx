import React, { useEffect, useState } from 'react';
import Reveal from './Reveal';
import { cvFileName, cvPath, fullName, navLinks } from '../data/content';

const linkClasses = 'hover:underline hover:text-secondary';
const cvClasses =
  'border border-primary_yellow py-3 px-6 hover:text-primary_yellow';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className='mt-8 text-white w-[90%] mx-auto'
      aria-label='Main navigation'
    >
      <div className='flex flex-row justify-between items-center'>
        <Reveal>
          <a
            href='#top'
            className='block text-2xl border rounded-full p-2 border-primary_yellow'
            aria-label={`${fullName}, back to top`}
            title={fullName}
          >
            WR
          </a>
        </Reveal>

        {/* Desktop links */}
        <Reveal>
          <ul className='hidden md:flex flex-row items-center gap-6 lg:gap-8'>
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className={linkClasses}>
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={cvPath}
                download={cvFileName}
                className={`block ${cvClasses}`}
              >
                My CV
              </a>
            </li>
          </ul>
        </Reveal>

        {/* Mobile menu button */}
        <button
          type='button'
          className='md:hidden p-2 border border-primary_yellow'
          aria-expanded={menuOpen}
          aria-controls='mobile-menu'
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            aria-hidden='true'
          >
            {menuOpen ? (
              <path d='M6 6l12 12M18 6L6 18' />
            ) : (
              <path d='M4 7h16M4 12h16M4 17h16' />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <ul
          id='mobile-menu'
          className='md:hidden mt-4 flex flex-col items-center gap-1 border-t border-b border-secondary_text py-4'
        >
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`block px-4 py-3 ${linkClasses}`}
                onClick={closeMenu}
              >
                {label}
              </a>
            </li>
          ))}
          <li className='mt-2'>
            <a
              href={cvPath}
              download={cvFileName}
              className={`block ${cvClasses}`}
              onClick={closeMenu}
            >
              My CV
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
