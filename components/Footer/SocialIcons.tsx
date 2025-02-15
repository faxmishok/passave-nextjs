import socialLinks from '@/constants/SocialLinks';

const SocialIcons = () => {
  return (
    <div className='mt-1 flex items-center space-x-3'>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400'
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
