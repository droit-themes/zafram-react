import React from 'react'
import BgImages from '../../assets/images/call-action/bg-image.png'

import ShapeOne from '../../assets/images/call-action/shape-1.svg'
import ShapeTwo from '../../assets/images/call-action/shape-2.svg'

const Call2AHomeOne = () => {
  return (
    <div>
        <section class="call-action-area">
          <div class="call-action-bg-image">
            <img class="thumbnail-image" src={BgImages}/>
          </div>
          <div class="call-action-shape shape-1">
            <img src={ShapeOne} alt="#" />
          </div>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8 col-md-8 col-12">
                <div class="call-action-content">
                  <h3 class="call-action-content-title">
                    Ready To Get Our Professional Agency Services ?
                  </h3>
                  <div class="call-action-content-btn">
                    <a href="team.html" class="theme-btn secondary"
                      >Meet The Team<i class="fi-rr-arrow-small-right"></i
                    ></a>
                    <a href="services.html" class="theme-btn"
                      >Our Services<i class="fi-rr-arrow-small-right"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="call-action-shape shape-2">
            <img src={ShapeTwo} alt="#" />
          </div>
      </section>
      </div>
  )
}

export default Call2AHomeOne