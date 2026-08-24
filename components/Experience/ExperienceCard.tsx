"use client"
import { experiences } from '@/data'
import { Briefcase, CalendarDays, GraduationCap } from 'lucide-react'
import React from 'react'

const ExperienceCard = ({data}) => {
 
  return (
    <div className='flex w-full flex-col items-start justify-center rounded-xl border border-gray-200/80 bg-white/80 p-5 pt-7 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-zinc-900/60 dark:shadow-none'>
        <h3 className='text-lg font-semibold dark:text-white text-gray-900'>{data.title}</h3>
        <p className='text-sm dark:text-gray-400 text-gray-500 mt-1'>{data.company}</p>
        <div className='flex items-center gap-2 text-sm dark:text-gray-400 text-gray-500'>
            <CalendarDays className='w-4 h-4'/>
            {data.period}
        </div>
        <p className='mt-3 text-sm leading-6  dark:text-gray-300 text-gray-600'>{data.description}</p>
        <div className='mt-4 flex flex-wrap gap-2'>
          {data.technologies.map((tech, index)=>{
            return (
              <span key={index} className='rounded-full border dark:border-purple-500/30 dark:bg-purple-500/10 px-3 py-1 text-xs dark:text-purple-300 text-purple-700 bg-purple-50 border-purple-200'>
                {tech}
              </span>
            )
          })}
        </div>
    </div>
  )
}

export default ExperienceCard