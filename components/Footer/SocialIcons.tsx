import { socialLinks, icons } from '@/constants/SocialLinks';

export default function SocialIcons() {
  return (
    <div className='mt-1 flex items-center space-x-3'>
      {socialLinks.map(({ href, icon }) => (
        <a
          key={icon}
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-deep-purple-accent-400 text-gray-500 transition-colors duration-300'
        >
          <svg viewBox='0 0 24 24' fill='currentColor' className='h-5'>
            {icon === 'instagram' ? (
              <>
                <circle
                  cx={icons.instagram.circle.cx}
                  cy={icons.instagram.circle.cy}
                  r={icons.instagram.circle.r}
                />
                <path d={icons.instagram.path} />
              </>
            ) : (
              icons[icon].map((d, index) => <path key={index} d={d} />)
            )}
          </svg>
        </a>
      ))}
    </div>
  );
}
