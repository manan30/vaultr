import type { LoaderArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { Outlet } from '@remix-run/react';

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
  return <Outlet />;
}
