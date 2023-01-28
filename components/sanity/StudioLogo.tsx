import Image from 'next/image';
import { LogoProps } from 'sanity';

const StudioLogo = (props: LogoProps) => {
  return (
    <div className='flex items-center'>
      <Image
        className='rounded-full object-cover'
        height={50}
        width={50}
        src='/assets/img/logo-circle.png'
        alt=''
      />
      {props.renderDefault && <>{props.renderDefault(props)}</>}
    </div>
  );
};

export default StudioLogo;
