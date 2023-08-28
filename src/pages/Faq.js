import React from 'react'
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';
import TestimonialSlide from '../components/testimonials/TestimonialSlide';
import Footer from '../components/footer/Footer';
import faqcontent from '../components/faq/faqcontent';



const Faq = () => {
  return (
    <div>
        <Breadcrumbs/>
        <faqcontent/>
        <TestimonialSlide/>
        <Footer/>
    </div>
  )
}

export default Faq