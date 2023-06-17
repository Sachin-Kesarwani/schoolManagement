import React, { useState } from 'react'
import ServicesCard from '../Components/ServicesCard'
import '../Styles/servicestyle.css'
const Services = () => {

let arr1:Array<string> = ['https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*OCU3RKZrw8QAAAAAAAAAAABkARQnAQ','https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*xOYlR4e8ihIAAAAAAAAAAABkARQnAQ','https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*pKz3TabovrEAAAAAAAAAAABkARQnAQ']
  const [arr,setarr]=useState(arr1)


  return (
    <div style={{backgroundColor:"rgb(2, 2, 64)"}}>
        <h1 style={{textAlign:"center",color:"white"}}>Services</h1>
    <div className='service-cont' >
    <ServicesCard img={arr[0]}/>
    <ServicesCard img={arr[1]}/>
    <ServicesCard img={arr[2]}/>
    <ServicesCard img={arr[3]}/>
    </div>
    </div>
  )
}

export default Services