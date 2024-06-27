import type { Metadata } from 'next';

import Prose from 'components/prose';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: '404',
  description: 'Page not found'
};

export default async function Page() {
  return (
    <>
      <h1 className="mb-8 text-5xl font-bold">{'Error 404'}</h1>
      <Prose className="mb-8" html={"This page can't be found."} />
    </>
  );
}
