import Link from 'next/link';
import Image from 'next/image';
import SocialIcons from '@/components/Footer/SocialIcons'; // Importing SocialIcons

export default function Footer() {
  return (
    <footer
      id='contact'
      className='mx-auto px-4 pt-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8'
    >
      <div className='row-gap-6 mb-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-4'>
        {/* Brand Section */}
        <div className='sm:col-span-2'>
          <Link
            href='/'
            aria-label='Go home'
            title='Passave'
            className='inline-flex items-center'
          >
            <Image
              className='h-16 object-contain'
              src='/ps-logo-footer.svg'
              alt='Passave'
              width={64}
              height={64}
            />
            <span className='ml-2 text-xl font-bold uppercase tracking-wide text-gray-800'>
              Passave
            </span>
          </Link>
          <div className='mt-6 lg:max-w-sm'>
            <p className='text-sm text-gray-800'>
              Passave is a simple yet functional web application to store
              sensitive data securely such as passwords. It is free and users
              can store as many passwords as they want.
            </p>
            <p className='mt-4 text-sm text-gray-800'>
              Noting down the password every time you sign up for an account can
              be painful. This web app is developed to solve the problems of
              forgotten password syndrome that most users encounter.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className='space-y-2 text-sm'>
          <p className='text-base font-bold tracking-wide text-gray-900'>
            Contacts
          </p>
          <div className='flex'>
            <p className='mr-1 text-gray-800'>Website:</p>
            <a
              href='https://fahminguliyev.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-deep-purple-accent-400 transition-colors duration-300 hover:text-deep-purple-800'
            >
              fahminguliyev.com
            </a>
          </div>
          <div className='flex'>
            <p className='mr-1 text-gray-800'>Email:</p>
            <a
              href='mailto:forthisexercise@gmail.com'
              className='text-deep-purple-accent-400 transition-colors duration-300 hover:text-deep-purple-800'
            >
              forthisexercise@gmail.com
            </a>
          </div>
          <div className='flex'>
            <p className='mr-1 text-gray-800'>Address:</p>
            <a
              href='https://www.google.com/maps/place/Baku,+Azerbaijan/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-deep-purple-accent-400 transition-colors duration-300 hover:text-deep-purple-800'
            >
              Baku, Azerbaijan
            </a>
          </div>
        </div>

        {/* Social Media Section */}
        <div>
          <span className='text-base font-bold tracking-wide text-gray-900'>
            Social
          </span>
          <SocialIcons />
          <p className='mt-4 text-sm text-gray-500'>
            Social media accounts are only used to follow the admin. Please
            contact by email if interested in business.
          </p>
        </div>
      </div>

      {/* Copyright and Links */}
      <div className='flex flex-col-reverse justify-between border-t pb-10 pt-5 lg:flex-row'>
        <p className='text-sm text-gray-600'>
          © Copyright 2021-2025 |&nbsp;
          <a
            href='https://fahminguliyev.com'
            target='_blank'
            rel='noopener noreferrer'
            className='font-bold text-gray-600 transition-colors duration-300 hover:text-deep-purple-600'
          >
            Fahmin Guliyev
          </a>
          . Some rights reserved.
        </p>
        <ul className='mb-3 flex flex-col space-y-2 sm:flex-row sm:space-x-5 sm:space-y-0 lg:mb-0'>
          <li>
            <Link
              href='/faq'
              className='text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400'
            >
              F.A.Q
            </Link>
          </li>
          <li>
            <Link
              href='/terms'
              className='text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400'
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href='/terms'
              className='text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400'
            >
              Terms & Conditions
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
