import React from 'react';
import Upload from 'components/upload-edit/upload';
import type { Metadata } from 'next';
import Footer from 'components/layout/footer';

export const metadata: Metadata = {
  title: 'Learnwell - Upload',
  description: 'Upload a video to the platform'
};
//upload page
const NewVideoPage: React.FC = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-md px-4 py-8">
        <Upload />
      </div>
    </>
  );
};

export default NewVideoPage;
