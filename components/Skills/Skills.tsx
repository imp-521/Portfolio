"use client"
import React from 'react'
import SectionHeading from '../Helper/SectionHeading'
import { skillCategories } from '@/data'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <section id='skill' className='scroll-mt-16'>
        <div className='h-190 sm:h-auto md:h-120 lg:h-115 bg-linear-to-br from-indigo-50 via-white to-sky-100 dark:from-indigo-950 dark:via-zinc-900 dark:to-zinc-950 px-6 lg:px-30 flex items-center justify-center flex-col sm:gap-7 sm:px-10 sm:pt-5'>
            <div className="flex w-full flex-1 items-center justify-center">
                <SectionHeading title1='Technical' title2='Skills' description="Technologies I've been working with recently"/>
            </div>
            <div className='w-full grid h-auto grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 flex-1 gap-4 pb-10 lg:pb-15'>
                {skillCategories[0].skills.map((skill, index) => {
                    const Icon = skill.icon
                    return (
                      <motion.div data-aos='zoom-in' data-aos-delay={index * 100} whileHover={{y:-5}} transition={{duration:0.2}} whileInView={{scale:1.05}} key={skill.name} className='flex items-center justify-center gap-1 flex-col bg-white dark:bg-purple-950 shadow-md rounded-xl p-4 group cursor-pointer'>
                       <div className='w-12 h-12 lg:w-11 lg:h-11 bg-linear-to-br from-purple-400  to-blue-600 flex items-center justify-center rounded-lg group-hover:from-purple-300 group-hover:to-blue-800 transition-all duration-300'>
                        <Icon className='text-white w-6 h-6'/>
                       </div>
                       <h3 className='text-sm font-medium text-foreground'>{skill.name}</h3>
                      </motion.div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Skills