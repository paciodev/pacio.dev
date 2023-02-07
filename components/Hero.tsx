import '@/assets/css/hero.css';

const Hero = () => {
  return (
    <div className='mt-48 lg:mt-[30vh]'>
      <div>
        <h1 className='text-3xl px-3 sm:px-0 sm:text-5xl xl:text-7xl font-extrabold flex items-center justify-center'>
          <div className='select-none sm:space-y-1'>
            <div>Web Developer</div>
            <div className='xl:ml-32'>specialized in creating</div>
            <div className='xl:ml-64 mask'>
              <span className='hero-animation' data-show>
                powerful webapps
              </span>
              <span className='hero-animation'>beautiful pages</span>
              <span className='hero-animation'>simple designs</span>
            </div>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
