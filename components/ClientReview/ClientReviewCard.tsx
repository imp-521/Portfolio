import { QuoteIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import { FaStar } from 'react-icons/fa6';

type Props ={
    user: {
    id: number;
    name: string;
    profession: string;
    userImage: string;
    review: string;
 }
}
const ClientReviewCard = ({user} : Props) => {
  return (
    <div className='bg-white shadow-md dark:bg-gray-800 rounded-lg p-6 m-3 relative'>
        <QuoteIcon className='absolute top-4 right-4 w-8 h-8 text-red-600 dark:text-yellow-300 opacity-20'/>
        <div className='flex '>
            <FaStar className='w-4 h-4 text-yellow-600 dark:text-yellow-300'/>
            <FaStar className='w-4 h-4 text-yellow-600 dark:text-yellow-300'/>
            <FaStar className='w-4 h-4 text-yellow-600 dark:text-yellow-300'/>
            <FaStar className='w-4 h-4 text-yellow-600 dark:text-yellow-300'/>
            <FaStar className='w-4 h-4 text-yellow-600 dark:text-yellow-300'/>
        </div>
        <p className='mt-6 text-base text-gray-600 dark:text-gray-300 font-semibold'>{user.review}</p>
        <div className='w-full h-[1.2px] bg-gray-600 dark:bg-gray-300 opacity-10 mt-6 mb-6'></div>
        <div className='flex items-center gap-3'>
            <Image src={user.userImage} alt='img' width={50} height={50} className='rounded-full'/>
            <div className='flex flex-col items-center'>
                <h1 className='font-bold text-gray-800 dark:text-gray-200 text-left'>{user.name}</h1>
               <p className='text-sm text-gray-500'> {user.profession}</p>
            </div>
        </div>
    </div>
  )
}

export default ClientReviewCard