'use client';

import Image from 'next/image';
import getInTouch from '@/assets/img/get-in-touch.png';
import ContactForm from './ContactForm';
import { Element } from 'react-scroll';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className='pt-24'>
      <Element name='contact'>
        <div className='sm:scale-75 flex items-center justify-center'>
          <Image
            className='select-none w-64 sm:w-[450px]'
            src={getInTouch}
            alt='Get in touch section'
            draggable={false}
          />
        </div>
      </Element>
      <div className='flex flex-col lg:flex-row items-center justify-center mt-20'>
        <ContactForm />
        <div className='border-t-4 lg:border-t-0 lg:border-l-4 border-black p-20 mt-20 lg:mt-0 flex flex-col space-y-2'>
          <a
            className='tw-contact-link'
            href='mailto:contact@pacio.dev'
            data-link-alt='Click me!'
          >
            <span>E-mail</span>
          </a>
          <a
            className='tw-contact-link'
            href='https://www.instagram.com/hej_tu_pacio/'
            data-link-alt='Click me!'
          >
            <span>Instagram</span>
          </a>
          <a
            className='tw-contact-link'
            data-link-alt='Click me!'
            href='https://twitter.com/hejtupacio'
          >
            <span>Twitter</span>
          </a>
          <a
            className='tw-contact-link'
            data-link-alt='Click me!'
            href='https://github.com/paciodev'
          >
            <span>Github</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
