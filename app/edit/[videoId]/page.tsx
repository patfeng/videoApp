import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Footer from 'components/layout/footer';
import { getVideoById, getVideosByUserId } from 'lib/api';
import { Video } from 'lib/api/types';
import Edit from 'components/upload-edit/edit';
import CommentSection from 'components/video/comments';

export const metadata: Metadata = {
  title: 'Learnwell - Edit',
  description: 'Edit a video you posted'
};

//Page for editting videos
export default async function EditPage({ params }: { params: { videoId: string } }) {
  const video = await getVideoById(params.videoId);

  if (!video) return notFound();

  return (
    <div className="mx-auto max-w-screen-2xl px-4">
      <Edit video={video} />
      <Footer />
    </div>
  );
}
