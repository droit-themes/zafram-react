import React from 'react'
import FooterLogo from '../../assets/images/logo-2.svg';

const Footer = () => {
  return (
    <div>
        <footer class="footer-area">
            <div class="footer-top footer_background_image">
                <div class="container">
                <div class="row">
                    <div class="col-12">
                    <div class="footer-newsletter">
                        <div class="footer-newsletter-content">
                        <span>For Agency Company</span>
                        <h4>Subscribe to Our Newsletter</h4>
                        </div>
                        <form action="./assets/mail/mail.php" method="post" class="footer-newsletter-form" >
                        <input type="email" name="email" placeholder="Enter your email address" required/>
                        <button class="theme-btn">Subscribe Now</button>
                        </form>
                    </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-12">
                    <div class="footer-widget footer-about">
                        <div class="footer-logo">
                        <a href="index.html"><img src={FooterLogo} alt="'#"/></a>
                        </div>
                        <div class="footer-about-content">
                        <h6>Want to Create Something Great Together?</h6>
                        <div class="footer-get-touch">
                            <span>Get in Touch..</span>
                            <a href="mailto:hello@zappyinfo.com">hello@zappyinfo.com</a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-12">
                    <div class="footer-widget footer-services">
                        <h4 class="footer-widget-title">Our Services</h4>
                        <ul class="footer-links">
                        <li>
                            <a href="#"
                            ><i class="icofont-rounded-double-right"></i>Business
                            Consulting
                            </a>
                        </li>
                        <li>
                            <a href="#"
                            ><i class="icofont-rounded-double-right"></i>Financial
                            Investment</a
                            >
                        </li>
                        <li>
                            <a href="#"
                            ><i class="icofont-rounded-double-right"></i> Corporate
                            Business</a
                            >
                        </li>
                        <li>
                            <a href="#"
                            ><i class="icofont-rounded-double-right"></i> IT
                            Consulting
                            </a>
                        </li>
                        <li>
                            <a href="#"
                            ><i class="icofont-rounded-double-right"></i>Web
                            Strategy</a
                            >
                        </li>
                        <li>
                            <a href="#"
                            ><i class="icofont-rounded-double-right"></i> Business
                            Development</a
                            >
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-12">
                    <div class="footer-widget footer-links">
                        <h4 class="footer-widget-title">Quick Links</h4>
                        <ul class="footer-links">
                        <li>
                            <a href="#"
                            ><i class="icofont-rounded-double-right"></i>Terms &
                            Conditions
                            </a>
                        </li>
                        <li>
                            <a href="#"
                            ><i class="icofont-rounded-double-right"></i> About
                            Company
                            </a>
                        </li>
                        <li>
                            <a href="#"
                            ><i class="icofont-rounded-double-right"></i> Payment
                            Gatway
                            </a>
                        </li>
                        <li>
                            <a href="#"
                            ><i class="icofont-rounded-double-right"></i> IT Business
                            Support
                            </a>
                        </li>
                        <li>
                            <a href="#"
                            ><i class="icofont-rounded-double-right"></i> Apps
                            Development</a
                            >
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-12">
                    <div class="footer-widget footer-contact">
                        <h4 class="footer-widget-title">Contact Us</h4>
                        <ul class="footer-cpntact-list">
                        <li>
                            <a
                            href="tel:+88 ( 5548 )
                            6548"
                            ><i class="icofont-ui-call"></i>+88 ( 5548 ) 6548
                            </a>
                        </li>
                        <li>
                            <a href="mailto:infoyourgmail.com"
                            ><i class="icofont-envelope"></i>
                            infoyourgmail.com
                            </a>
                        </li>
                        <li>
                            <a href="#"
                            ><i class="icofont-google-map"></i>27 NW New Vexmont, 3 No
                            Tejturi Bazar West, Panthapath, Dhaka 1215</a
                            >
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-12">
                    <p class="footer-copyright-text">
                        Copyright @2023 All rights reserved Zafram inc.
                    </p>
                    </div>
                    <div class="col-lg-6 col-12">
                    <ul class="footer-bottom-social">
                        <li>
                        <a href="#"><i class="icofont-twitter"></i></a>
                        </li>
                        <li>
                        <a href="#"><i class="icofont-behance"></i></a>
                        </li>
                        <li>
                        <a href="#"><i class="icofont-instagram"></i></a>
                        </li>
                        <li>
                        <a href="#"><i class="icofont-linkedin"></i></a>
                        </li>
                        <li>
                        <a href="#"><i class="icofont-facebook"></i></a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </footer>

    </div>
  )
}

export default Footer