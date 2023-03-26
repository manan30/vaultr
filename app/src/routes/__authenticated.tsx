import type { LoaderArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { Outlet } from '@remix-run/react';

import Sidebar from '~/components/sidebar';
import { isAuthenticated } from '~/lib/api/auth';

export async function loader({ request, context, params }: LoaderArgs) {
  try {
    await isAuthenticated({
      headers: Object.fromEntries(request.headers)
    });
    return null;
  } catch (err) {
    return redirect('/login');
  }
}

export default function AuthenticatedApp() {
  return (
    <div className='flex h-full w-full'>
      <div className='w-1/4 flex-1'>
        <Sidebar />
      </div>
      <div className='w-3/4'>
        <Outlet />
      </div>
    </div>
  );
}
