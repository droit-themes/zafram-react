import React from 'react'

import breadcrumb from '../../assets/images/breadcrumbs-bg.png'

const Breadcrumbs = () => {
  return (
    <div>
         <section class="breadcrumbs-area">
            <div class="breadcrumbs-bg-image">
                <img class="thumbnail-image" src={breadcrumb} alt="#"/>
            </div>
            <div class="container">
                <div class="row justify-content-center">
                <div class="col-lg-6 col-md-6 col-12">
                    <div class="breadcrumbs-content">
                    <h4>About Us</h4>
                    <ul class="breadcrumbs-menu">
                        <li><a href="index.html">Home</a></li>
                        <li class="active"><a href="£">About Us</a></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Breadcrumbs