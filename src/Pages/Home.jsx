import React, { useState } from 'react'
import Tagline from '../Components/layout/Tagline'
import Navbar from '../Components/layout/Navbar'
import HeroSlide from '../Components/home/Heroslide';


function Home() {
    const [visible ,setVisible]= useState(true);
  return (
    <>
    <div className='transition-all duration-200 overflow-hidden'>

    <Tagline visible={visible} setVisible={setVisible}/>
    </div >
      <div className='z-50 transition-all duration-700 ease-out-in sticky top-0 inset-0'>

      <Navbar visible={visible} />
    </div>
    <div className=''>
        <HeroSlide></HeroSlide>
    </div>
    </>

    
  )
}

export default Home