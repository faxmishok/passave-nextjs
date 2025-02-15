import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex h-screen flex-col-reverse justify-center py-16 lg:flex-col lg:py-0'>
      <div className='mx-auto w-full max-w-xl self-center px-4 md:px-0 lg:max-w-screen-xl lg:px-8 lg:py-20'>
        <div className='mb-0 lg:max-w-lg lg:pr-8 xl:pr-6'>
          <h2 className='mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center'>
            You're lost, friend?
          </h2>
          <p className='mb-5 text-base text-gray-700 md:text-left md:text-lg'>
            Err. There is no such route here. Seems like either an innocent typo
            or you were trying to realize something illegal.. My advice – don’t.
          </p>
          <p className='mb-5 text-base text-gray-700 md:text-left md:text-lg'>
            There are many websites out there where you could do your various
            tests. Just Google them, and make sure you’re in the right scope.
            Peace.
          </p>
          <div className='text-center'>
            <Link
              href='/'
              className='bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline inline-flex h-12 w-full items-center justify-center rounded px-6 font-medium tracking-wide text-white shadow-md transition duration-200 focus:outline-none md:w-auto'
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* 404 Image */}
      <div className='inset-y-0 right-0 top-0 mx-auto mb-6 flex w-full max-w-xl items-center px-4 md:px-0 lg:absolute lg:mx-0 lg:mb-0 lg:w-1/2 lg:max-w-full lg:pl-8 lg:pr-0 xl:px-0'>
        <Image
          className='w-full lg:mr-12'
          src='/404.svg'
          alt='404 Not Found'
          width={500}
          height={400}
          priority
        />
      </div>
    </div>
  );
}
