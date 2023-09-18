import React from 'react'
import BrandOne from '../../assets/images/brand/brand-1.png'
import BrandTwo from '../../assets/images/brand/brand-2.png'
import BrandThree from '../../assets/images/brand/brand-3.png'
import BrandFour from '../../assets/images/brand/brand-4.png'
import BrandFive from '../../assets/images/brand/brand-5.png'
import BrandSix from '../../assets/images/brand/brand-6.png'


const BrandArea = () => {
  return (
    <div>
    <section class="brand-area">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-6 col-12">
            <h3 class="brand-section-head-title">
              Take care of more than 100K customers
            </h3>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="brand-slider">
              
              <a href="#" target="_blank" class="single-brand">
                <img src={BrandOne} alt="#" />
              </a>
             
              <a href="#" target="_blank" class="single-brand">
              <img src={BrandTwo} alt="#" />
              </a>
             
              <a href="#" target="_blank" class="single-brand">
              <img src={BrandThree} alt="#" />
              </a>
             
              <a href="#" target="_blank" class="single-brand">
              <img src={BrandFour} alt="#" />
              </a>
             
              <a href="#" target="_blank" class="single-brand">
              <img src={BrandFive} alt="#" />
              </a>
             
              <a href="#" target="_blank" class="single-brand">
              <img src={BrandSix} alt="#" />
              </a>
             
              <a href="#" target="_blank" class="single-brand">
              <img src={BrandOne} alt="#" />
              </a>
             
              <a href="#" target="_blank" class="single-brand">
              <img src={BrandTwo} alt="#" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    </div>
  )
}

export default BrandArea