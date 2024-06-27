import Grid from 'components/grid';
import VideoGridItems from 'components/layout/video-grid-items';
import { defaultSort, sorting } from 'lib/constants';
import { getVideosByUserId } from 'lib/api';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Learnwell - Search',
  description: 'Search videos by user id'
};

//search page
export default async function SearchPage({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

  const videos = await getVideosByUserId(searchValue);
  const resultsText = videos.length > 1 ? 'results' : 'result';

  return (
    <>
      {searchValue ? (
        <p className="mb-4">
          {videos.length === 0 //if no videos, display not found message
            ? 'There are no videos that match '
            : `Showing ${videos.length} ${resultsText} for `}
          <span className="font-bold">&quot;{searchValue}&quot;</span>
        </p>
      ) : null}
      {videos.length > 0 ? (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <VideoGridItems videos={videos} />
        </Grid>
      ) : null}
    </>
  );
}
