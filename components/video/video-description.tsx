import Prose from 'components/prose';
import { Video } from 'lib/api/types';
import Link from 'next/link';

//Right side bar on video page with title, username, description
export function VideoDescription({ video, editable }: { video: Video; editable: boolean }) {
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-5xl font-medium">{video.title}</h1>
        <Link href={`/search/${video.user_id}`}>
          <div className="inline-block rounded-full bg-blue-600 p-2 text-sm text-white">
            <div className="flex items-center justify-center">{video.user_id}</div>
          </div>
        </Link>

        {editable ? (
          <Link href={`/edit/${video.id}`}>
            <div className="absolute bottom-1 right-1 inline-block rounded-full bg-gray-500 p-2 text-sm text-white">
              <div className="flex items-center justify-center">{'Edit Video'}</div>
            </div>
          </Link>
        ) : null}
      </div>
      {video.description ? (
        <Prose
          className="mb-6 text-sm leading-tight dark:text-white/[60%]"
          html={'Description: ' + video.description}
        />
      ) : null}
    </>
  );
}
