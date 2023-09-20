import React from 'react'
import Header from '../components/Header/Header'
import BannerHomeTwo from '../components/banner/BannerHomeTwo'
import AboutAboutPage from '../components/aboutus/AboutAboutPage'
import AgencySkillArea from '../components/aboutus/AgencySkillArea'
import ServicesContent from '../components/services/ServicesContent'
import Call2AHomeOne from '../components/calltoaction/Call2AHomeOne'
import WordPortfolio from '../components/portfolio/WordPortfolio'
import ContactHomeOne from '../components/contact/ContactHomeOne'
import FaqHomTwo from '../components/faq/FaqHomTwo'
import TestimonialSlide from '../components/testimonials/TestimonialSlide'
import Footer from '../components/footer/Footer'
import BlogOne from '../components/blog/BlogOne'




const HomeTwo = () => {
  return (
    <div>
        <Header/>
        <BannerHomeTwo/>
        <AboutAboutPage/>
        <AgencySkillArea/>
        <ServicesContent/>
        <Call2AHomeOne/>
        <WordPortfolio/>
        <ContactHomeOne/>
        <TestimonialSlide/>
        <FaqHomTwo/>
        <BlogOne/>
        <Footer/>
      

    </div>
  )
}

export default HomeTwo