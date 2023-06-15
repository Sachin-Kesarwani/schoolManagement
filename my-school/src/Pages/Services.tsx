import React from 'react'
import ServicesCard from '../Components/ServicesCard'
import '../Styles/servicestyle.css'
const Services = () => {
  return (
    <div style={{backgroundColor:"rgb(2, 2, 64)"}}>
        <h1 style={{textAlign:"center",color:"white"}}>Services</h1>
    <div className='service-cont'>
    <ServicesCard/>
    <ServicesCard/>
    <ServicesCard/>
    <ServicesCard/>
    </div>
    </div>
  )
}

export default Services