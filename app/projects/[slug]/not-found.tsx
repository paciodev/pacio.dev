import '@/assets/css/glitch.css';

const NotFound = () => {
  return (
    <div className='min-h-[80vh] grid place-content-center'>
      <div className='grid place-content-center'>
        <h1
          className='glitch !text-black font-extrabold text-8xl'
          data-text='404'
        >
          404
        </h1>
      </div>
      <p className='text-center'>
        Project with this name was not found on the server.
      </p>
    </div>
  );
};

export default NotFound;
