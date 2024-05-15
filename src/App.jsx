import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Steps from './components/Steps'
import BentoGrid from './components/BentoGrid'
import CompanyFeatures from './components/CompanyFeatures'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Faqs from './components/Faqs'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
   <main className='mt-16'>
    <Hero/>
    <Steps/>
    <BentoGrid/>
    <CompanyFeatures/>
    <Testimonials/>
    <Pricing/>
    <Faqs/>
   </main>
   <Footer/>
    </>
  )
}

export default App