import React from 'react'
import Header from '../components/Header/Header';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';
import TeamGrid from '../components/team/TeamGrid';
import TestimonialSlide from '../components/testimonials/TestimonialSlide';
import CallTAPricing from '../components/calltoaction/CallTAPricing';
import Footer from '../components/footer/Footer';


const Team = () => {
  return (
    <div>
        <Header/>
        <Breadcrumbs/>
        <TeamGrid/>
        <CallTAPricing/>
        <TestimonialSlide/>
        <Footer/>
    </div>
  )
}

export default Team