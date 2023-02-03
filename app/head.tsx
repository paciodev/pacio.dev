import Script from 'next/script';

const Head = () => {
  return (
    <>
      <title>Pacio - Creative web developer</title>
      <meta name='title' content='Pacio - Creative web developer' />
      <meta
        name='description'
        content='Personal webpage of Patryk Nowaczyński also known as Pacio. Are you looking for web developer with young, fresh and modern point of view? You found it!'
      />

      <meta content='width=device-width, initial-scale=1' name='viewport' />

      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://pacio.dev' />
      <meta property='og:title' content='Pacio - Creative web developer' />
      <meta
        property='og:description'
        content='Personal webpage of Patryk Nowaczyński also known as Pacio. Are you looking for web developer with young, fresh and modern point of view? You found it!'
      />
      <meta
        property='og:image'
        content='https://pacio.dev/assets/img/logo-circle.png'
      />

      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content='https://pacio.dev' />
      <meta property='twitter:title' content='Pacio - Creative web developer' />
      <meta
        property='twitter:description'
        content='Personal webpage of Patryk Nowaczyński also known as Pacio. Are you looking for web developer with young, fresh and modern point of view? You found it!'
      />
      <meta
        property='twitter:image'
        content='https://pacio.dev/assets/img/logo-circle.png'
      />

      <link rel='icon' href='/assets/img/logo-circle.png' />
      <Script src='/assets/js/hero.js' defer async />
    </>
  );
};

export default Head;
