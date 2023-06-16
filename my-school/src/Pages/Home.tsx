import React, { useEffect } from 'react'
import Banner from '../Components/Banner'
import Why from '../Components/WhatWeOffer'
import AdBanner1 from '../Components/AdBanner'
import Slider from 'react-slick'
import SimpleSlider from '../Components/SLiders'
import Footer from '../Components/Footer'
import { Extraainfo } from '../Components/Extraainfo'
import { handleScrollToTop } from '../Important/scrollup'

const Home = () => {
  useEffect(()=>{
    handleScrollToTop()
      },[])
  return (
    <div>
      <Banner/>
      <AdBanner1 />
      <div style={{ backgroundColor: 'rgb(2, 2, 64)'}}>

<Why/>
      <SimpleSlider/>
      </div>

      <div style={{backgroundColor:"blue"}}>
        <Extraainfo/>
      </div>
     

    </div>
  )
}

export default Home
