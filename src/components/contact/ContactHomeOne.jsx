import React from 'react'

const ContactHomeOne = () => {
  return (
    <div>
        <section class="contact-area">
            <div class="contact-shape-bg">
                <img class="thumbnail-image" src="./assets/images/contact-shape-bg.svg" alt="#"/>
            </div>
            <div class="container">
                <div class="contact-inner">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-12">
                    <div class="contact-info">
                        <span class="contact-info-sm-title">Need any Help</span>
                        <h3 class="contact-info-big-title">Get in Touch</h3>
                        <p class="contact-info-text">
                        Our passion for sustainability has driven us to refine our
                        proce leaders in web sustainability and performance helping to
                        shift towards a zero-carbon future.
                        </p>
                        <div class="contact-info-widget">
                        <div class="contact-info-widget-icon">
                            <i class="icofont-ui-call"></i>
                        </div>
                        <div class="contact-info-widget-content">
                            <h5>Call Us Directly</h5>
                            <a href="tel:+(256) 2156 21456">+(256) 2156 21456,</a
                            ><a href="tel:+(256) 2156 21420">+(256) 2156 21420</a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-lg-6 col-12">
                    <div class="contact-form">
                        <form action="./assets/mail/mail.php" method="post">
                        <div class="form-group">
                            <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                            />
                        </div>
                        <div class="form-group">
                            <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required
                            />
                        </div>
                        <div class="form-group">
                            <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            required
                            />
                        </div>
                        <div class="form-group">
                            <textarea
                            name="message"
                            placeholder="Message"
                            required
                            ></textarea>
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

export default ContactHomeOne