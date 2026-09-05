"use client"
import React from 'react'
import SectionHeading from '../Helper/SectionHeading'
import { projects } from '@/data'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section>
        <div className='w-full h-auto px-6 lg:px-30 bg-linear-to-br from-slate-100 via-indigo-50 to-purple-100 dark:from-zinc-950 dark:via-indigo-950 dark:to-purple-950 flex items-center justify-center flex-col gap-10 pt-5 sm:gap-7 sm:px-10 lg:gap-10 lg:pt-10'>
            <div className='w-full flex items-center justify-center'>
            <SectionHeading title1='Featured' title2='Projects' description='A selection of my recent work and side projects'/>
            </div>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6'>
             {projects.map((project,index) => {
                return(
                    <div data-aos='fade-up' data-aos-delay={index * 100} key={index} className='mb-10'>
                       <ProjectCard {...project}/>
                    </div>
                )
             })}
            </div>
        </div>
    </section>
  )
}

export default Projects