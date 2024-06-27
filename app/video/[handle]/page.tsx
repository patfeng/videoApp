import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Footer from 'components/layout/footer';
import { getVideoById, getVideosByUserId } from 'lib/api';
import { Video } from 'lib/api/types';
import VideoPageContent from 'components/video/client-video';
import CommentSection from 'components/video/comments';

export const metadata: Metadata = {
  title: 'Learnwell - Watch',
  description: 'Watch video page'
};
//main page for watching videos
export default async function VideoPage({ params }: { params: { handle: string } }) {
  const video = await getVideoById(params.handle);

  if (!video) return notFound();

  const relatedVideos = await getVideosByUserId(video.user_id);

  return (
    <div className="mx-auto max-w-screen-2xl px-4">
      <VideoPageContent video={video} relatedVideos={relatedVideos} />
      <CommentSection videoId={video.id} />
      <Footer />
    </div>
  );
}
