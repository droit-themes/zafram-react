import React from 'react'
import checkCircle from '../../assets/images/icons/check-circle.svg';
import users from '../../assets/images/icons/users.svg';
import aboutImg from '../../assets/images/about-us/about-2/about-img-2.png';

const AboutAboutPage = () => {
  return (
    <div>

        <section class="about-area about-page about-style-2">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-5 col-12">
                        <div class="about-content style-2">
                        <span class="about-content-sm-title">About the company</span>
                        <h2 class="about-content-big-title">
                            We provide the best design solution
                        </h2>
                        <p class="about-content-text">
                            Our passion for sustainability has driven us to refine our proce
                            leaders in web sustainability and performance helping to shift
                            towards a zero-carbon future.
                        </p>
                        <ul class="about-content-list">
                            <li>
                                <img src={checkCircle} alt="#"/> Business Advisory
                            </li>
                            <li>
                            <img src={checkCircle} alt="#"/>Business Consulting
                            </li>
                            <li>
                            <img src={checkCircle} alt="#"/>Responsibility of Corporate
                            </li>
                            <li>
                            <img src={checkCircle} alt="#"/>Innovative Ideas
                            </li>
                        </ul>
                        <div class="about-content-btn">
                            <a href="#" class="theme-btn">Read More<i class="fi-rr-arrow-small-right"></i></a>
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-6 offset-lg-1 col-12">
                        <div class="about-right style-2">
                        <div class="about-right-top-widget">
                            <div class="about-right-top-info">
                            <div class="about-right-top-info-icon">
                                <img src={users} alt="#" />
                            </div>
                            <div class="about-right-top-info-content">
                                <h4>80K</h4>
                                <p>Happy Customers</p>
                            </div>
                            </div>
                            <div class="about-img">
                            <img src={aboutImg} alt="#"/>
                            </div>
                        </div>
                        <div class="about-right-bottom-content background-image aboutRightBg">
                            <div class="about-right-bottom-widget">
                            <h4>2Million</h4>
                            <p>Work Hours</p>
                            </div>
                            <div class="bout-right-bottom-widget-info">
                            <p class="about-right-bottom-text">
                                The High Standard Trusted & Professional Services
                            </p>
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

export default AboutAboutPage