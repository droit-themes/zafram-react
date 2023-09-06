import React from 'react'
import HeroBg from '../../assets/images/hero-banner/hero-2/hero-bg-2.svg'
import Team_01 from '../../assets/images/hero-banner/hero-2/team-1.png'
import Team_02 from '../../assets/images/hero-banner/hero-2/team-2.png'
import Team_03 from '../../assets/images/hero-banner/hero-2/team-3.png'
import Team_04 from '../../assets/images/hero-banner/hero-2/team-4.png'
import Team_05 from '../../assets/images/hero-banner/hero-2/team-5.png'

import ContentBG from '../../assets/images/hero-banner/hero-2/hero-img.png'

const BannerHomeTwo = () => {
  return (
    <div>
       <section class="hero-area hero-style-2 background-image">
        <div class="hero-bg-shape style-2">
          <img  class="thumbnail-image"  src={HeroBg} alt="#"/>
        </div>
        <div class="container">
          <div class="hero-content-top style-2">
            <div class="row align-items-center">
              <div class="col-lg-12 col-xl-7 col-12 wow fadeInUp">
                <div class="hero-content-top-title">
                  <h1>The Best Smart Agency Consulting Business Solution</h1>
                </div>
              </div>
              <div class="col-lg-12 col-xl-5 col-12 wow fadeInUp">
                <div class="hero-join-us">
                  <p class="hero-join-us-text">
                    When you need us for improve your business, then come with us
                    to help your business have reach it you just sit and feel that
                    goal
                  </p>
                  <div class="hero-join-us-widget">
                    <ul class="hero-join-us-widget-list">
                      <li>
                        <img src={Team_01} alt="#"/>
                      </li>
                      <li>
                        <img src={Team_02} alt="#"/>
                      </li>
                      <li>
                        <img src={Team_03} alt="#"/>
                      </li>
                      <li>
                        <img src={Team_04} alt="#"/>
                      </li>
                      <li>
                        <img src={Team_05} alt="#"/>
                      </li>
                    </ul>
                    <div class="hero-join-us-widget-info">
                      <h4>36k+</h4>
                      <p>Join Us Agency</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="hero-content-bottom style-2">
            <div class="row">
              <div class="col-lg-7 col-xl-9 col-md-7 col-12 wow fadeInUp">
                <div class="hero-content-bottom-img">
                  <img src={ContentBG} alt="#"/>
                </div>
              </div>
              <div class="col-lg-5 col-xl-3 col-md-5 col-12 wow fadeInUp">
                <div class="hero-funfact">
                  <div class="hero-funfact-single">
                    <h6><span class="counter">16</span>+</h6>
                    <p>Years of Experiences</p>
                  </div>
                  <div class="hero-funfact-single">
                    <h6><span class="counter">29</span>k+</h6>
                    <p>Projects Completed</p>
                  </div>
                  <div class="hero-funfact-single">
                    <h6><span class="counter">102</span>k+</h6>
                    <p>Trusted Companies</p>
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

export default BannerHomeTwo