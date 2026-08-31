import React from 'react'
import SectionHeading from '../Helper/SectionHeading'
import { contactInfo } from '@/data'

const Contact = () => {
  return (
    <section>
        <div className='w-full h-auto bg-linear-to-br from-sky-50 via-white to-indigo-100 dark:from-zinc-950 dark:via-indigo-950 dark:to-sky-950 flex items-center justify-center flex-col px-6 pt-5 pb-7 lg:pb-10 gap-3 lg:gap-5 lg:pt-6'>
            <div>
               <SectionHeading title1='Get in' title2='Touch' description="Have a project in mind or just want to say hi? I'd love to hear from you." />
            </div>
            <div>
               <div>
                  <div>
                    <h3 className='text-2xl font-semibold mb-4'>Let's talk</h3>
                    <p className='text-muted-foreground'>I'm always open to discussing new projects,  creative ideas or opportunities to be part of your vision.</p>
                  </div>
                  <div>
                    {contactInfo.map((link)=>{
                        return(
                            <a href={link.href} key={link.label} target='_blank'>
                                <div><link.icon/></div>
                            </a>
                        )
                    })}
                  </div>
               </div>

               <div>

               </div>
            </div>
        </div>
    </section>
  )
}

export default Contact