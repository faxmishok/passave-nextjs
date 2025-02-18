export default function TermsConditions() {
  return (
    <div className='bg-gray-300'>
      <div className='mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20'>
        <div className='mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl'>
          <div>
            <p className='mb-4 inline-block rounded-full bg-teal-accent-400 px-3 py-px text-xs font-semibold uppercase tracking-wider text-teal-900'>
              Updated Policy
            </p>
          </div>
          <h2 className='mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
            <span className='relative inline-block'>
              <svg
                viewBox='0 0 52 24'
                fill='currentColor'
                className='absolute left-0 top-0 z-0 -ml-20 -mt-8 hidden w-32 text-gray-400 sm:block lg:-ml-28 lg:-mt-10 lg:w-32'
              >
                <defs>
                  <pattern
                    id='dc223fcc-6d72-4ebc-b4ef-abe121034d6e'
                    x='0'
                    y='0'
                    width='.135'
                    height='.30'
                  >
                    <circle cx='1' cy='1' r='.7'></circle>
                  </pattern>
                </defs>
                <rect
                  fill='url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)'
                  width='52'
                  height='24'
                />
              </svg>
              <span className='relative'>Terms</span>
            </span>{' '}
            and Conditions
          </h2>
          <div className='mb-12 flex w-full flex-col text-left'>
            <div className='mx-auto w-full'>
              <p className='text-blueGray-500 mx-auto text-base font-medium leading-relaxed'>
                Chill the f out brothers. Not interested to make a special terms
                and whatnot. Use it as you want and at your own risk. I will not
                steal your passwords or anything, just saying. Yet, due to the
                working principle of this web application, your passwords are
                not even visible to the developer. So there is that.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
