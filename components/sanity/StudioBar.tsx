import Link from 'next/link';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
import { NavbarProps } from 'sanity';

const StudioBar = (props: NavbarProps) => {
  return (
    <div>
      <div className='flex items-center justify-between p-5'>
        <Link href='/' className='text-red-dark flex items-center'>
          <ArrowUturnLeftIcon className='h-6 w-6 text-red-dark mr-2' />
          Go To Website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioBar;
