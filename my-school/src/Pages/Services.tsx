import React from 'react'
import ServicesCard from '../Components/ServicesCard'

const Services = () => {
  return (
    <div style={{backgroundColor:"rgb(2, 2, 64)",minHeight:"100vh"}}>
        <h1 style={{textAlign:"center",color:"white"}}>Services</h1>
    <div style={{display:"flex",justifyContent:"space-evenly"}}>
    <ServicesCard/>
    <ServicesCard/>
    <ServicesCard/>
    <ServicesCard/>
    </div>
    </div>
  )
}

export default Services