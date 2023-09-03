import React from 'react'

import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';
import Footer from '../components/footer/Footer';
import ServicesContent from '../components/services/ServicesContent';
import PricingContent from '../components/pricing/PricingContent';
import Call2AHomeOne from '../components/calltoaction/Call2AHomeOne';
import WhatWeDoArea from '../components/fact-area/WhatWeDoArea'

const Services = () => {
  return (
    <div>
        <Breadcrumbs/>
        <ServicesContent/>
        <PricingContent/>
        <Call2AHomeOne/>
        <WhatWeDoArea/>
        <Footer/>
    </div>
  )
}

export default Services