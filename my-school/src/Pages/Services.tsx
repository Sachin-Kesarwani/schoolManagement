
import React, { useState,useEffect } from 'react'
import ServicesCard from '../Components/ServicesCard'
import '../Styles/servicestyle.css'
import { handleScrollToTop } from '../Important/scrollup'
const Services = () => {

  const TEXTS = ['simplifying fee management', 'transparent parent communications', 'efficient lesson planning', 'automating attendance'];

let arr1:Array<string> = ['https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*OCU3RKZrw8QAAAAAAAAAAABkARQnAQ','https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*xOYlR4e8ihIAAAAAAAAAAABkARQnAQ','https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*pKz3TabovrEAAAAAAAAAAABkARQnAQ']
  const [arr,setarr]=useState(arr1)
  useEffect(()=>{
    handleScrollToTop()
      },[])
  return (
    <div style={{backgroundColor:"rgb(2, 2, 64)"}}>
        <h1 style={{textAlign:"center",color:"white"}}>Services</h1>
    <div className='service-cont' >
    <ServicesCard img={arr[0]} name={TEXTS[0]}/>
    <ServicesCard img={arr[1]} name={TEXTS[1]}/>
    <ServicesCard img={arr[2]} name={TEXTS[2]}/>
    <ServicesCard img={arr[3]} name={TEXTS[3]}/>
    </div>
    </div>
  )
}

export default Services