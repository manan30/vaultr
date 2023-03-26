import { Link } from '@remix-run/react';

import { navigationLinks } from '~/utils/constants/nav-links';

export default function Sidebar() {
  return (
    <section className='h-screen w-full bg-slate-50 px-4'>
      <nav className='flex w-full flex-col space-y-1 pt-12'>
        {navigationLinks.map(({ to, text, icon: Icon }) => (
          <Link
            to={to}
            key={to}
            className='rounded-md p-2 font-medium text-slate-700 hover:bg-slate-200 hover:text-slate-800'
          >
            <span className='flex items-center space-x-2'>
              <Icon className='h-4 w-4 text-current' />
              <span>{text}</span>
            </span>
          </Link>
        ))}
      </nav>
    </section>
  );
}
