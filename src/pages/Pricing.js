import React from 'react'
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';
import Footer from '../components/footer/Footer';
import PricingContent from '../components/pricing/PricingContent';
import CallTAPricing from '../components/calltoaction/CallTAPricing';
import TestimonialsTwo from '../components/testimonials/TestimonialsTwo';

const Pricing = () => {
  return (
    <div>
        <Breadcrumbs/>
        <PricingContent/>
        <CallTAPricing/>
        <TestimonialsTwo/>
        <Footer/>
    </div>
  )
}   

export default Pricing