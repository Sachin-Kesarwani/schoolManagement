import React from 'react'
import '../Styles/banner.css'
import { Services } from './Services'
const Banner = () => {
  return (
    <div className='banner-cont'>
<h1>
The Online School Management System
</h1>
<h3>We Offers</h3>
<div  className='services'>
<Services/>

</div>
<button>Get Started</button>
    </div>
  )
}

export default Banner