import React from 'react'
import ServiceIcon from '../../assets/images/services/icon-1.svg'
import ServiceIcon2 from '../../assets/images/services/icon-2.svg'
import ServiceIcon3 from '../../assets/images/services/icon-3.svg'
import ServiceIcon4 from '../../assets/images/services/icon-4.svg'

const ServiceSlider = () => {
  return (
    <div>
        <section class="service-area style-3">
            <div class="container-fluid">
                <div class="row">
                <div class="col-12">
                    <div class="service-card-slider style-3">
                    <div class="service-card">
                        <div class="service-card-icon">
                        <img src={ServiceIcon} alt="#" />
                        </div>
                        <div class="service-card-content">
                        <h4 class="service-card-title">Web Development</h4>
                        <p class="service-card-text">
                            We offer our customer prerty into to protection of liability
                            to the fint to a in brack to larong into the head infor the
                            their to a better life.
                        </p>
                        <div class="service-card-btn">
                            <a href="#">Learn More<i class="fi fi-rr-arrow-small-right"></i></a>
                        </div>
                        </div>
                    </div>
                    
                    <div class="service-card">
                        <div class="service-card-icon">
                        <img src={ServiceIcon2} alt="#" />
                        </div>
                        <div class="service-card-content">
                        <h4 class="service-card-title">Seo Marketing</h4>
                        <p class="service-card-text">
                            We offer our customer prerty into to protection of liability
                            to the fint to a in brack to larong into the head infor the
                            their to a better life.
                        </p>
                        <div class="service-card-btn">
                            <a href="#">Learn More<i class="fi fi-rr-arrow-small-right"></i></a>
                        </div>
                        </div>
                    </div>
                   
                    <div class="service-card">
                        <div class="service-card-icon">
                        <img src={ServiceIcon3} alt="#" />
                        </div>
                        <div class="service-card-content">
                        <h4 class="service-card-title">Video Editing</h4>
                        <p class="service-card-text">
                            We offer our customer prerty into to protection of liability
                            to the fint to a in brack to larong into the head infor the
                            their to a better life.
                        </p>
                        <div class="service-card-btn">
                            <a href="#">Learn More<i class="fi fi-rr-arrow-small-right"></i></a>
                        </div>
                        </div>
                    </div>
                   
                    <div class="service-card">
                        <div class="service-card-icon">
                        <img src={ServiceIcon4} alt="#" />
                        </div>
                        <div class="service-card-content">
                        <h4 class="service-card-title">Creative Agency</h4>
                        <p class="service-card-text">
                            We offer our customer prerty into to protection of liability
                            to the fint to a in brack to larong into the head infor the
                            their to a better life.
                        </p>
                        <div class="service-card-btn">
                            <a href="#">Learn More<i class="fi fi-rr-arrow-small-right"></i></a>
                        </div>
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

export default ServiceSlider