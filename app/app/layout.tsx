import './styles/global.css';

export const metadata = {
  title: 'Vaultr'
  // description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='h-screen w-screen bg-slate-100'>
        <div className='h-full w-full'>{children}</div>
      </body>
    </html>
  );
}