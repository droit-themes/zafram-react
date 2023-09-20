import React from 'react'
import Header from '../components/Header/Header'
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';
import Footer from '../components/footer/Footer';
import PricingContent from '../components/pricing/PricingContent';
import CallTAPricing from '../components/calltoaction/CallTAPricing';
import TestimonialsTwo from '../components/testimonials/TestimonialsTwo';
import faqcontent from '../components/faq/faqcontent';

const Pricing = () => {
  return (
    <div>
        <Header/>
        <Breadcrumbs/>
        <PricingContent/>
        <CallTAPricing/>
        <TestimonialsTwo/>
        <Footer/>
    </div>
  )
}   

export default Pricing