import { Outlet } from "@remix-run/react";

export default function Authentication() {
  return (
    <div className="h-screen w-screen grid place-items-center bg-brand">
      <div className="w-[calc(100%-2rem)] sm:w-[40%] lg:w-[30%] mx-4 bg-slate-100 rounded-md shadow-lg p-4">
        <Outlet />
      </div>
    </div>
  );
}
