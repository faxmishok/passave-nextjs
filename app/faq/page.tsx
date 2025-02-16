'use client';
import { useState } from 'react';
import FrequentlyAskedQuestions from './FAQs';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20'>
      <div className='max-w-xl sm:mx-auto lg:max-w-2xl'>
        <div className='mb-16 flex flex-col sm:text-center'>
          <a href='/' className='mb-6 sm:mx-auto'>
            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50'>
              <svg
                width='28.621px'
                height='28.621px'
                viewBox='0 0 28.621 28.621'
                fill='#651FFF'
              >
                <path
                  d='M14.311,0c-6.904,0-12.5,5.596-12.5,12.5c0,4.723,2.618,8.828,6.48,10.955l-0.147,5.166l5.898-3.635
                C14.131,24.988,14.22,25,14.311,25c6.904,0,12.5-5.596,12.5-12.5C26.811,5.596,21.215,0,14.311,0z M13.75,20.018
                c-1.116,0-1.876-0.822-1.876-1.918c0-1.119,0.779-1.92,1.876-1.92c1.14,0,1.878,0.801,1.898,1.92
                C15.649,19.193,14.891,20.018,13.75,20.018z M16.301,12.173c-0.779,0.865-1.096,1.686-1.074,2.638v0.377h-2.805L12.4,14.641
                c-0.063-1.074,0.295-2.173,1.246-3.31c0.673-0.803,1.223-1.477,1.223-2.194c0-0.737-0.487-1.222-1.542-1.263
                c-0.693,0-1.539,0.251-2.084,0.632l-0.718-2.301c0.759-0.442,2.022-0.861,3.52-0.861c2.785,0,4.048,1.538,4.048,3.289
                C18.094,10.233,17.104,11.287,16.301,12.173z'
                />
              </svg>
            </div>
          </a>
          <div className='max-w-xl sm:text-center md:mx-auto lg:max-w-2xl'>
            <h2 className='mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
              <span className='relative inline-block'>
                <svg
                  viewBox='0 0 52 24'
                  fill='currentColor'
                  className='absolute left-0 top-0 z-0 -ml-20 -mt-8 hidden w-32 text-blue-gray-100 sm:block lg:-ml-28 lg:-mt-10 lg:w-32'
                >
                  <defs>
                    <pattern
                      id='faq-pattern'
                      x='0'
                      y='0'
                      width='.135'
                      height='.30'
                    >
                      <circle cx='1' cy='1' r='.7'></circle>
                    </pattern>
                  </defs>
                  <rect fill='url(#faq-pattern)' width='52' height='24'></rect>
                </svg>
                <span className='relative'>Frequently&nbsp;</span>
              </span>
              Asked Questions
            </h2>
            <p className='text-base text-gray-700 md:text-lg'>
              In fact, there has not even been one person asking about this web
              application. I am answering a few questions below in case someone
              might wanna ask someday.
            </p>
          </div>
        </div>

        {/* FAQ Items */}
        <div className='space-y-4'>
          {FrequentlyAskedQuestions.map((faq, index) => (
            <div key={index} className='rounded border shadow-sm'>
              <button
                type='button'
                aria-label='Toggle FAQ'
                className='flex w-full items-center justify-between p-4 focus:outline-none'
                onClick={() => toggleFAQ(index)}
              >
                <p className='text-lg font-medium'>{faq.question}</p>
                <div className='flex h-8 w-8 items-center justify-center rounded-full border'>
                  <svg
                    viewBox='0 0 24 24'
                    className={`w-3 text-gray-600 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                  >
                    <polyline
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeMiterlimit='10'
                      points='2,7 12,17 22,7'
                      strokeLinejoin='round'
                    ></polyline>
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className='p-4 pt-0'>
                  <p className='text-gray-700'>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
