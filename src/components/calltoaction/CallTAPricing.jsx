import React from 'react'
import CallToActionBG from '../../assets/images/call-action/call-action-3/circle-btn.svg'

const CallTAPricing = () => {
  return (
    <div>
        <section class="call-action-area style-3 background-image">
            <div class="container">
                <div class="row">
                <div class="col-12">
                    <div class="call-action-content style-3">
                    <h2 class="call-action-content-title">
                        S Let's take a fresh <span>start</span> and
                        <span>work</span> towards something exciting and meaningful together.
                    </h2>
                    <div class="call-action-btn">
                        <a href="#"><img src={CallToActionBG} alt="#"/></a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

    </div>
  )
}

export default CallTAPricing