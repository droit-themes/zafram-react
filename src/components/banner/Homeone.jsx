import React from 'react'
import BannerOne from '../../assets/images/hero-banner/banner-1.png';
 


const Homeone = () => {
  return (
    <div>
      <div className='section-bg-image background-image'></div>
      <section class="hero-area mg-top-46">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="hero-content">
                <h1>
                  Our Agency's Vision for the <br />Next Generation of <br />Advertising
                </h1>
                <div class="hero-video-image">
                  <div class="hero-video-main">
                    <a href="https://www.youtube.com/watch?v=gyGsPlt06bo" class="video-popup-img popup-video">
                      <img src={BannerOne} alt="hero-banner" />
                      <i class="icofont-ui-play"></i>
                    </a>
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

export default Homeone