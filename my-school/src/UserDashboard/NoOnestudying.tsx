import { Button, Image } from 'antd'
import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'


const NoOnestudying = () => {
  return (
    <div className='noonestudying'>
    {/* Use media queries to handle responsive styling */}
  
    
    <h2>No Studying Till Now Please <Button><Link to="/dashboard?type=admission">Click Here</Link></Button> And Get Admission For a Better Future For Your Child</h2>
  </div>
  )
}

export default NoOnestudying
