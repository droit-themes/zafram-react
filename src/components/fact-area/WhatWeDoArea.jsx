import React from 'react'
import IconOne from '../../assets/images/support-highlight/icon-1.svg';
import IconTwo from '../../assets/images/support-highlight/icon-2.svg';
import IconThree from '../../assets/images/support-highlight/icon-3.svg';
import WhatWeDo from '../../assets/images/what-we-do/what-we-do-img.png';
import BgShape from '../../assets/images/what-we-do/bg-shape.svg';

const WhatWeDoArea = () => {
  return (
    <div>
        <section class="what-we-do-area">
            <div class="support-highlight">
                <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-12 wow fadeInUp">
                    <div class="support-highlight-card">
                        <div class="support-highlight-icon">
                        <img src={IconOne} alt="#"/>
                        </div>
                        <div class="s-highlight-card-content">
                        <h5>Quick Response</h5>
                        <p>
                            There are many variations of passa Ipsum available but the
                        </p>
                        </div>
                    </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-12 wow fadeInUp">
                    <div class="support-highlight-card">
                        <div class="support-highlight-icon">
                        <img src={IconTwo} alt="#"/>
                        </div>
                        <div class="s-highlight-card-content">
                        <h5>Care our Customers</h5>
                        <p>
                            There are many variations of passa Ipsum available but the
                        </p>
                        </div>
                    </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-12 wow fadeInUp">
                    <div class="support-highlight-card">
                        <div class="support-highlight-icon">
                        <img src={IconThree} alt="#"/>
                        </div>
                        <div class="s-highlight-card-content">
                        <h5>24/7 Hours Support</h5>
                        <p>
                            There are many variations of passa Ipsum available but the
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="what-we-do-inner">
                <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-12 wow fadeInLeft">
                    <div class="what-we-do-content">
                        <span class="what-we-do-sm-title">What We Do</span>
                        <h2 class="what-we-do-big-title">
                        A Better Website Means User Experience
                        </h2>
                        <div class="what-we-do-info">
                        <div class="what-we-do-info-widget">
                            <div class="what-we-do-info-icon">
                            <i class="fi fi-rs-check"></i>
                            </div>
                            <div class="what-we-do-info-content">
                            <h6>Content Strategy</h6>
                            <p>
                                There are many variations of passages of Lorem aIpsum
                                but the majority have suffered alteration
                            </p>
                            </div>
                        </div>
                        <div class="what-we-do-info-widget">
                            <div class="what-we-do-info-icon">
                            <i class="fi fi-rs-check"></i>
                            </div>
                            <div class="what-we-do-info-content">
                            <h6>Agency Management</h6>
                            <p>
                                There are many variations of passages of Lorem aIpsum
                                but the majority have suffered alteration
                            </p>
                            </div>
                        </div>
                        <div class="what-we-do-info-widget">
                            <div class="what-we-do-info-icon">
                            <i class="fi fi-rs-check"></i>
                            </div>
                            <div class="what-we-do-info-content">
                            <h6>Work Dedication</h6>
                            <p>
                                There are many variations of passages of Lorem Ipsum but
                                the majority have suffered alteration
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-lg-6 col-12 wow fadeInRight">
                    <div class="what-we-do-img">
                        <img src={WhatWeDo} alt="#"/>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="what-we-do-shape-bg">
                <img src={BgShape} alt="#"/>
            </div>
        </section>
    </div>
  )
}

export default WhatWeDoArea