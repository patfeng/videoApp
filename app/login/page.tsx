// app/login/page.tsx
import Link from 'next/link';
import { Metadata } from 'next';
import { ClientForm } from '../../components/login/client-form';

export const metadata: Metadata = {
  title: 'Learnwell - Sign In',
  description: 'Login Page'
};

//Page for logging in
export default function LoginPage() {
  return (
    <div className="bg-black-100 flex h-[calc(100vh-100px)] w-screen items-center justify-center">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <ClientForm />
      </div>
    </div>
  );
}
