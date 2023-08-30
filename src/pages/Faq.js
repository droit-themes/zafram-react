import React from 'react'
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';
import TestimonialSlide from '../components/testimonials/TestimonialSlide';
import CallTAPricing from '../components/calltoaction/CallTAPricing';
import Footer from '../components/footer/Footer';
import OurFaq from '../components/faq/OurFaq';



const Faq = () => {
  return (
    <div>
        <Breadcrumbs/>
        <OurFaq/>
        <CallTAPricing/>
        <TestimonialSlide/>
        <Footer/>
    </div>
  )
}

export default Faq