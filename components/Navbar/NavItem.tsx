import Link from 'next/link';

interface NavItemProps {
  href: string;
  label: string;
}

export default function NavItem({ href, label }: NavItemProps) {
  return (
    <li>
      <Link
        href={href}
        aria-label={label}
        title={label}
        className='hover:text-deep-purple-accent-400 font-medium tracking-wide text-gray-700 transition-colors duration-200'
      >
        {label}
      </Link>
    </li>
  );
}
