import Navbar from 'components/layout/navbar';
import { GeistSans } from 'geist/font/sans';
import { ReactNode } from 'react';
import './globals.css';
import { ReduxProvider } from 'components/redux-provider';

//Layout for everything - wrapped with Redux for username state
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
        <ReduxProvider>
          <Navbar />
          <main>{children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
}
