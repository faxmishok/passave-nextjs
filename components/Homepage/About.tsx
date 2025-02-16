const About = () => {
  return (
    <section
      id='product'
      className='mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20'
    >
      <div className='mb-6 flex flex-col md:mb-8 lg:flex-row lg:justify-between'>
        <h2 className='group mb-5 max-w-lg font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6'>
          <span className='mb-1 inline-block sm:mb-4'>
            Your first password manager
            <br className='hidden md:block' />
            comes free of charge.
          </span>
          <div className='ml-auto h-1 origin-left scale-x-30 transform bg-deep-purple-accent-400 duration-300 group-hover:scale-x-100'></div>
        </h2>
        <p className='lg:text-md text-gray-700 lg:max-w-md'>
          Passave is a password saver-manager tool that allows its users to
          securely store their passwords in hashes. It serves users their saved
          passwords on the go—just click on the saved card, and the password is
          copied to the clipboard. No more forgotten account syndromes!
        </p>
      </div>
    </section>
  );
};

export default About;
