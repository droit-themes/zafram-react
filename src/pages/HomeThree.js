import React from 'react'
import BannerHomeThree from '../components/banner/BannerHomeThree'
import AboutStyleThree from '../components/aboutus/AboutStyleThree'
import PricingContent from '../components/pricing/PricingContent'
import CallTAPricing from '../components/calltoaction/CallTAPricing'
import BlogOne from '../components/blog/BlogOne'
import Footer from '../components/footer/Footer'

const HomeThree = () => {
  return (
    <div>
        <h2>Home Two Page</h2>
        <BannerHomeThree/>
        <AboutStyleThree/>
        <CallTAPricing/>
        <PricingContent/>
        <BlogOne/>
        <Footer/>
    </div>
  )
}

export default HomeThree