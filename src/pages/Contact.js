import React from 'react'
import Header from '../components/Header/Header'
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs'
import Footer from '../components/footer/Footer'
import ContactFaq from '../components/contact/ContactFaq'
import ContactInfoMap from '../components/contact/ContactInfoMap'

const Contact = () => {
  return (
    <div>
      <Header/>
      <Breadcrumbs/>
      <ContactFaq/>
      <ContactInfoMap/>
      <Footer/>
    </div>
  )
}

export default Contact