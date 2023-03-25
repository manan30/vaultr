import type { LoaderArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { Outlet } from '@remix-run/react';

import { isAuthenticated } from '~/lib/api/auth';

export async function loader({ request, context, params }: LoaderArgs) {
  try {
    const isUserAuthenticated = await isAuthenticated({
      headers: Object.fromEntries(request.headers)
    });
    if (isUserAuthenticated.data) {
      return redirect('/dashboard');
    }

    return null;
  } catch (err) {
    return null;
  }
}

export default function UnauthenticatedApp() {
  return (
    <div className='grid h-full w-full place-items-center px-6'>
      <div className='mx-auto w-full rounded-md border border-solid border-slate-200 bg-white p-6 shadow-md outline-none sm:max-w-lg'>
        <Outlet />
      </div>
    </div>
  );
}
