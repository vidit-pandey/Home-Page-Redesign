import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import Main2 from '../components/main2'
import Activites from '../components/activities'

const about = () => {
  return (<div>
    <Navbar/>
    <Main2 heading="ABOUT US!!!" text="Get to Know Us"/>
    <Activites />
    <Footer/>
  </div>
  );
};

export default about