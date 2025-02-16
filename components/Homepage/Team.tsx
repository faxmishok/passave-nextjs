'use client';

import Image from 'next/image';
import { siteMetadata } from '@/constants/metadata';

const Team = () => {
  return (
    <div
      id='about-us'
      className='mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20'
    >
      <div className='rounded p-8 shadow-xl sm:p-16'>
        <div className='flex flex-col lg:flex-row'>
          <div className='mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl'>
            <div>
              <p className='mb-4 inline-block rounded-full bg-teal-accent-400 px-3 py-px text-xs font-semibold uppercase tracking-wider text-teal-900'>
                Core Team
              </p>
            </div>
            <h2 className='mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
              <span className='relative inline-block'>
                <svg
                  viewBox='0 0 52 24'
                  fill='currentColor'
                  className='absolute left-0 top-0 z-0 -ml-20 -mt-8 hidden w-32 text-blue-gray-100 sm:block lg:-ml-28 lg:-mt-10 lg:w-32'
                >
                  <defs>
                    <pattern
                      id='1d4040f3-9f3e-4ac7-b117-7d4009658ced'
                      x='0'
                      y='0'
                      width='.135'
                      height='.30'
                    >
                      <circle cx='1' cy='1' r='.7'></circle>
                    </pattern>
                  </defs>
                  <rect
                    fill='url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)'
                    width='52'
                    height='24'
                  ></rect>
                </svg>
                <span className='relative'>Welcome</span>
              </span>
              our talented team of professionals
            </h2>
            <p className='text-base text-gray-700 md:text-lg'>
              Sorry but this web application has only one developer, so I might
              as just delete this part. Cheer up, beautiful people. Just sign up
              above and use the application for your own good.
            </p>
          </div>
          <div className='w-64'>
            <div>
              <div className='relative transform overflow-hidden rounded shadow-lg transition duration-300 hover:shadow-2xl lg:hover:-translate-y-2'>
                <Image
                  className='h-56 w-full object-cover md:h-64 xl:h-80'
                  src='https://res.cloudinary.com/faxmishok/image/upload/v1739245934/fahmin-winter.jpg'
                  alt='Person'
                  width={256}
                  height={320}
                />
                <div className='absolute inset-0 flex flex-col justify-center bg-black bg-opacity-75 px-5 py-4 text-center opacity-0 transition-opacity duration-300 hover:opacity-100'>
                  <p className='mb-1 text-lg font-bold text-gray-100'>
                    Fahmin Guliyev
                  </p>
                  <p className='mb-4 text-xs text-gray-100'>Developer</p>
                  <p className='mb-4 text-xs tracking-wide text-gray-400'>
                    The one and only developer, designer, and product manager of
                    this web application.
                  </p>
                  <div className='flex items-center justify-center space-x-3'>
                    <a
                      href={siteMetadata.twitter}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-white transition-colors duration-300 hover:text-teal-accent-400'
                    >
                      <svg
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='h-5'
                      >
                        <path d='M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6C22.5,6.4,23.3,5.5,24,4.6z'></path>
                      </svg>
                    </a>
                    <a
                      href={siteMetadata.facebook}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-white transition-colors duration-300 hover:text-teal-accent-400'
                    >
                      <svg
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='h-5'
                      >
                        <path d='M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2V2C24,0.895,23.105,0,22,0z'></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
