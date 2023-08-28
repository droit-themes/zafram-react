import React from 'react'
import ShapeBg from '../../assets/images/pricing/shape-bg.svg'
import IconOne from '../../assets/images/pricing/pricing-2/icon-1.svg'
import IconTwo from '../../assets/images/pricing/pricing-2/icon-2.svg'
import IconThree from '../../assets/images/pricing/pricing-2/icon-3.svg'

const PricingContent = () => {
  return (
    <div>
          <section class="pricing-area style-2">
            <div class="pricing-bg-shape">
                <img class="thumbnail-image" src={ShapeBg} alt="#"/>
            </div>
            <div class="container">
                <div class="row justify-content-center">
                <div class="col-lg-8 col-md-8 col-12">
                    <div class="section-head text-center">
                    <span class="section-head-sm-title">Our Price Plan</span>
                    <h2 class="section-head-title">
                        Kind Words from our Happy Customers
                    </h2>
                    </div>
                </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="pricing-card style-2">
                        <div class="pricing-card-info">
                            <div class="pricing-card-icon">
                            <img src={IconOne} alt="#"/>
                            </div>
                            <h4 class="pricing-info-title">Silver Plan</h4>
                        </div>
                        <div class="pricing-card-list">
                            <ul class="pricing-card-list-inner">
                            <li><i class="fi fi-rs-check"></i>60 Unique Screens</li>
                            <li><i class="fi fi-rs-check"></i>Apps source file</li>
                            <li><i class="fi fi-rs-check"></i>400+ Free font</li>
                            <li><i class="fi fi-rs-check"></i>Color Source</li>
                            <li><i class="fi fi-rs-check"></i>All Sketch, Figma File</li>
                            <li><i class="fi fi-rs-check"></i>Unlimited Reviews</li>
                            </ul>
                            <div class="pricing-card-price">
                            <h5>$19.99</h5>
                            <p>up to 5 user + 1.99</p>
                            </div>
                            <div class="pricing-card-btn">
                            <a href="#" class="theme-btn">Buy Now<i class="fi-rr-arrow-small-right"></i></a>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="pricing-card style-2 active">
                        <div class="pricing-card-info">
                            <div class="pricing-card-icon">
                            <img src={IconTwo} alt="#"/>
                            </div>
                            <h4 class="pricing-info-title text-white">Gold Plan</h4>
                        </div>
                        <div class="pricing-card-list">
                            <ul class="pricing-card-list-inner">
                            <li><i class="fi fi-rs-check"></i>60 Unique Screens</li>
                            <li><i class="fi fi-rs-check"></i>Apps source file</li>
                            <li><i class="fi fi-rs-check"></i>400+ Free font</li>
                            <li><i class="fi fi-rs-check"></i>Color Source</li>
                            <li><i class="fi fi-rs-check"></i>All Sketch, Figma File</li>
                            <li><i class="fi fi-rs-check"></i>Unlimited Reviews</li>
                            </ul>
                            <div class="pricing-card-price">
                            <h5 class="text-white">$19.99</h5>
                            <p>up to 5 user + 1.99</p>
                            </div>
                            <div class="pricing-card-btn">
                            <a href="#" class="theme-btn">Buy Now<i class="fi-rr-arrow-small-right"></i></a>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="pricing-card style-2">
                        <div class="pricing-card-info">
                            <div class="pricing-card-icon">
                            <img src={IconThree} alt="#"/>
                            </div>
                            <h4 class="pricing-info-title">Diamond Plan</h4>
                        </div>
                        <div class="pricing-card-list">
                            <ul class="pricing-card-list-inner">
                            <li><i class="fi fi-rs-check"></i>60 Unique Screens</li>
                            <li><i class="fi fi-rs-check"></i>Apps source file</li>
                            <li><i class="fi fi-rs-check"></i>400+ Free font</li>
                            <li><i class="fi fi-rs-check"></i>Color Source</li>
                            <li><i class="fi fi-rs-check"></i>All Sketch, Figma File</li>
                            <li><i class="fi fi-rs-check"></i>Unlimited Reviews</li>
                            </ul>
                            <div class="pricing-card-price">
                            <h5>$19.99</h5>
                            <p>up to 5 user + 1.99</p>
                            </div>
                            <div class="pricing-card-btn">
                            <a href="#" class="theme-btn">Buy Now<i class="fi-rr-arrow-small-right"></i></a>
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

export default PricingContent