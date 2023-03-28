'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { navigationLinks } from '~/utils/constants/nav-links';
import { cn } from '~/utils/functions';

export default function Sidebar() {
  const segment = useSelectedLayoutSegment();

  return (
    <section className='h-screen w-full bg-slate-50 px-4'>
      <nav className='flex w-full flex-col space-y-1 pt-12'>
        {navigationLinks.map(({ href, text, icon: Icon }) => (
          <Link
            href={href}
            key={href}
            className={cn(
              'rounded-md p-2 font-medium text-slate-700 hover:bg-slate-200 hover:text-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-500',
              href === `/${segment}` && 'bg-slate-200 text-slate-800'
            )}
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
