"use client"
import React, { useRef } from 'react'
import SectionHeading from '../Helper/SectionHeading'
import ExperienceCard from './ExperienceCard'
import { experiences } from '@/data'
import { Briefcase, GraduationCap } from 'lucide-react'
import { useScroll, motion } from 'framer-motion'



const Experience = () => {
  const timelineRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: timelineRef
  })
  return (
    <section>
        <div className='w-full flex items-center justify-center flex-col px-6 h-auto pt-10 pb-10 gap-10  sm:gap-4 lg:gap-10 bg-linear-to-br from-violet-100 via-white to-cyan-100 dark:from-indigo-950 dark:via-zinc-900 dark:to-cyan-950 lg:px-60'>
            <div className='w-full flex items-center justify-center flex-1 text-center'>
                <SectionHeading title1='Experience &' title2='Education' description='My professional journey and academic background'/>
            </div>
            <div ref={timelineRef} className='relative flex items-start justify-center w-full'>
               {/* time line */}
               <div className='absolute left-0 md:left-1/2 md:-translate-x-1/2 h-full w-px bg-purple-300 dark:bg-purple-500/50'></div>
               <motion.div style={{scaleY: scrollYProgress}} className='absolute top-0 w-px bg-purple-600 left-0 md:left-1/2 md:-translate-x-1/2 origin-top h-full'>

               </motion.div>
               

               {/* items */}
               <div className='flex items-start justify-center gap-5 flex-col pt-8 w-full z-10'>
                {experiences.map((data, index)=>{
                    const Icon = data.type === "work" ? Briefcase : GraduationCap;
                    const isEven = index % 2 === 0;
                    return(
                       <div data-aos='zoom-in' data-aos-delay={index * 100} key={index} className={`relative w-full pl-12 sm:pl-0 md:w-1/2 
                        ${isEven ? 'md:self-start md:pl-0 md:pr-8' : "md:self-end md:pl-8 md:pr-0"}`}>
                          <div className={`absolute left-0 top-6 -translate-x-1/2 w-7 h-7 rounded-full bg-purple-500 flex items-center justify-center ${isEven ? "md:left-auto md:right-0 md:translate-x-1/2"
                          : "left-0 -translate-x-1/2"}`}>
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