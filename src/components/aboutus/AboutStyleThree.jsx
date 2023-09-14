import React from 'react'

import clientImg from '../../assets/images/about-us/client/client-1.png'
import AboutImg from '../../assets/images/about-us/about-3/about-img.png'
import CheckCircle from '../../assets/images/icons/check-circle.svg'
import AboutShape from '../../assets/images/about-us/about-3/shape.svg'

const AboutStyleThree = () => {
  return (
    <div>
    <section class="about-area style-3">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-12 wow fadeInLeft">
            <div class="about-left">
              <div class="about-client-widget style-3">
                <span>1.5k+ Clients</span>
                <ul class="about-client-list">
                  <li><a href="#"><img src={clientImg} alt="#"/></a></li>
                  <li><a href="#"><img src={clientImg} alt="#"/></a></li>
                  <li><a href="#"><img src={clientImg} alt="#"/></a></li>
                </ul>
              </div>
              <div class="about-image style-3">
               <img src={AboutImg} alt="#"/>
              </div>
              <div class="about-experience-card">
                <h4>25<span>Years</span></h4>
                <p>Experience</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-12 wow fadeInRight">
            <div class="about-content">
              <h2 class="about-content-title">
                Driving Business Growth with Creativity Meet Our
                <span>Agency's</span>
                <span>Experts</span>
              </h2>
              <p class="about-content-text">
                We offer our customer prerty into protection of liability to the
                fint to a brack to larong into the head infor their
              </p>
              <ul class="about-content-list">
                <li>
                 <img src={CheckCircle} alt="#"/> The Power of Creativity Unleashed
                </li>
                <li>
                <img src={CheckCircle} alt="#"/> Discover Our Agency's Story and Vision
                </li>
              </ul>
              <div class="about-content-bottom">
                <div class="about-cont-btm-widget">
                  <h5>1.5K</h5>
                  <p>Satisfied Clients</p>
                </div>
                <div class="about-cont-btm-widget">
                  <h5>2.5K</h5>
                  <p>Completed Projects</p>
                </div>
              </div>
              <div class="about-content-btn">
                <a href="about.html" class="theme-btn"> Read More <i class="fi-rr-arrow-small-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="about-section-shape style-3">
        <img src={AboutShape} alt="#"/>
      </div>
    </section>

    </div>
  )
}

export default AboutStyleThree