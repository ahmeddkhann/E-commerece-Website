import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Navbar/Hero/hero'
import Products from './components/Navbar/Products/Products'
import TopProducts from './components/Navbar/Products/TopProducts'
import AOS from 'aos'
import "aos/dist/aos.css"
import Banners from './components/Navbar/Hero/banners'
import Subscribe from './components/Navbar/Subscribe'
import Testimonals from './components/Navbar/Hero/theTestimonals'
import Footer from './components/Navbar/Hero/theFooter'




const App = () => {
  React.useEffect(()=>{
    AOS.init({
      offset: 150,
      duration: 1000,
      easing: "ease-in-sine",
      delay: 200,
    })
    AOS.refresh()
  },[]);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Products/>
      <TopProducts/>
      <Banners/>
      <Subscribe/>
      <Products/>
      <Testimonals/>
      <Footer/>
    </div>
  )
}

export default App
