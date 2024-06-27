'use client';

import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Video } from 'lib/api/types';
import { Gallery } from 'components/video/gallery';
import { VideoDescription } from 'components/video/video-description';
import { GridTileImage } from 'components/grid/tile';

interface VideoPageContentProps {
  video: Video;
  relatedVideos: Video[];
}

// Main component for video page
export default function VideoPageContent({ video, relatedVideos }: VideoPageContentProps) {
  const username = useSelector((state: RootState) => state.user.username);

  return (
    <>
      <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-black">
        <div className="h-full w-full basis-full lg:basis-4/6">
          <Gallery video={video} />
        </div>
        <div className="relative basis-full lg:basis-2/6">
          <VideoDescription video={video} editable={username === video.user_id} />
        </div>
      </div>
      {relatedVideos.length > 0 && (
        <div className="py-8">
          <h2 className="mb-4 text-2xl font-bold">More From This Creator</h2>
          <ul className="flex w-full gap-4 overflow-x-auto pt-1">
            {relatedVideos.map((relatedVideo) => (
              <li
                key={relatedVideo.id}
                className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
              >
                <GridTileImage
                  label={{ title: relatedVideo.title }}
                  src={relatedVideo.video_url}
                  autoPlay={false}
                  id={relatedVideo.id}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
