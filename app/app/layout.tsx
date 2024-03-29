import { Inter } from 'next/font/google';

import './styles/global.css';

export const metadata = {
  title: 'Vaultr'
};

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={inter.className}>
      <body className='h-screen w-screen bg-slate-100'>
        <div className='h-full w-full'>{children}</div>
      </body>
    </html>
  );
}
