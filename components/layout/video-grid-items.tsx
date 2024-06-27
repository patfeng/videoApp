import Grid from 'components/grid';
import { GridTileImage } from 'components/grid/tile';
import { Video } from 'lib/api/types';
import Link from 'next/link';

//Grid layout for search and profile pages
export default function VideoGridItems({ videos }: { videos: Video[] }) {
  return (
    <>
      {videos.map((video) => (
        <Grid.Item key={video.id} className="animate-fadeIn">
          <GridTileImage
            label={{
              title: video.title
            }}
            src={video.video_url}
            id={video.id}
          />
        </Grid.Item>
      ))}
    </>
  );
}
