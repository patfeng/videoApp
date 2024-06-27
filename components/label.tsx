import clsx from 'clsx';
import Link from 'next/link';

//Clickable title button to redirect to video page
const Label = ({
  title,
  position,
  id
}: {
  title: string;
  id: string;
  position?: 'bottom' | 'center' | 'top';
}) => {
  return (
    <div
      className={clsx('absolute left-0 top-5 flex w-full px-4 pb-4 @container/label', {
        'lg:px-20 lg:pb-[35%]': position === 'center'
      })}
    >
      <Link href={`/video/${id}`}>
        <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
          <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">{title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default Label;
