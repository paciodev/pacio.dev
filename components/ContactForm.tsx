'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { AnimatePresence, motion } from 'framer-motion';
import { MutatingDots } from 'react-loader-spinner';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [animationParent] = useAutoAnimate();

  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = ({ name, email, message }) => {
    setError('');
    setTimeout(() => {
      setError('');
    }, 3000);
    if (!name || !email || !message) {
      return setError('Please complete all fields');
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      return setError('Please provide a valid email address');
    }

    setLoading(true);

    // EMAIL SENDING LOGIC
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    })
      .then(() => {
        setSubmitted(true);
      })
      .catch((err) => {
        setSubmitted(false);
        setError(err);
        setTimeout(() => {
          setError('');
        }, 5000);
      });
  };

  return (
    <div className='relative z-10'>
      <AnimatePresence mode='wait'>
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                type: 'spring',
              },
            }}
            key='sent'
            className='pl-5 pr-7'
          >
            <div className='w-full mini:w-[350px] mx-auto px-4 py-12 bg-[#E9FFEF] text-[#0D5E00] text-center lg:mr-20'>
              <h2 className='font-extrabold text-4xl mb-4'>Thank you!</h2>
              <p className='text-lg'>
                I will try to get back to you as soon as possible.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key='form'
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { type: 'spring' } }}
            className='lg:mr-20 w-full mini:w-auto pl-5 pr-7 mini:px-0'
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className='tw-form-label' htmlFor='name'>
                What&apos;s your name?
              </label>
              <input
                placeholder='Bob'
                className='tw-form-input'
                id='name'
                {...register('name')}
              />
              <label className='tw-form-label' htmlFor='email'>
                What&apos;s your email address?
              </label>
              <input
                placeholder='bob@email.com'
                className='tw-form-input'
                id='email'
                {...register('email')}
              />
              <label className='tw-form-label' htmlFor='message'>
                What do you want to tell me?
              </label>
              <textarea
                placeholder='Hi! I just wanted to say hi.'
                className='tw-form-input resize-none h-48'
                id='message'
                {...register('message')}
              />

              <div
                className='flex flex-col items-center lg:items-start'
                ref={animationParent}
              >
                {error && (
                  <p className='text-red-500 font-medium text-sm'>{error}</p>
                )}
                <button
                  key={error}
                  type='submit'
                  disabled={loading}
                  className={`mt-1 relative z-10 bg-black text-white text-sm px-6 py-3 font-medium block transition-all duration-300 hover:!opacity-75 whitespace-nowrap overflow-hidden ${
                    error ? 'animate-error' : ''
                  }`}
                  style={{
                    opacity: loading ? '50%' : '100%',
                  }}
                >
                  {loading
                    ? 'Wait a sec...'
                    : error
                    ? 'Fix the error'
                    : 'Send it to the moon'}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
