import clsx from 'clsx';
import Image from 'next/image';
import logo from './icons/LOGO_ICON.png';

//logo in top and bottom of page
export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <div
      className={clsx(
        'flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black',
        {
          'h-[40px] w-[40px] rounded-xl': !size,
          'h-[30px] w-[30px] rounded-lg': size === 'sm'
        }
      )}
    >
      <Image
        src={logo}
        width={size === 'sm' ? 16 : 24}
        height={size === 'sm' ? 16 : 24}
        alt="Learnwell Logo"
      />
    </div>
  );
}
