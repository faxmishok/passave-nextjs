'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Hero() {
  const router = useRouter();

  return (
    <section className='relative'>
      <Image
        src='https://res.cloudinary.com/faxmishok/image/upload/v1623614771/yusif-purple.png'
        alt='Hero Background'
        fill
        className='absolute inset-0 object-cover'
        priority
      />
      <div className='h-header relative bg-deep-purple-accent-700 bg-opacity-30'>
        {/* SVG Background */}
        <svg
          className='bottom-n1 absolute inset-x-0 text-white'
          viewBox='0 0 1160 163'
        >
          <path
            fill='currentColor'
            d='M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z'
          />
        </svg>

        {/* Hero Content */}
        <div className='relative mx-auto overflow-hidden px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20'>
          <div className='flex flex-col items-center justify-between xl:flex-row'>
            {/* Hero Text */}
            <div className='mb-12 w-full max-w-xl xl:mb-0 xl:w-7/12 xl:pr-16'>
              <h2 className='mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none'>
                Easy, secure way to store
                <br className='hidden md:block' />
                passwords for all your accounts!
              </h2>
              <p className='mb-4 max-w-xl text-base text-gray-200 md:text-lg'>
                Sign up to store all your passwords in hashes without having to
                think about security. Easy-to-use and free platform to store all
                your passwords!
              </p>
              <button
                onClick={() => router.push('/terms')}
                className='inline-flex items-center font-semibold tracking-wider text-teal-accent-400 transition-colors duration-200 hover:text-teal-accent-700'
              >
                Learn more
                <svg
                  className='ml-2 inline-block w-3'
                  fill='currentColor'
                  viewBox='0 0 12 12'
                >
                  <path d='M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z' />
                </svg>
              </button>
            </div>

            {/* Sign Up Form */}
            <div className='w-full max-w-xl xl:w-5/12 xl:px-8'>
              <div className='rounded bg-white p-7 shadow-2xl sm:p-10'>
                <h3 className='mb-4 text-xl font-semibold sm:mb-6 sm:text-center sm:text-2xl'>
                  Sign up to be secure!
                </h3>
                <form action='/sign-up' method='GET'>
                  <div className='flex justify-between'>
                    <div className='mb-1 flex flex-col justify-center sm:mb-2'>
                      <label
                        htmlFor='first_name'
                        className='mb-1 inline-block font-medium'
                      >
                        First name
                      </label>
                      <input
                        placeholder='Markus'
                        required
                        type='text'
                        className='mb-2 h-12 w-44 flex-grow appearance-none rounded border border-gray-300 bg-white px-4 shadow-sm transition duration-200 focus:border-deep-purple-accent-400 focus:shadow-outline focus:outline-none'
                        id='first_name'
                        name='first_name'
                      />
                    </div>
                    <div className='mb-1 flex flex-col justify-center sm:mb-2'>
                      <label
                        htmlFor='last_name'
                        className='mb-1 inline-block font-medium'
                      >
                        Last name
                      </label>
                      <input
                        placeholder='Persson'
                        required
                        type='text'
                        className='mb-2 h-12 w-44 flex-grow appearance-none rounded border border-gray-300 bg-white px-4 shadow-sm transition duration-200 focus:border-deep-purple-accent-400 focus:shadow-outline focus:outline-none'
                        id='last_name'
                        name='last_name'
                      />
                    </div>
                  </div>
                  <div className='mb-1 sm:mb-2'>
                    <label
                      htmlFor='email'
                      className='mb-1 inline-block font-medium'
                    >
                      E-mail Address
                    </label>
                    <input
                      placeholder='notch@mojang.com'
                      required
                      type='text'
                      className='mb-2 h-12 w-full flex-grow appearance-none rounded border border-gray-300 bg-white px-4 shadow-sm transition duration-200 focus:border-deep-purple-accent-400 focus:shadow-outline focus:outline-none'
                      id='email'
                      name='email'
                    />
                  </div>
                  <div className='mb-1 sm:mb-2'>
                    <label
                      htmlFor='username'
                      className='mb-1 inline-block font-medium'
                    >
                      Username
                    </label>
                    <input
                      placeholder='thenotorious'
                      required
                      type='text'
                      className='mb-2 h-12 w-full flex-grow appearance-none rounded border border-gray-300 bg-white px-4 shadow-sm transition duration-200 focus:border-deep-purple-accent-400 focus:shadow-outline focus:outline-none'
                      id='username'
                      name='username'
                    />
                  </div>
                  <div className='mb-2 mt-4 sm:mb-4'>
                    <input
                      type='submit'
                      name='submit'
                      value='Sign Up'
                      className='inline-flex h-12 w-full cursor-pointer items-center justify-center rounded bg-deep-purple-accent-400 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
                    />
                  </div>
                  <p className='text-xs text-gray-600 sm:text-sm'>
                    We respect your privacy. Delete account anytime.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
