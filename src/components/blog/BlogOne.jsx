import React from 'react'
import User from '../../assets/images/icons/user.svg';
import comments from '../../assets/images/icons/comments.svg';
import calender from '../../assets/images/icons/calender.svg';

import BlogFeatureImg from '../../assets/images/blog/img-1.png';

const BlogOne = () => {
  return (
    <div>
        <section class="blog-area">
            <div class="container">
                <div class="row">
                <div class="col-lg-8 col-xl-6 col-md-8 col-12">
                    <div class="section-head">
                    <span class="section-head-sm-title">Our News & Blog</span>
                    <h2 class="section-head-title">Every Single Updates</h2>
                    </div>
                </div>
                </div>
                <div class="row">
                <div class="col-12">
                    <div class="blog-slider">
                        
                        <div class="blog-card">
                            <div class="blog-content">
                            <h4 class="blog-content-title">
                                <a href="blog-details.html">Startup diversity teamwork at desk in modern office</a>
                            </h4>
                            <ul class="blog-meta">
                                <li><a href="#"><img src={User} alt="#" />By Admin</a></li>
                                <li><img src={calender} alt="#" />28 Mar 2023</li>
                                <li><img src={comments} alt="#" />2</li>
                            </ul>
                            </div>
                            <div class="blog-card-img">
                            <img src={BlogFeatureImg} alt="#" />
                            <span class="blog-card-tag"><a href="#">Startup diversity</a></span
                            >
                            </div>
                            <div class="blog-card-btn">
                            <a href="blog-details.html"
                                >Learn More<i class="fi-rr-arrow-small-right"></i
                            ></a>
                            </div>
                        </div>

                        <div class="blog-card">
                            <div class="blog-content">
                            <h4 class="blog-content-title">
                                <a href="blog-details.html">Startup diversity teamwork at desk in modern office</a>
                            </h4>
                            <ul class="blog-meta">
                                <li><a href="#"><img src={User} alt="#" />By Admin</a></li>
                                <li><img src={calender} alt="#" />28 Mar 2023</li>
                                <li><img src={comments} alt="#" />2</li>
                            </ul>
                            </div>
                            <div class="blog-card-img">
                            <img src={BlogFeatureImg} alt="#" />
                            <span class="blog-card-tag"><a href="#">Startup diversity</a></span
                            >
                            </div>
                            <div class="blog-card-btn">
                            <a href="blog-details.html"
                                >Learn More<i class="fi-rr-arrow-small-right"></i
                            ></a>
                            </div>
                        </div>

                        <div class="blog-card">
                            <div class="blog-content">
                            <h4 class="blog-content-title">
                                <a href="blog-details.html">Startup diversity teamwork at desk in modern office</a>
                            </h4>
                            <ul class="blog-meta">
                                <li><a href="#"><img src={User} alt="#" />By Admin</a></li>
                                <li><img src={calender} alt="#" />28 Mar 2023</li>
                                <li><img src={comments} alt="#" />2</li>
                            </ul>
                            </div>
                            <div class="blog-card-img">
                            <img src={BlogFeatureImg} alt="#" />
                            <span class="blog-card-tag"><a href="#">Startup diversity</a></span
                            >
                            </div>
                            <div class="blog-card-btn">
                            <a href="blog-details.html"
                                >Learn More<i class="fi-rr-arrow-small-right"></i
                            ></a>
                            </div>
                        </div>


                        <div class="blog-card">
                            <div class="blog-content">
                            <h4 class="blog-content-title">
                                <a href="blog-details.html">Startup diversity teamwork at desk in modern office</a>
                            </h4>
                            <ul class="blog-meta">
                                <li><a href="#"><img src={User} alt="#" />By Admin</a></li>
                                <li><img src={calender} alt="#" />28 Mar 2023</li>
                                <li><img src={comments} alt="#" />2</li>
                            </ul>
                            </div>
                            <div class="blog-card-img">
                            <img src={BlogFeatureImg} alt="#" />
                            <span class="blog-card-tag"><a href="#">Startup diversity</a></span
                            >
                            </div>
                            <div class="blog-card-btn">
                            <a href="blog-details.html"
                                >Learn More<i class="fi-rr-arrow-small-right"></i
                            ></a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                </div>
            </div>
            <div class="blog-section-shape">
                <img src={BlogFeatureImg} alt="#" />
            </div>
        </section> 
    </div>
  )
}

export default BlogOne