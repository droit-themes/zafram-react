import React from 'react'
import ImgOne from '../../assets/images/portfolio/portfolio-2/project-img-1.png'
import ImgTwo from '../../assets/images/portfolio/portfolio-2/project-img-2.png'
import ImgThree from '../../assets/images/portfolio/portfolio-2/project-img-3.png'
import ImgFour from '../../assets/images/portfolio/portfolio-2/project-img-4.png'

const WordPortfolio = () => {
  return (
    <div>
        <section class="portfolio-area portflio-style-2">
            <div class="container">
                <div class="row justify-content-center">
                <div class="col-lg-8 col-xl-6 col-md-8 col-12 wow fadeInUp">
                    <div class="section-head text-center m-0">
                    <span class="section-head-sm-title">My Works & Portfolio</span>
                    <h2 class="section-head-title">
                        Impressive Portfolio in Our Work Gallery
                    </h2>
                    </div>
                </div>
                </div>
                <div class="row wow fadeInUp">
                <div class="col-lg-6 col-md-6 col-12">
                    
                    <a href="project-details.html" class="single-portfolio">
                    <div class="portfolio-image">
                        <img src={ImgOne} alt="#"/>
                    </div>
                    <div class="portfolio-content">
                        <span>Content Writing</span>
                        <h4>Scene of Dimensional</h4>
                    </div>
                    </a>
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                    
                    <a href="project-details.html" class="single-portfolio">
                    <div class="portfolio-image">
                    <img src={ImgTwo} alt="#"/>
                    </div>
                    <div class="portfolio-content">
                        <span>Business Agency</span>
                        <h4>Hand Hold Light Bulb</h4>
                    </div>
                    </a>
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                    
                    <a href="project-details.html" class="single-portfolio">
                    <div class="portfolio-image">
                        <img src={ImgThree} alt="#"/>
                    </div>
                    <div class="portfolio-content">
                        <span>Goal Concept</span>
                        <h4>3d Rendering of Business</h4>
                    </div>
                    </a>
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                   
                    <a href="project-details.html" class="single-portfolio margin-add">
                    <div class="portfolio-image">
                        <img src={ImgFour} alt="#"/>
                    </div>
                    <div class="portfolio-content">
                        <span>Finance Analytics</span>
                        <h4>3D Rendering of Graphic Design</h4>
                    </div>
                    </a>
                </div>
                </div>
            </div>
        </section>


    </div>
  )
}

export default WordPortfolio