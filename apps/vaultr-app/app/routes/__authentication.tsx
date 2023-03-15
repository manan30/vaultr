import { Outlet } from '@remix-run/react';

export default function Authentication() {
  return (
    <div className='grid h-screen w-screen place-items-center bg-primary'>
      <div className='mx-4 flex w-[calc(100%-2rem)] flex-col rounded-md bg-slate-100 p-4 shadow-lg sm:w-[40%] lg:w-[30%]'>
        <h1 className='mb-6 text-center text-3xl font-semibold text-primary'>
          Vaultr
        </h1>
        <Outlet />
      </div>
    </div>
  );
}
