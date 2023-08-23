import React from 'react'

import Homeone from '../components/banner/homeone'
import Companyfactarea from '../components/fact-area/Companyfactarea'
import ServiceHomeOne from '../components/services/ServiceHomeOne'
import Strapone from '../components/marque/Strapone'
import AboutHomeOne from '../components/aboutus/AboutHomeOne'
import Call2AHomeOne from '../components/calltoaction/Call2AHomeOne'
import PortfolioHomOne from '../components/portfolio/PortfolioHomOne'
import PriceHomeOne from '../components/pricing/PriceHomeOne'
import ContactHomeOne from '../components/contact/ContactHomeOne'
import WhatWeDoArea from '../components/fact-area/WhatWeDoArea'
import BlogOne from '../components/blog/BlogOne'
import Header from '../components/Header/Header'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <Homeone/>
      <Companyfactarea/>
      <ServiceHomeOne/>
      <Strapone/>
      <AboutHomeOne/>
      <Call2AHomeOne/>
      <PortfolioHomOne/>
      <PriceHomeOne/>
      <ContactHomeOne/>
      <WhatWeDoArea/>
      <BlogOne/>
      <Footer/>
  </div>
  )
}

export default Home