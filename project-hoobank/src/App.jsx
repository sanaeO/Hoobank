import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import styles  from './style'
import Hero from './components/Hero'
import './App.css'
import Stats from './components/Stats'
import Business from './components/Business'
import Billing from './components/Billing'
import CardDeal from './components/CardDeal'
import Testimonials from './components/Testimonials'
import Clients from "./components/Clients"
import CTA from './components/CTA'
import Footer from './components/Footer'


const App = () => {
    return(
    <div className="w-full bg-primary">

      {/* // Navbar  */}
    <div className="w-full bg-primary">
      {/* container */}
      <div className={`${styles.paddingX} py-5`}>
       <Navbar/>
       </div>
    </div>

    {/* Hero  */}
    <div className="w-full bg-primary pb-10">
      {/* container */}
      <div className={`${styles.paddingX} py-5`}>
       <Hero/>
       </div>
    </div>

    {/* Hero  */}
      <div className="w-full bg-primary pb-10">
    {/* container */}
    <div className={`${styles.paddingX} py-5`}>
      <Stats/>
      </div>
  </div>

      {/* Stats  */}
      <div className="w-full bg-primary pb-10">
    {/* container */}
    <div className={`${styles.paddingX} py-5`}>
      <Business/>
      </div>
  </div>

      {/* Billing  */}
      <div className="w-full bg-primary pb-10">
    {/* container */}
    <div className={`${styles.paddingX} py-5`}>
      <Billing/>
      </div>
  </div>

  {/* Card deal  */}
  <div className="w-full bg-primary pb-10">
    {/* container */}
    <div className={`${styles.paddingX} py-5`}>
      <CardDeal/>
      </div>
  </div>


  {/* Testimonials  */}
  <div className="w-full bg-primary pb-10">
    {/* container */}
    <div className={`${styles.paddingX} py-5`}>
      <Testimonials/>
      </div>
  </div>


  {/* Testimonials  */}
  <div className="w-full bg-primary pb-10">
    {/* container */}
    <div className={`${styles.paddingX} py-5`}>
      <Clients/>
      </div>
  </div>

    {/* CTA  */}
    <div className="w-full bg-primary pb-10">
    {/* container */}
    <div className={`${styles.paddingX} py-5`}>
      <CTA/>
      </div>
  </div>

   {/* Footer  */}
   <div className="w-full bg-primary ">
    {/* container */}
    <div className={`${styles.paddingX} py-5`}>
      <Footer/>
      </div>
  </div>

    </div>

    )
   }
export default App
