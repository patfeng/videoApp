'use client';

import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

export default function LoginButton() {
  const username = useSelector((state: RootState) => state.user.username);

  //Login button says "login" and redirects to login page if user not logged in, otherwise displays username and redirects to user profile page
  return (
    <div className="flex justify-end md:w-1/3">
      <Link href={username ? `/search/${username}` : '/login'} className="hidden md:flex">
        <button className="btn btn-primary">{username ? username : 'Login'}</button>
      </Link>
    </div>
  );
}
