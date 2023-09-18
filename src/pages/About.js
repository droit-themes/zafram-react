import React from 'react'
import Header from '../components/Header/Header'
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs'
import AboutAboutPage from '../components/aboutus/AboutAboutPage'
import AgencySkillArea from '../components/aboutus/AgencySkillArea'
import TeamSlide from '../components/team/TeamSlide'
import Footer from '../components/footer/Footer'
import TestimonialSlide from '../components/testimonials/TestimonialSlide'

const About = () => {
  return (
    <div>
        <Header/>
        <Breadcrumbs/>
        <AboutAboutPage/>
        <AgencySkillArea/>
        <TeamSlide/>
        <TestimonialSlide/>
        <Footer/>
        
    </div>
  )
}

export default About