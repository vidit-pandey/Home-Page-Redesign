import React from 'react'
import Navbar from '../components/Navbar'
import Main2 from '../components/main2'
import Footer from '../components/footer'
import Contactinfo from '../components/contactinfo'
const contact = () => {
  return <div>
    <Navbar/>
    <Main2 heading="Contact US" text="Be Online..."/>
    <Contactinfo />
    <Footer/>
  </div>;
}

export default contact