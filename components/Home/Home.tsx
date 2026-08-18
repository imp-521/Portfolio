import React from 'react'
import Nav from '../Nav/Nav'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'


const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

export default Home