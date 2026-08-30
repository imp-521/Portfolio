import React from 'react'
import Nav from '../Nav/Nav'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Experience from '../Experience/Experience'
import ClientReview from '../ClientReview/ClientReview'


const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <ClientReview />
    </div>
  )
}

export default Home