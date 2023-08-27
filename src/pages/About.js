import React from 'react'
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs'
import AboutAboutPage from '../components/aboutus/AboutAboutPage'
import AgencySkillArea from '../components/aboutus/AgencySkillArea'
import TeamSlide from '../components/team/TeamSlide'
import Footer from '../components/footer/Footer'

const About = () => {
  return (
    <div>
        <Breadcrumbs/>
        <AboutAboutPage/>
        <AgencySkillArea/>
        <TeamSlide/>
        <Footer/>
        
    </div>
  )
}

export default About