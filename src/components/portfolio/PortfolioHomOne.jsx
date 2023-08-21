import React from 'react'

const PortfolioHomOne = () => {
  return (
    <div>
        <section class="portfolio-area">
            <div class="container">
                <div class="row justify-content-center">
                <div class="col-lg-8 col-xl-6 col-md-8 col-12 wow fadeInUp">
                    <div class="section-head text-center">
                    <span class="section-head-sm-title">My Works & Portfolio</span>
                    <h2 class="section-head-title">
                        Impressive Portfolio in Our Work Gallery
                    </h2>
                    </div>
                </div>
                </div>
                <div class="row">
                <div class="col-12">
                    <ul
                    id="portfolio-nav"
                    class="project-nav tr-list list-inline cbp-l-filters-work"
                    >
                    <li data-filter="*" class="cbp-filter-item active">All</li>
                    <li data-filter=".marketing" class="cbp-filter-item">
                        Marketing
                    </li>
                    <li data-filter=".application" class="cbp-filter-item">
                        Application
                    </li>
                    <li data-filter=".design" class="cbp-filter-item">Design</li>
                    <li data-filter=".development" class="cbp-filter-item">
                        Development
                    </li>
                    </ul>
                </div>
                </div>
                <div class="row">
                <div class="col-12">
                    <div class="portfolio-main">
                    <div id="portfolio-item" class="portfolio-item-active">
                        
                        <div class="cbp-item application">
                        <a href="project-details.html" class="single-portfolio">
                            <div class="portfolio-image">
                            <img
                                src="./assets/images/portfolio/project-img-1.png"
                                alt="#"
                            />
                            </div>
                            <div class="portfolio-content">
                            <span>Content Writing</span>
                            <h4>Scene of Dimensional</h4>
                            </div>
                        </a>
                        </div>
                       
                        <div class="cbp-item application">
                        <a href="project-details.html" class="single-portfolio">
                            <div class="portfolio-image">
                            <img
                                src="./assets/images/portfolio/project-img-2.png"
                                alt="#"
                            />
                            </div>
                            <div class="portfolio-content">
                            <span>Content Writing</span>
                            <h4>Scene of Dimensional</h4>
                            </div>
                        </a>
                        </div>
                        
                        <div class="cbp-item marketing">
                        <a href="project-details.html" class="single-portfolio">
                            <div class="portfolio-image">
                            <img
                                src="./assets/images/portfolio/project-img-3.png"
                                alt="#"
                            />
                            </div>
                            <div class="portfolio-content">
                            <span>Content Writing</span>
                            <h4>Scene of Dimensional</h4>
                            </div>
                        </a>
                        </div>
                       
                        <div class="cbp-item development">
                        <a href="project-details.html" class="single-portfolio">
                            <div class="portfolio-image">
                            <img
                                src="./assets/images/portfolio/project-img-4.png"
                                alt="#"
                            />
                            </div>
                            <div class="portfolio-content">
                            <span>Content Writing</span>
                            <h4>Scene of Dimensional</h4>
                            </div>
                        </a>
                        </div>
                        <div class="cbp-item development">
                        <a href="project-details.html" class="single-portfolio">
                            <div class="portfolio-image">
                            <img
                                src="./assets/images/portfolio/project-img-5.png"
                                alt="#"
                            />
                            </div>
                            <div class="portfolio-content">
                            <span>Content Writing</span>
                            <h4>Scene of Dimensional</h4>
                            </div>
                        </a>
                        </div>
                        
                        <div class="cbp-item design">
                        <a href="project-details.html" class="single-portfolio">
                            <div class="portfolio-image">
                            <img
                                src="./assets/images/portfolio/project-img-6.png"
                                alt="#"
                            />
                            </div>
                            <div class="portfolio-content">
                            <span>Content Writing</span>
                            <h4>Scene of Dimensional</h4>
                            </div>
                        </a>
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

export default PortfolioHomOne