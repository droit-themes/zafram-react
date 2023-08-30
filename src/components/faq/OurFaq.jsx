import React from 'react'
import shapeOne from '../../assets/images/faq/shape-1.png'
import shapeTwo from '../../assets/images/faq/shape-2.svg'

const OurFaq = () => {
  return (
    <div>
         <section class="faq-area">
            <div class="faq-section-shape-1">
                <img src={shapeOne} alt="#" />
            </div>
            <div class="container">
                <div class="row align-items-center">
                <div class="col-12">
                    <div class="section-head">
                    <span class="section-head-sm-title">Our Faq</span>
                    <h2 class="section-head-title">Frequently asked questions</h2>
                    </div>
                    <div class="faq-inner accordion" id="accordionExample">
                    <div class="single-faq-widget">
                        <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <h3>My business really need marketing?</h3>
                        </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="faq-inner-body">
                            <p class="faq-inner-body-text">
                            Not all marketing agencies handle all kinds of marketing.
                            Therefore, as pages, too, and talk about how you can help
                            them create.
                            </p>
                        </div>
                        </div>
                    </div>
                    
                    <div class="single-faq-widget">
                        <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <h3>What is branding exactly?</h3>
                        </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="faq-inner-body">
                            <p class="faq-inner-body-text">
                            Not all marketing agencies handle all kinds of marketing.
                            Therefore, as pages, too, and talk about how you can help
                            them create.
                            </p>
                        </div>
                        </div>
                    </div>
                   
                    <div class="single-faq-widget">
                        <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <h3>How do I request a client review?</h3>
                        </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="faq-inner-body">
                            <p class="faq-inner-body-text">
                            Not all marketing agencies handle all kinds of marketing.
                            Therefore, as pages, too, and talk about how you can help
                            them create.
                            </p>
                        </div>
                        </div>
                    </div>
                  
                    <div class="single-faq-widget">
                        <h2 class="accordion-header" id="headingFour">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            <h3>What is the Nixle Secure Desk?</h3>
                        </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div class="faq-inner-body">
                            <p class="faq-inner-body-text">
                            Not all marketing agencies handle all kinds of marketing.
                            Therefore, as pages, too, and talk about how you can help
                            them create.
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="faq-section-shape-2">
                <img src={shapeTwo} alt="#" />
            </div>
        </section>
    </div>
  )
}

export default OurFaq