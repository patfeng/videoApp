import clsx from 'clsx';
import Image from 'next/image';
import Label from '../label';
import Player from 'next-video/player';

//Contents of grids
export function GridTileImage({
  isInteractive = true,
  active,
  label,
  id,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
  label?: {
    title: string;
    position?: 'bottom' | 'center' | 'top';
  };
  id: string;
} & React.ComponentProps<typeof Player>) {
  return (
    <div
      className={clsx(
        'group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black',
        {
          relative: label,
          'border-2 border-blue-600': active,
          'border-neutral-200 dark:border-neutral-800': !active
        }
      )}
    >
      {props.src ? (
        <Player
          className={clsx('relative h-full w-full object-contain', {
            'transition duration-300 ease-in-out group-hover:scale-95': isInteractive
          })}
          {...props}
        />
      ) : null}
      {label ? <Label title={label.title} position={label.position} id={id} /> : null}
    </div>
  );
}
