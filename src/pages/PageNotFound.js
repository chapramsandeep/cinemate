import React from 'react';
import { useEffect } from 'react';
import PageNotFoundImage from '../assets/pagenotfound.jpg';
import { Link } from 'react-router-dom';
import { Button } from '../components';

export const PageNotFound = () => {

  useEffect(() => {
      document.title = `page not found / cinemate`
  }, [])


  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
        <div className='flex flex-col items-center my-4'>
        <p className='text-4xl text-gray-700 font-bold my-10 dark:text-white'>404, Oops!</p>
        <div className='max-w-lg'>
        <img className='w-80 rounded' src={PageNotFoundImage} alt='404 page not found'/>
        </div>
        </div>
        <div className='flex justify-center my-4'>
         <Link to="/">
         <Button>Back To Cinemate</Button>
         </Link>
        </div>
      </section>
    </main>
  )
}

