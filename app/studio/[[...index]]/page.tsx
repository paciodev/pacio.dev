'use client';

import { NextStudio } from 'next-sanity/studio';

import config from '../../../sanity.config';

const StudioPage = () => {
  return (
    <div className='relative z-[100]'>
      <NextStudio config={config} />
    </div>
  );
};

export default StudioPage;
