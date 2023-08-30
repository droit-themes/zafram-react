import React from 'react'
import faqShape from '../../assets/images/faq/shape-1.png'
import SectionShape from '../../assets/images/contact-section-shape-1.svg'

const ContactFaq = () => {
  return (
    <div>
        <section class="faq-area contact-us-page">
            <div class="faq-section-shape-1">
                <img src={faqShape} alt="#" />
            </div>
            <div class="contact-bg-section-shape-2">
                <img src={SectionShape} alt="#" />
            </div>
            <div class="container">
                <div class="row align-items-center">
                <div class="col-lg-6 col-12">
                    <div class="section-head">
                    <span class="section-head-sm-title">Our Faq</span>
                    <h2 class="section-head-title">
                        Frequently asked <br />questions
                    </h2>
                    </div>
                    <div class="faq-inner accordion" id="accordionExample">
                  
                    <div class="single-faq-widget">
                        <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"aria-controls="collapseOne">
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
                        <button class="accordion-button collapsed" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"aria-controls="collapseTwo">
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
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"aria-controls="collapseFour">
                            <h3>What is the Nixle Secure Desk?</h3>
                        </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"data-bs-parent="#accordionExample">
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
                <div class="col-lg-6 col-12">
                    <div class="contact-page-form">
                    <div class="contact-form-head">
                        <span>Need any Help </span>
                        <h3>Get in Touch</h3>
                    </div>
                    <div class="contact-form style-2">
                        <form action="#" method="post">
                        <div class="form-group">
                            <input type="text" name="name" placeholder="Name" required/>
                        </div>
                        <div class="form-group">
                            <input type="email" name="email" placeholder="Email Address" required/>
                        </div>
                        <div class="form-group">
                            <input type="text" name="subject" placeholder="Subject" required/>
                        </div>
                        <div class="form-group">
                            <textarea  name="message" placeholder="Message" required></textarea>
                        </div>
                        <div class="contact-form-btn">
                            <button type="submit" class="theme-btn">
                            Send Message
                            </button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ContactFaq