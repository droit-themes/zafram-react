import React from 'react'
import SiteLogo from '../../assets/images/logo-3.svg'
import UserFlax from '../../assets/images/usa-flag.png'

const Header = () => {
  return (
    <>
     
      <div class="topbar-area">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="topbar-inner">
                <div class="topbar-contact">
                  <ul class="topbar-contact-list">
                    <li>
                      <a href="tel:+88 ( 5548 ) 6548"><i class="icofont-ui-call"></i>+88 ( 5548 ) 6548</a>
                    </li>
                    <li>
                      <a href="mailto:infoyour@gmail.com"><i class="icofont-envelope"></i>infoyour@gmail.com</a>
                    </li>
                    <li>
                      <a href="#"><i class="icofont-google-map"></i>374 FA Tower, William Road, Melbourne, USA</a>
                    </li>
                  </ul>
                </div>
                <div class="topbar-language">
                  <div class="topbar-language-img">
                    <img value="1" src={UserFlax} alt="#" />
                  </div>
                  <select>
                    <option data-display="English">English</option>
                    <option value="1">Spanish</option>
                    <option value="2">Turkish</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header id="active-sticky" class="header-area header-style-2">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="header-inner">
              <div class="header-logo">
                <a href="#"><img src={SiteLogo} alt="#"/></a>
              </div>
              <div class="header-menu">
                <nav class="navigation">
                  <ul class="header-menu-list style-2">
                    <li class="active">
                      <a href="index.html">Home</a>
                      <ul class="sub-menu">
                        <li>
                          <a href="index.html">Home One</a>
                        </li>
                        <li class="active">
                          <a href="index-2.html">Home Two</a>
                        </li>
                        <li><a href="index-3.html">Home Three</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="projects.html">Projects</a>
                      <ul class="sub-menu">
                        <li>
                          <a href="projects.html">Portfolio One</a>
                        </li>
                        <li>
                          <a href="projects-2.html">Portfolio Two</a>
                        </li>
                        <li>
                          <a href="project-details.html">Portfolio Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="services.html">Services</a>
                      <ul class="sub-menu">
                        <li>
                          <a href="services.html">Services</a>
                        </li>
                        <li>
                          <a href="service-details.html">Service Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="standard-blog.html">Blog</a>
                      <ul class="sub-menu">
                        <li>
                          <a href="standard-blog.html">Standard Blog</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    <li><a href="about.html">About</a></li>
                    <li>
                      <a href="#">Pages</a>
                      <ul class="sub-menu">
                        <li>
                          <a href="team.html">Team</a>
                        </li>
                        <li>
                          <a href="team-details.html">Team Details</a>
                        </li>
                        <li>
                          <a href="pricing.html">Pricing</a>
                        </li>
                        <li>
                          <a href="faq.html">Faq</a>
                        </li>
                      </ul>
                    </li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>
                </nav>
              </div>
              <div class="header-menu-btn style-2">
                <a href="contact.html" class="theme-btn">Lets Talk <i class="fi fi-rr-arrow-small-right"></i></a>
              </div>
             
              <button type="button" class="mobile-menu-offcanvas-toggler" data-bs-toggle="modal" data-bs-target="#offcanvas-modal">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </header>

    </>
  )
}

export default Header