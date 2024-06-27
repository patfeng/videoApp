import Grid from 'components/grid';
import VideoGridItems from 'components/layout/video-grid-items';
import { defaultSort, sorting } from 'lib/constants';
import { getVideosByUserId } from 'lib/api';
import { get } from 'http';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Learnwell - Profile',
  description: 'Profile page for user videos'
};

//User profile page - under same subdir as search as they are very similar

export default async function UserPage({
  params,
  searchParams
}: {
  params: { collection: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  const videos = await getVideosByUserId(params.collection);

  return (
    <section className="py-6">
      <p className="mb-2 text-5xl font-medium">
        {params.collection == 'pat_feng_anonymous' ? 'Anonymous Posts:' : params.collection}
      </p>

      {videos.length === 0 ? (
        <p className="py-3 text-lg">{`No videos found from ${params.collection}. Upload something!`}</p>
      ) : (
        <>
          <p className="py-3 text-lg">{``}</p>
          <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <VideoGridItems videos={videos} />
          </Grid>
        </>
      )}
    </section>
  );
}
