import React from 'react'
import Header from '../components/Header/Header'
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs'
import BlogPContent from '../components/blog/BlogPContent'
import Footer from '../components/footer/Footer'

const Blog = () => {
  return (
    <div>
         <Header/>
         <Breadcrumbs/>
         <BlogPContent/>
         <Footer/>

    </div>
  )
}

export default Blog