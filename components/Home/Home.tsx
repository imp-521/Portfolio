"use client"
import React from 'react'
import Nav from '../Nav/Nav'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Experience from '../Experience/Experience'
import ClientReview from '../ClientReview/ClientReview'
import Contact from '../ Contact/Contact'
import Footer from '../Footer/Footer'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Home = () => {
  useEffect(() => {
    AOS.init({
    duration: 1000,
    once: true,
    easing: "ease",
    anchorPlacement: "top-bottom"
    });
  }, []);
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <ClientReview />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home