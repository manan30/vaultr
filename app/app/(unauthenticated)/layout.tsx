export default function UnauthenticatedApp({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='grid h-full w-full place-items-center px-6'>
      <div className='mx-auto w-full rounded-md border border-solid border-slate-200 bg-white p-6 shadow-md outline-none sm:max-w-lg'>
        {children}
      </div>
    </div>
  );
}
