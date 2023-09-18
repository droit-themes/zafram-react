import React from 'react'
import PortfolioOne from '../../assets/images/portfolio/portfolio-3/portfolio-1.png'
import PortfolioTwo from '../../assets/images/portfolio/portfolio-3/portfolio-2.png'
import PortfolioThree from '../../assets/images/portfolio/portfolio-3/portfolio-3.png'
import PortfolioFour from '../../assets/images/portfolio/portfolio-3/portfolio-4.png'


import IconOne from '../../assets/images/portfolio/portfolio-3/icon-1.svg'
import IconTwo from '../../assets/images/portfolio/portfolio-3/icon-2.svg'
import IconThree from '../../assets/images/portfolio/portfolio-3/icon-3.svg'
import IconFour from '../../assets/images/portfolio/portfolio-3/icon-4.svg'

const PortfolioSlider = () => {
  return (
    <div>
        <div class="portfolio-section-bg style-3 background-image" style=" background-image: url('./assets/images/portfolio/portfolio-3/section-bg.png');"></div>
        <section class="portfolio-area style-3">
            <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-12">
                <div class="section-head">
                    <span class="section-head-sm-title">Our Best Works</span>
                    <h2 class="section-head-title">
                    Impressive Portfolio in <br />Our Work Gallery
                    </h2>
                </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                <div class="portfolio-card-slider style-3">
                    
                    <div class="single-portfolio">
                        <div class="portfolio-image">
                            <img src={PortfolioOne} alt="#"/>
                        </div>
                        <div class="portfolio-info">
                            <div class="portfolio-info-icon">
                            <img src={IconOne} alt="#"/>
                            </div>
                            <div class="portfolio-info-content">
                            <h4>Web Development</h4>
                            <p>
                                We offer our customer prerty into to protection of
                                liability to the fint to a in brack to larong into the
                                head infor the their.
                            </p>
                            <a href="#" class="portfolio-info-btn">See full Project<i class="fi-rr-arrow-small-right"></i></a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="single-portfolio">
                        <div class="portfolio-image">
                            <img src={PortfolioTwo} alt="#"/>
                        </div>
                        <div class="portfolio-info">
                            <div class="portfolio-info-icon">
                            <img src={IconTwo} alt="#"/>
                            </div>
                            <div class="portfolio-info-content">
                            <h4>Web Development</h4>
                            <p>
                                We offer our customer prerty into to protection of
                                liability to the fint to a in brack to larong into the
                                head infor the their.
                            </p>
                            <a href="#" class="portfolio-info-btn">See full Project<i class="fi-rr-arrow-small-right"></i></a>
                            </div>
                        </div>
                    </div>
                   
                    <div class="single-portfolio">
                        <div class="portfolio-image">
                            <img src={PortfolioThree} alt="#"/>
                        </div>
                        <div class="portfolio-info">
                            <div class="portfolio-info-icon">
                            <img src={IconThree}  alt="#"/>
                            </div>
                            <div class="portfolio-info-content">
                            <h4>Web Development</h4>
                            <p>
                                We offer our customer prerty into to protection of
                                liability to the fint to a in brack to larong into the
                                head infor the their.
                            </p>
                            <a href="#" class="portfolio-info-btn">See full Project<i class="fi-rr-arrow-small-right"></i></a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="single-portfolio">
                        <div class="portfolio-image">
                            <img src={PortfolioFour} alt="#"/>
                        </div>
                        <div class="portfolio-info">
                            <div class="portfolio-info-icon">
                            <img src={IconFour} alt="#"/>
                            </div>
                            <div class="portfolio-info-content">
                            <h4>Web Development</h4>
                            <p>
                                We offer our customer prerty into to protection of
                                liability to the fint to a in brack to larong into the
                                head infor the their.
                            </p>
                            <a href="#" class="portfolio-info-btn">See full Project<i class="fi-rr-arrow-small-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

    </div>
  )
}

export default PortfolioSlider