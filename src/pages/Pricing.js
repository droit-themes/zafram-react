import React from 'react'
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';
import Footer from '../components/footer/Footer';
import PricingContent from '../components/pricing/PricingContent';
import CallTAPricing from '../components/calltoaction/CallTAPricing';
import TestimonialsTwo from '../components/testimonials/TestimonialsTwo';
import faqcontent from '../components/faq/faqcontent';

const Pricing = () => {
  return (
    <div>
        <Breadcrumbs/>
        <PricingContent/>
        <CallTAPricing/>
        <TestimonialsTwo/>
        <faqcontent/>
        <Footer/>
    </div>
  )
}   

export default Pricing