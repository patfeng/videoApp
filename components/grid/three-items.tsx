import { GridTileImage } from 'components/grid/tile';
import type { Video } from 'lib/api/types';
import { getHomepageVideos } from 'lib/api';
import Link from 'next/link';

function ThreeItemGridItem({
  item,
  size,
  priority
}: {
  item: Video;
  size: 'full' | 'half';
  priority?: boolean;
}) {
  return (
    <div
      className={size === 'full' ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2 md:row-span-1'}
    >
      <GridTileImage
        src={item.video_url}
        label={{
          position: 'top',
          title: item.title as string
        }}
        id={item.id}
      />
    </div>
  );
}

//For homepage, there are 2 sets of 3 item grids.
export async function ThreeItemGrid() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const homepageItems = await getHomepageVideos();
  //get first 6 elements from pat_feng_homepage user
  if (
    !homepageItems[0] ||
    !homepageItems[1] ||
    !homepageItems[2] ||
    !homepageItems[3] ||
    !homepageItems[4] ||
    !homepageItems[5]
  )
    return null;

  const [firstVideo, secondVideo, thirdVideo, fourthVideo, fifthVideo, sixthVideo] = homepageItems;

  return (
    <>
      <section className="mx-auto grid max-w-screen-2xl animate-fadeIn gap-4 px-4 pb-4 transition-opacity md:grid-cols-6 md:grid-rows-2">
        <ThreeItemGridItem size="full" item={firstVideo} priority={true} />
        <ThreeItemGridItem size="half" item={secondVideo} priority={true} />
        <ThreeItemGridItem size="half" item={thirdVideo} />
      </section>
      <section className="mx-auto grid max-w-screen-2xl animate-fadeIn gap-4 px-4 pb-4 transition-opacity md:grid-cols-6 md:grid-rows-2">
        <ThreeItemGridItem size="half" item={fifthVideo} priority={true} />
        <ThreeItemGridItem size="full" item={fourthVideo} priority={true} />
        <ThreeItemGridItem size="half" item={sixthVideo} />
      </section>
    </>
  );
}
