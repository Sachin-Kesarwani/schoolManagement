import React from 'react'
import "./loader.css"
const Loader = ({color="white"}) => {
  return (
    <span className="loader" style={{color:color}}></span>
  )
}

export default Loader
