'use client';

import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { setUsername } from '../../store/userSlice';
import { AppDispatch } from '../../store';
import Link from 'next/link';
import { FormEvent } from 'react';

//Login form
export const ClientForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get('username') as string;
    dispatch(setUsername(username));

    // Navigate to the user page after login
    router.push(`/search/${username}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
        <h3 className="text-xl font-semibold text-gray-500">Sign In</h3>
        <p className="text-sm text-gray-500">Use your username and password to sign in</p>
      </div>
      <div className="px-4 py-6 sm:px-16">
        <div className="mb-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full rounded border border-gray-300 px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full rounded border border-gray-300 px-3 py-2"
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
        <p className="text-center text-sm text-gray-600">
          {"Don't have an account? "}
          <Link href="/login" className="font-semibold text-gray-800">
            Sign up
          </Link>
          {' for free.'}
        </p>
      </div>
    </form>
  );
};
