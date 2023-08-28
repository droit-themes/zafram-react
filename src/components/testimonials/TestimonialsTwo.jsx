import React from 'react'
import tesfixedImg from '../../assets/images/testimonial/testimonial-2/testimonial-fixed-img.png'
import testimonialsImgOne from '../../assets/images/testimonial/testimonial-2/img-1.png'

const TestimonialsTwo = () => {
  return (
    <div>
        <section class="testimonial-area testimonial-style-2 pricing-page background-image">
            <div class="container">
                <div class="row justify-content-center">
                <div class="col-lg-8 col-md-8 col-12">
                    <div class="section-head text-center">
                    <span class="section-head-sm-title">Testimonial</span>
                    <h2 class="section-head-title">
                        What say our <br />
                        Clients for our Services
                    </h2>
                    </div>
                </div>
                </div>
                <div class="row align-items-center">
                <div class="col-lg-6 col-md-6 col-12">
                    <div class="testimonial-fixed-image">
                    <img src={tesfixedImg} alt="#"/>
                    </div>
                </div>
                <div class="col-lg-6 col-12">
                    <div class="testimonial-slider-2 style-2">
                    <div class="single-testimonial style-2">
                        <div class="single-testimonial-content">
                        <i class="fi fi-br-quote-right"></i>
                        <p>
                            Marijuana refers to a the dried into a into leaves,
                            flowers,seed into the into the a leaves, flowers, seeds the
                            told me the into Cannabis it was the find a amazing product
                            refers to a the end to mazing.
                        </p>
                        <div class="single-testimonial-info">
                            <div class="testimonial-info-img">
                            <img src={testimonialsImgOne} alt="#"/>
                            </div>
                            <div class="testimonial-info-data">
                            <h6>Abdullah Raihd</h6>
                            <p>New Yark, USA</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    <div class="single-testimonial style-2">
                        <div class="single-testimonial-content">
                        <i class="fi fi-br-quote-right"></i>
                        <p>
                            Marijuana refers to a the dried into a into leaves,
                            flowers,seed into the into the a leaves, flowers, seeds the
                            told me the into Cannabis it was the find a amazing product
                            refers to a the end to mazing.
                        </p>
                        <div class="single-testimonial-info">
                            <div class="testimonial-info-img">
                            <img src={testimonialsImgOne} alt="#"/>
                            </div>
                            <div class="testimonial-info-data">
                            <h6>Abdullah Raihd</h6>
                            <p>New Yark, USA</p>
                            </div>
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

export default TestimonialsTwo