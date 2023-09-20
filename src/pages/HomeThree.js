import React from 'react'
import Header from '../components/Header/Header'
import BannerHomeThree from '../components/banner/BannerHomeThree'
import ServiceSlider from '../components/services/ServiceSlider'
import AboutStyleThree from '../components/aboutus/AboutStyleThree'
import MaquerShape from '../components/marque/MaquerShape'
import PortfolioSlider from '../components/portfolio/PortfolioSlider'
import AboutThreeTwo from '../components/aboutus/AboutThreeTwo'
import PricingContent from '../components/pricing/PricingContent'
import CallTAPricing from '../components/calltoaction/CallTAPricing'
import BrandArea from '../components/fact-area/BrandArea'
import MarqueTwo from '../components/marque/MarqueTwo'
import TeamSlide from '../components/team/TeamSlide'
import BlogOne from '../components/blog/BlogOne'
import Footer from '../components/footer/Footer'

const HomeThree = () => {
  return (
    <div>
        <Header/>
        <BannerHomeThree/>
        <ServiceSlider/>
        <AboutStyleThree/>
        <MaquerShape/>
      
        <AboutThreeTwo/>
        <BrandArea/>
        <MarqueTwo/>
        <TeamSlide/>
        <CallTAPricing/>
        <PricingContent/>
        <BlogOne/>
        <Footer/>
    </div>
  )
}

export default HomeThree