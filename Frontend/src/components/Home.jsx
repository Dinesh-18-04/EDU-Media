import React from 'react'
import Announcement from './Announcement'
import Main from './Main'
import Benefits from './Benefits'
import Courses from './Courses'
import Testimonials from './Testimonials'
import Pricing from './Pricing'
import Faq from './Faq'
import Footer from './Footer'


const Home = () => {
  return (
    <div>
        <Announcement/>
        <Main/>
        <Benefits/>
        <Courses/>
        <Testimonials/>
        <Pricing/>
        <Faq/>
        <Footer/>
    </div>
  )
}

export default Home
