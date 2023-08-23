import React from 'react'

const Header = () => {
  return (
    <>
     <h2>Header area</h2>
      <div class="modal mobile-menu-modal offcanvas-modal fade" id="offcanvas-modal">
        <div class="modal-dialog offcanvas-dialog">
          <div class="modal-content">
            <div class="modal-header offcanvas-header">
            
              <div class="offcanvas-logo">
                <a href="index.html"><img src="./assets/images/logo-1.svg" alt="#"
                /></a>
              </div>
            
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i class="fi fi-ss-cross"></i>
              </button>
            </div>
            <div class="mobile-menu-modal-main-body">
              
              <nav id="offcanvas-menu" class="navigation offcanvas-menu">
                <ul id="nav mobile-nav" class="list-none offcanvas-men-list">
                  <li>
                    <a class="menu-arrow" href="#">Home</a>
                    <ul class="sub-menu">
                      <li class="active">
                        <a href="index.html">Home One</a>
                      </li>
                      <li><a href="index-2.html">Home Two</a></li>
                      <li><a href="index-3.html">Home Three</a></li>
                    </ul>
                  </li>
                  <li>
                    <a class="menu-arrow" href="#">Projects</a>
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
                    <a class="menu-arrow" href="#">Services</a>
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
                    <a class="menu-arrow" href="#">Blog</a>
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
                    <a class="menu-arrow" href="#">Pages</a>
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
              
              <div class="mobile-menu-modal-bottom">
                <a href="contact.html" class="theme-btn"><span>Let's Talk</span><i class="fi fi-rr-arrow-small-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </>
  )
}

export default Header