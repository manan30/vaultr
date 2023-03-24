import { Outlet } from '@remix-run/react';

export default function UnauthenticatedApp() {
  return (
    <div className='grid h-full w-full place-items-center px-6'>
      <div className='mx-auto w-full rounded-md border border-solid border-slate-200 bg-slate-50 p-4  shadow-md outline-none sm:max-w-lg'>
        <Outlet />
      </div>
    </div>
  );
}
