import React from 'react'
import AgencySkillImg from '../../assets/images/agency-skills/agency-skills-img.png';

const AgencySkillArea = () => {
  return (
    <div>
        <section class="agency-skills-area">
            <div class="container">
                <div class="row align-items-center">
                <div class="col-lg-6 col-12">
                    <div class="agency-skills-img">
                    <img src={AgencySkillImg} alt="#"/>
                    </div>
                </div>
                <div class="col-lg-6 col-12">
                    <div class="agency-skills-content">
                    <div class="agency-skills-content-top">
                        <span class="agency-skills-sm-title">Our Agency Skills </span>
                        <h2 class="agency-skills-big-title">
                        We check this skill of our recent works
                        </h2>
                        <p class="agency-skills-text">
                        All the Lorem Ipsum generators on the Internet tend to repeat
                        our as predefined chunks as necessary, making this the first
                        true generator on the Internet. It uses a dictionary of over
                        Latin words, combined
                        </p>
                    </div>
                    <div class="agency-skills-progress">
                        <div class="single-agency-skills-progress progress-1">
                        <div class="single-agency-skills-progress-label">
                            <p class="skills-progress-title">Business Development</p>
                            <span class="skills-progress-percent">80%</span>
                        </div>
                        <div class="progress-container" data-percentage="80">
                            <div class="progress"></div>
                            <div class="percentage"></div>
                        </div>
                        </div>
                        <div class="single-agency-skills-progress progress-2">
                        <div class="single-agency-skills-progress-label">
                            <p class="skills-progress-title">Business Analysis Data</p>
                            <span class="skills-progress-percent">90%</span>
                        </div>
                        <div class="progress-container" data-percentage="90">
                            <div class="progress"></div>
                            <div class="percentage"></div>
                        </div>
                        </div>
                        <div class="single-agency-skills-progress progress-3">
                        <div class="single-agency-skills-progress-label">
                            <p class="skills-progress-title">Web Design Development</p>
                            <span class="skills-progress-percent">70%</span>
                        </div>
                        <div class="progress-container" data-percentage="70">
                            <div class="progress"></div>
                            <div class="percentage"></div>
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

export default AgencySkillArea