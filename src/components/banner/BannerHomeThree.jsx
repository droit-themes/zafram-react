import React from 'react'
import shapeOne from '../../assets/images/hero-banner/hero-3/shape-1.svg'
import shapeTwo from '../../assets/images/hero-banner/hero-3/shape-2.svg'
import heroImg from '../../assets/images/hero-banner/hero-3/hero-img.png'
import textbutton from '../../assets/images/hero-banner/hero-3/text-btn.svg'

const BannerHomeThree = () => {
  return (
    <div>
        <section class="hero-area hero-style-3">
            <div class="hero-section-shape-1 style-3">
            <img src={shapeOne} alt="#"/>
            </div>
            <div class="hero-section-shape-2 style-3">
            <img src={shapeTwo} alt="#"/>
            </div>
            <div class="container">
            <div class="hero-content-top style-2">
                <div class="row align-items-center">
                <div class="col-lg-6 col-12 wow fadeInLeft">
                    <div class="hero-content style-3">
                    <h1 class="hero-overlay-cont-title">Creative</h1>
                    <h3 class="hero-cont-title">
                        Solutions for a <span>Digital World</span>
                    </h3>
                    <p class="hero-cont-text">
                        Zappy delivered blazing fast, striking ai solution lorem
                        quis data user learning analysis.
                    </p>
                    <div class="hero-content-btn">
                        <a href="#" class="theme-btn secondary">Get Started Now<i class="fi-rr-arrow-small-right"></i></a>
                    </div>
                    </div>
                </div>
                <div class="col-lg-6 col-12 wow fadeInRight">
                    <div class="hero-image style-3">
                    <div class="hero-video-image style-3">
                        <div class="hero-video-main">
                        <a href="https://www.youtube.com/watch?v=gyGsPlt06bo" class="video-popup-img popup-video">
                        <img src={heroImg} alt="#"/>
                        <i class="icofont-ui-play"></i></a>
                        </div>
                        <div class="hero-text-btn">
                        <img src={textbutton} alt="#"/>
                        </div>
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

export default BannerHomeThree