import React from 'react'

const ContactInfoMap = () => {
  return (
    <div>
        <section class="contact-us-info-area">
            <div class="contact-us-map">
                <div class="gmap_canvas">
                <iframe id="gmap_canvas" src="https://maps.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0104336321297!2d90.41270911479724!3d23.782642793461232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b165a1921a09%3A0xb58f02520cb0cb41!2sSoftifyBD%20Ltd.!5e0!3m2!1sen!2sbd!4v1669619081345!5m2!1sen!2sbd"
                    marginheight="0" marginwidth="0" width="434" height="500" frameborder="0"></iframe>
                </div>
            </div>
            <div class="container">
                <div class="contact-us-info-card-inner">
                <div class="row">
                    
                    <div class="col-lg-4 col-md-4 col-12">
                    <div class="contact-us-info-card">
                        <div class="contact-info-card-icon">
                        <i class="icofont-google-map"></i>
                        </div>
                        <div class="contact-us-info-content">
                        <h4>Address</h4>
                        <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                        </div>
                    </div>
                    </div>
                   
                    <div class="col-lg-4 col-md-4 col-12">
                    <div class="contact-us-info-card">
                        <div class="contact-info-card-icon">
                        <i class="icofont-ui-call"></i>
                        </div>
                        <div class="contact-us-info-content">
                        <h4>Phone</h4>
                        <p><a href="tel:(207) 555-0119">(207) 555-0119</a></p>
                        <p><a href="tel:(225) 555-0118">(225) 555-0118</a></p>
                        </div>
                    </div>
                    </div>
                   
                    <div class="col-lg-4 col-md-4 col-12">
                    <div class="contact-us-info-card">
                        <div class="contact-info-card-icon">
                        <i class="icofont-envelope"></i>
                        </div>
                        <div class="contact-us-info-content">
                        <h4>Email</h4>
                        <p>
                            <a href="mailto:demoemail12@gmail.com">demoemail12@gmail.com</a>
                        </p>
                        <p>
                            <a href="mailto:antheremial2@gmail.com">antheremial2@gmail.com</a>
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

export default ContactInfoMap