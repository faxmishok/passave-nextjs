'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavItem from '@/components/Navbar/NavItem';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className='mx-auto px-4 py-3 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8'>
      <div className='relative flex items-center justify-between'>
        {/* Logo */}
        <Link
          href='/'
          aria-label='Passave'
          title='Passave'
          className='inline-flex items-center'
        >
          <Image
            className='h-16 object-contain'
            src='/ps-logo.svg'
            alt='Passave'
            width={64}
            height={64}
          />
          <span className='ml-2 text-xl font-bold uppercase tracking-wide text-gray-800'>
            Passave
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden space-x-8 lg:flex'>
          <NavItem href='/#product' label='Product' />
          <NavItem href='/#technologies' label='Technologies' />
          <NavItem href='/#about-us' label='About us' />
          <NavItem href='/#contact' label='Contact' />
        </nav>

        {/* Desktop Actions */}
        <div className='hidden items-center space-x-8 lg:flex'>
          <NavItem href='/sign-in' label='Sign in' />
          <Link
            href='/sign-up'
            className='bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline inline-flex h-12 items-center justify-center rounded px-6 font-medium tracking-wide text-white shadow-md transition duration-200 focus:outline-none'
            aria-label='Sign up'
            title='Sign up'
          >
            Sign up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label='Open Menu'
          title='Open Menu'
          className='focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50 -mr-1 rounded p-2 transition duration-200 focus:outline-none lg:hidden'
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
            <path
              fill='currentColor'
              d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
            />
            <path
              fill='currentColor'
              d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
            />
            <path
              fill='currentColor'
              d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
            />
          </svg>
        </button>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className='absolute left-0 top-0 w-full'>
            <div className='rounded border bg-white p-5 shadow-sm'>
              <div className='mb-4 flex items-center justify-between'>
                {/* Mobile Logo */}
                <Link
                  href='/'
                  aria-label='Passave'
                  title='Passave'
                  className='inline-flex items-center'
                >
                  <Image
                    className='h-16 object-contain'
                    src='/ps-logo.svg'
                    alt='Passave'
                    width={64}
                    height={64}
                  />
                  <span className='ml-2 text-xl font-bold uppercase tracking-wide text-gray-800'>
                    Passave
                  </span>
                </Link>

                {/* Close Menu Button */}
                <button
                  aria-label='Close Menu'
                  title='Close Menu'
                  className='focus:shadow-outline -mr-2 -mt-2 rounded p-2 transition duration-200 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                    <path
                      fill='currentColor'
                      d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                    />
                  </svg>
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav>
                <ul className='space-y-4'>
                  <NavItem href='/#product' label='Product' />
                  <NavItem href='/#technologies' label='Technologies' />
                  <NavItem href='/#about-us' label='About us' />
                  <NavItem href='/#contact' label='Contact' />
                  <li>
                    <Link
                      href='/sign-up'
                      className='bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline inline-flex h-12 w-full items-center justify-center rounded px-6 font-medium tracking-wide text-white shadow-md transition duration-200 focus:outline-none'
                      aria-label='Sign up'
                      title='Sign up'
                    >
                      Sign up
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
