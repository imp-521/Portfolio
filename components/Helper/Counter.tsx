'use client'
import React, { useEffect, useRef, useState } from 'react'


const Counter = ({target}) => {
    const [count, setCount] = useState(0)
    const [isInView, setIsInView] = useState(false)
    const ref = useRef(null)

    useEffect(()=>{
        if (isInView === false) return
        let timer ;
        timer = setInterval(() => {
           setCount(prev => {
            const next = prev + 1
            if(next >= target){
               clearInterval(timer)
               return target
            }
            return next
           })
       },50)
    return () =>{
        clearInterval(timer)
    }

    }, [isInView])

    useEffect(()=>{
        const observer = new IntersectionObserver((entries) =>{
            const isVisible = entries[0].isIntersecting
            setIsInView(isVisible)
        })
        observer.observe(ref.current)
        return () => {
            observer.unobserve(ref.current)
        }
    }, [])
  return (
    <div ref={ref}>
        {count}
    </div>
  )
}

export default Counter