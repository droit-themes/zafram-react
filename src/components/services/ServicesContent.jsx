import React from 'react'
import ServiceImg from '../../assets/images/services/services-2/service-img-1.png'
import ServiceIcon from '../../assets/images/services/services-2/icon-1.svg'
import ArrayIcon from '../../assets/images/services/services-2/arrow-icon.svg'

const ServicesContent = () => {
  return (
    <div>
         <section class="service-area service-style-2">
            <div class="container">
                <div class="row">
                <div class="col-lg-7 col-12">
                    <div class="service-section-head style-2">
                    <span class="service-section-head-sm-title">We Offer Services</span>
                    <h2 class="service-section-head-big-title">
                        We Provide Full Range Services
                    </h2>
                    </div>
                </div>
                </div>
                <div class="row">
                <div class="col-12">
                    <div class="service-inner">
                   
                    <a href="#" class="service-single-widget" data-image={ServiceImg}>
                        <div class="service-single-widget-info">
                        <div class="service-single-widget-info-icon">
                            <img src={ServiceIcon} alt="#"/>
                        </div>
                        <div class="service-single-widget-info-content">
                            <p>Uiux Design</p>
                            <h4>Maintenance Update Services</h4>
                        </div>
                        </div>
                        <div class="service-single-widget-btn">
                        <span href="#"><img src={ArrayIcon}/></span>
                        </div>
                        <div class="service-image-preview"></div>
                        <div class="service-image-preview-overlay"></div>
                    </a>

                    <a href="#" class="service-single-widget" data-image={ServiceImg}>
                        <div class="service-single-widget-info">
                        <div class="service-single-widget-info-icon">
                            <img src={ServiceIcon} alt="#"/>
                        </div>
                        <div class="service-single-widget-info-content">
                            <p>Uiux Design</p>
                            <h4>Maintenance Update Services</h4>
                        </div>
                        </div>
                        <div class="service-single-widget-btn">
                        <span href="#"><img src={ArrayIcon}/></span>
                        </div>
                        <div class="service-image-preview"></div>
                        <div class="service-image-preview-overlay"></div>
                    </a>

                    <a href="#" class="service-single-widget" data-image={ServiceImg}>
                        <div class="service-single-widget-info">
                        <div class="service-single-widget-info-icon">
                            <img src={ServiceIcon} alt="#"/>
                        </div>
                        <div class="service-single-widget-info-content">
                            <p>Uiux Design</p>
                            <h4>Maintenance Update Services</h4>
                        </div>
                        </div>
                        <div class="service-single-widget-btn">
                        <span href="#"><img src={ArrayIcon}/></span>
                        </div>
                        <div class="service-image-preview"></div>
                        <div class="service-image-preview-overlay"></div>
                    </a>

                    <a href="#" class="service-single-widget" data-image={ServiceImg}>
                        <div class="service-single-widget-info">
                        <div class="service-single-widget-info-icon">
                            <img src={ServiceIcon} alt="#"/>
                        </div>
                        <div class="service-single-widget-info-content">
                            <p>Uiux Design</p>
                            <h4>Maintenance Update Services</h4>
                        </div>
                        </div>
                        <div class="service-single-widget-btn">
                        <span href="#"><img src={ArrayIcon}/></span>
                        </div>
                        <div class="service-image-preview"></div>
                        <div class="service-image-preview-overlay"></div>
                    </a>
                    
                    </div>
                </div>
                </div>
            </div>
        </section>

    </div>
  )
}

export default ServicesContent