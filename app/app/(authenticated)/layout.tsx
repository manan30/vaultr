import axios from 'axios';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

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
    <div className='grid h-full w-full place-items-center px-6'>
      <div className='mx-auto w-full rounded-md border border-solid border-slate-200 bg-white p-6 shadow-md outline-none sm:max-w-lg'>
        {children}
      </div>
    </div>
  );
}
