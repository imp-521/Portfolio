import { CodeSquareIcon } from 'lucide-react'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex flex-row items-center justify-center gap-2'>
        <div className='w-10 h-10 flex items-center justify-center flex-row gap-40 bg-blue-800 dark:bg-blue-400 rounded-lg cursor-pointer'>
        <CodeSquareIcon className='text-white text-lg' />
    </div>
        <h1 className='font-bold text-blue-800 dark:text-blue-400 hidden lg:block cursor-pointer text-lg'>{"<AFSHIN />"}</h1>
    </div>
  )
}

export default Logo