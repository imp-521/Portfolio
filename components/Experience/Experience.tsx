"use client"
import React from 'react'
import SectionHeading from '../Helper/SectionHeading'
import ExperienceCard from './ExperienceCard'
import { experiences } from '@/data'
import { Briefcase, GraduationCap } from 'lucide-react'



const Experience = () => {
    
  return (
    <section>
        <div className='w-full flex items-center justify-center flex-col px-6 h-auto pt-10 gap-10 bg-linear-to-br from-violet-100 via-white to-cyan-100 dark:from-indigo-950 dark:via-zinc-900 dark:to-cyan-950'>
            <div className='w-full flex items-center justify-center flex-1 text-center'>
                <SectionHeading title1='Experience &' title2='Education' description='My professional journey and academic background'/>
            </div>
            <div className='relative flex items-start justify-center w-full'>
               {/* time line */}
               <div className='absolute left-0 md:left-1/2 md:-translate-x-1/2 h-full w-px bg-purple-300 dark:bg-purple-500/50'></div>
               
               

               {/* items */}
               <div className='flex items-start justify-center gap-5 flex-col pt-6 w-full z-10'>
                {experiences.map((data, index)=>{
                    const Icon = data.type === "work" ? Briefcase : GraduationCap;
                    const isEven = index % 2 === 0;
                    return(
                       <div key={index} className={`relative w-full pl-12 md:w-1/2 ${
                        isEven ? "md:self-start md:pr-8 md:pl-0" : "md:self-end md:pl-8" 
                        }`}>
                          <div className="absolute left-0 top-8 -translate-x-1/2 w-7 h-7 rounded-full bg-purple-500 flex items-center justify-center">
                            <Icon className="h-4 w-4 text-white"/> 
                          </div>
                          <div>
                            <ExperienceCard data={data} />
                          </div>
                       </div>
                    )
                })} 
               </div>
            </div>
        </div>
    </section>
  )
}

export default Experience