import React from 'react'
import SiteLogo from '../../assets/images/logo-3.svg'
import UserFlax from '../../assets/images/usa-flag.png'

import { NavLink } from 'react-router-dom'

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
                        <NavLink to="/">Home</NavLink> 
                      <ul class="sub-menu">
                        <li>
                          <NavLink to="/">Home</NavLink> 
                        </li>
                        <li class="active">
                            <NavLink to="/HomeTwo">Home Two</NavLink> 
                        </li>
                        <li>
                        <NavLink to="/HomeThree">Home Three</NavLink>   
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink to="/">Portfolio</NavLink> 
                      <ul class="sub-menu">
                        <li>
                          <NavLink to="/Projects">Portfolio One</NavLink> 
                        </li>
                        <li>
                          <NavLink to="/Projects">Portfolio Two</NavLink> 
                        </li>
                        <li>
                        <NavLink to="/ProjectDetails">Portfolio Details</NavLink> 
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Services</a>
                      <ul class="sub-menu">
                        <li>
                          <NavLink to="/Services">Our Services</NavLink> 
                        </li>
                        <li>
                          <NavLink to="/ServicesDetails">Services Details</NavLink> 
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                      <ul class="sub-menu">
                        <li>
                          <NavLink to="/Blog">Blog Pages</NavLink> 
                        </li>
                        <li>
                          <NavLink to="/BlogDetails">Blog Details</NavLink> 
                        </li>
                      </ul>
                    </li>
                    <li>
                    <NavLink to="/About">About Us</NavLink> 
                    </li>
                    <li>
                      <a href="#">Pages</a>
                      <ul class="sub-menu">
                        <li>
                          <NavLink to="/Team">Our Team</NavLink> 
                        </li>
                        <li>
                        <NavLink to="/Team">Team Details</NavLink> 
                        </li>
                        <li>
                        <NavLink to="/Pricing">Pricing Plan</NavLink> 
                        </li>
                        <li>
                        <NavLink to="/Faq">FAQ</NavLink> 
                        </li>
                      </ul>
                    </li>
                    <li>
                    <NavLink to="/Contact">Contact Us</NavLink> 
                    </li>
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