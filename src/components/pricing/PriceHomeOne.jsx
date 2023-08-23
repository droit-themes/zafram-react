import React from 'react'
import ShapeBg from '../../assets/images/pricing/shape-bg.svg';
import IconOne from '../../assets/images/pricing/icon-1.svg';
import IconTwo from '../../assets/images/pricing/icon-2.svg';

const PriceHomeOne = () => {
  return (
    <div>
        <section class="pricing-area">
            <div class="pricing-bg-shape">
                <img class="thumbnail-image" src={ShapeBg} alt="#"/>
            </div>
            <div class="container">
                <div class="row justify-content-center">
                <div class="col-lg-8 col-md-8 col-12 wow fadeInUp">
                    <div class="section-head text-center">
                    <span class="section-head-sm-title">Our Price Plan</span>
                    <h2 class="section-head-title">
                        Kind Words from our Happy Customers
                    </h2>
                    </div>
                </div>
                </div>
                <div class="row">
                <div class="col-lg-6 col-12 wow fadeInUp">
                    <div class="pricing-card">
                    <div class="pricing-card-info">
                        <div class="pricing-card-icon">
                        <img src={IconOne} alt="#" />
                        </div>
                        <h4 class="pricing-info-title">Silver Plan</h4>
                        <div class="pricing-card-price">
                        <h5>$19.99</h5>
                        <p>up to 5 user + 1.99</p>
                        </div>
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
                        <div class="pricing-card-btn">
                        <a href="#" class="theme-btn"
                            >Buy Now<i class="fi-rr-arrow-small-right"></i
                        ></a>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-lg-6 col-12 wow fadeInUp">
                    <div class="pricing-card active">
                    <div class="pricing-card-info">
                        <div class="pricing-card-icon">
                        <img src={IconTwo} alt="#" />
                        </div>
                        <h4 class="pricing-info-title text-white">Silver Plan</h4>
                        <div class="pricing-card-price">
                        <h5 class="text-white">$19.99</h5>
                        <p>up to 5 user + 1.99</p>
                        </div>
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
                        <div class="pricing-card-btn">
                        <a href="#" class="theme-btn"
                            >Buy Now<i class="fi-rr-arrow-small-right"></i
                        ></a>
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

export default PriceHomeOne