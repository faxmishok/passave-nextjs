'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function SignInPage() {
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<string | null>(null);
  const [googleOAuthURL, setGoogleOAuthURL] = useState<string | null>(null);

  useEffect(() => {
    // Fetch OAuth2 login URL
    fetch('http://localhost:5000/auth/google/url')
      .then((res) => res.text())
      .then((data) => setGoogleOAuthURL(data));
  }, []);

  return (
    <div>
      <div id='content'>
        {/* Success / Error Messages */}
        {message && (
          <div
            id='warning-block'
            className={`${
              messageType === 'green' ? 'bg-green-500' : 'bg-red-500'
            } p-3 text-center text-white`}
          >
            <p className='font-medium'>{message}</p>
            <button
              type='button'
              className='absolute right-4 top-2 text-white'
              onClick={() => setMessage(null)}
            >
              ✖
            </button>
          </div>
        )}

        {/* Sign In Form */}
        <div className='overflow-hidden'>
          <div className='mx-auto px-4 py-12 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-12'>
            <div className='flex flex-col items-center justify-center xl:flex-row'>
              <div className='w-full max-w-xl xl:w-5/12 xl:px-8'>
                <div className='relative rounded bg-white p-7 shadow-2xl sm:p-10'>
                  <h3 className='mb-4 text-xl font-semibold sm:mb-6 sm:text-center sm:text-2xl'>
                    Log into your account
                  </h3>
                  <form action='/auth/login' method='POST'>
                    <div className='mb-4'>
                      <label
                        htmlFor='email'
                        className='mb-1 inline-block font-medium'
                      >
                        E-mail
                      </label>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='krazyhacker88@mail.ru'
                        required
                        className='mb-2 h-12 w-full flex-grow rounded border border-gray-300 px-4 shadow-sm focus:border-deep-purple-accent-400 focus:outline-none'
                      />
                    </div>

                    <div className='mb-4'>
                      <label
                        htmlFor='password'
                        className='mb-1 inline-block font-medium'
                      >
                        Master Password
                      </label>
                      <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='*********'
                        required
                        className='mb-2 h-12 w-full flex-grow rounded border border-gray-300 px-4 shadow-sm focus:border-deep-purple-accent-400 focus:outline-none'
                      />
                    </div>

                    <div className='mb-4'>
                      <label
                        htmlFor='secret_token'
                        className='mb-1 inline-block font-medium'
                      >
                        Secret Key
                      </label>
                      <input
                        type='number'
                        id='secret_token'
                        name='secret_token'
                        placeholder='012345'
                        required
                        className='mb-2 h-12 w-full flex-grow rounded border border-gray-300 px-4 shadow-sm focus:border-deep-purple-accent-400 focus:outline-none'
                      />
                      <p className='self-end text-xs text-gray-600 sm:text-sm'>
                        <Link
                          href='/forgot'
                          className='underline transition-colors duration-300 hover:text-deep-purple-accent-400'
                        >
                          Forgot password?
                        </Link>
                      </p>
                    </div>

                    <div className='mb-2 mt-4 sm:mb-4'>
                      <button
                        type='submit'
                        className='h-12 w-full rounded bg-deep-purple-accent-400 px-6 font-medium text-white shadow-md transition duration-200 hover:bg-deep-purple-accent-700 focus:outline-none'
                      >
                        Sign in
                      </button>
                    </div>

                    <div className='mb-4 flex w-full items-center'>
                      <hr className='flex-1 border-gray-300' />
                      <div className='px-3 text-xs text-gray-500 sm:text-sm'>
                        or
                      </div>
                      <hr className='flex-1 border-gray-300' />
                    </div>

                    <div className='mb-2 mt-4 sm:mb-4'>
                      {googleOAuthURL ? (
                        <a
                          href={googleOAuthURL}
                          className='inline-flex h-12 w-full items-center justify-center rounded border px-6 font-medium tracking-wide shadow-md transition-colors duration-300 hover:bg-gray-100'
                        >
                          Sign in with Google
                        </a>
                      ) : (
                        <button
                          disabled
                          className='inline-flex h-12 w-full cursor-not-allowed items-center justify-center rounded bg-gray-300 px-6 font-medium tracking-wide text-gray-600 shadow-md'
                        >
                          Loading...
                        </button>
                      )}
                    </div>

                    <p className='text-xs text-gray-600 sm:text-sm'>
                      Don't have an account? Create one{' '}
                      <Link
                        href='/sign-up'
                        className='font-semibold underline transition-colors duration-300 hover:text-deep-purple-accent-400'
                      >
                        here
                      </Link>
                      .
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
