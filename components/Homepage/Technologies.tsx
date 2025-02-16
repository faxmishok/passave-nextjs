import React from 'react';
import technologyIcons from '@/constants/TechnologyIcons';

const Technologies = () => {
  return (
    <div
      id='technologies'
      className='relative mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20'
    >
      <div className='absolute inset-x-0 top-0 hidden items-center justify-center overflow-hidden md:inset-y-0 md:flex'>
        <svg
          viewBox='0 0 88 88'
          className='w-full max-w-screen-xl text-indigo-100'
        >
          <circle fill='currentColor' cx='44' cy='44' r='15.5'></circle>
          <circle
            fillOpacity='0.2'
            fill='currentColor'
            cx='44'
            cy='44'
            r='44'
          ></circle>
          <circle
            fillOpacity='0.2'
            fill='currentColor'
            cx='44'
            cy='44'
            r='37.5'
          ></circle>
          <circle
            fillOpacity='0.3'
            fill='currentColor'
            cx='44'
            cy='44'
            r='29.5'
          ></circle>
          <circle
            fillOpacity='0.3'
            fill='currentColor'
            cx='44'
            cy='44'
            r='22.5'
          ></circle>
        </svg>
      </div>

      <div className='flex flex-col'>
        <div className='group z-0 mb-5 flex flex-col items-center justify-center overflow-hidden rounded bg-white text-center shadow-xl transition-shadow duration-200 hover:shadow-2xl'>
          <div className='m-5 filter transition duration-300'>
            <h2 className='my-3 text-3xl font-bold tracking-tight text-gray-800 sm:leading-none'>
              Used&nbsp;
              <span className='relative text-deep-purple-accent-400'>
                Technologies &amp; Frameworks
              </span>
            </h2>
          </div>
        </div>

        <div className='relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
          {technologyIcons.map((tech, index) => (
            <div
              key={index}
              className='group flex flex-col items-center justify-center overflow-hidden rounded bg-white text-center shadow-xl transition-shadow duration-200 hover:shadow-2xl'
            >
              <div className='m-5 opacity-60 grayscale filter transition duration-300 hover:opacity-100 hover:grayscale-0'>
                {tech.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
