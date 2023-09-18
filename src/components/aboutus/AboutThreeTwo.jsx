import React from 'react'
import Flug from '../../assets/images/icons/flug.svg'
import ClientOne from '../../assets/images/about-us/client/client-1.png'
import ClientTwo from '../../assets/images/about-us/client/client-2.png'
import ClientThree from '../../assets/images/about-us/client/client-3.png'
import ClientFour from '../../assets/images/about-us/client/client-4.png'
import MoreIcon from '../../assets/images/about-us/more-icon.svg'
import AboutImages from '../../assets/images/about-us/about-3/about-img-2.png'
import CircalButton from '../../assets/images/circle-button.svg'




const AboutThreeTwo = () => {
  return (
    <div>
    <section class="about-area style-4">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-12 wow fadeInLeft">
            <div class="about-content style-3">
              <h2 class="about-content-title">
                We have a success story, Let us help you make your
                <span>Dreams a</span>
                <span> reality</span>
              </h2>
              <p class="about-content-text">
                We have a success story that revolves around our ability to
                transform your ideas into reality.
              </p>
              <p class="about-content-text mg-top-25">
                Our team is dedicated to bringing your vision to life, and we
                pride ourselves on our track record of success. Let us help you
                make your dreams a reality.
              </p>
              <div class="about-content-bottom style-3">
                <div class="about-cont-btm-widget style-3">
                  <div class="about-cont-widget-icon">
                    <img src={Flug} alt="#" />
                  </div>
                  <div class="about-cont-widget-info">
                    <h5>75%</h5>
                    <p>Work Done</p>
                  </div>
                </div>
                <div class="about-cont-btm-widget style-3">
                  <div class="about-cont-widget-icon">
                    <img src={Flug} alt="#" />
                  </div>
                  <div class="about-cont-widget-info">
                    <h5>95%</h5>
                    <p>Clients Satisfaction</p>
                  </div>
                </div>
              </div>
              <div class="about-content-btn">
                <a href="#" class="theme-btn">Read More<i class="fi-rr-arrow-small-right"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-12 wow fadeInRight">
            <div class="about-left">
              <div class="about-client-widget style-3">
                <span>1.5k+ Clients</span>
                <ul class="about-client-list">
                  <li>
                    <a href="#"><img src={ClientOne} alt="#"/></a>
                  </li>
                  <li>
                    <a href="#"><img src={ClientTwo} alt="#"/></a>
                  </li>
                  <li>
                    <a href="#"><img src={ClientThree} alt="#"/></a>
                  </li>
                  <li>
                    <a href="#"><img src={ClientFour} alt="#"/></a>
                  </li>
                  <li>
                    <a href="#"><img src={MoreIcon} alt="#"/></a>
                  </li>
                </ul>
              </div>
              <div class="about-image style-4">
                <img src={AboutImages} alt="#"/>
              </div>
              <div class="about-circle-btn">
                <a href="#"><img src={CircalButton} alt="#"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </div>
  )
}

export default AboutThreeTwo