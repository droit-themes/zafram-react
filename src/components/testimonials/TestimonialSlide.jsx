import React from 'react'
import TestimonialsImg from '../../assets/images/testimonial/img-1.png';

const TestimonialSlide = () => {
  return (
    <div>
        <section class="testimonial-area about-page">
            <div class="container">
                <div class="row justify-content-center">
                <div class="col-lg-7 col-md-7 col-12">
                    <div class="section-head text-center m-0">
                    <span class="section-head-sm-title">Testimonial</span>
                    <h2 class="section-head-title">
                        Kind Words from our Happy Customers
                    </h2>
                    </div>
                </div>
                </div>
                <div class="row">
                <div class="col-12">
                    <div
                    class="testimonial-slider background-image">
                    
                    <div class="single-testimonial">
                        <div class="testimonial-content">
                        <p class="testimonial-content-text">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration in some
                            form, by injected humour, or randomised words which do.
                        </p>
                        <div class="testimonial-cont-info">
                            <h4>Ronal M Griffim</h4>
                            <p>Business Manager</p>
                        </div>
                        </div>
                        <div class="testimonial-img">
                        <img src={TestimonialsImg} alt="#" />
                        </div>
                    </div>
                    
                    <div class="single-testimonial">
                        <div class="testimonial-content">
                        <p class="testimonial-content-text">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration in some
                            form, by injected humour, or randomised words which do.
                        </p>
                        <div class="testimonial-cont-info">
                            <h4>Ronal M Griffim</h4>
                            <p>Business Manager</p>
                        </div>
                        </div>
                        <div class="testimonial-img">
                        <img src={TestimonialsImg} alt="#" />
                        </div>
                    </div>
                    
                    <div class="single-testimonial">
                        <div class="testimonial-content">
                        <p class="testimonial-content-text">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration in some
                            form, by injected humour, or randomised words which do.
                        </p>
                        <div class="testimonial-cont-info">
                            <h4>Ronal M Griffim</h4>
                            <p>Business Manager</p>
                        </div>
                        </div>
                        <div class="testimonial-img">
                        <img src={TestimonialsImg} alt="#" />
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

export default TestimonialSlide