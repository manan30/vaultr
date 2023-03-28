import axios from 'axios';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import Sidebar from './sidebar';

export async function isAuthenticated() {
  try {
    const headerList = headers();
    const { data: auth } = await axios.get<boolean>(
      '/api/auth/is-authenticated',
      {
        baseURL: 'http://localhost:3000',
        headers: Object.fromEntries(headerList)
      }
    );
    return { auth };
  } catch (err) {
    return { auth: false };
  }
}

export default async function AuthenticatedApp({
  children
}: {
  children: React.ReactNode;
}) {
  const { auth } = await isAuthenticated();

  if (!auth) redirect('/login');

  return (
    <div className='flex h-full w-full'>
      <div className='w-1/4 flex-1'>
        <Sidebar />
      </div>
      <div className='w-3/4 py-6 px-8'>{children}</div>
    </div>
  );
}
