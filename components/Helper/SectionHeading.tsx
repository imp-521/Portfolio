import React from 'react'


type SectionHeadingProps = {
    title1 : string;
    title2 : string;
    description : string;
}


const SectionHeading = ({title1, title2, description} : SectionHeadingProps) => {
  return (
    <div className='w-full h-25 flex items-center justify-center flex-col gap-2 z-10'>
        <h1 className='font-bold text-3xl lg:text-4xl'>{title1} <span className='text-purple-500'>{title2}</span></h1>
        <p className='text-center text-muted-foreground text-sm'>{description}</p>
    </div>
  )
}

export default SectionHeading