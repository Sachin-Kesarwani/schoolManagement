import React, { useEffect } from 'react'
import ContactHeader from '../Components/ContactHeader'
import { handleScrollToTop } from '../Important/scrollup'

const ContactUs = () => {
  useEffect(()=>{
    handleScrollToTop()
      },[])
  return (
    <div>
        <ContactHeader/>
    </div>
  )
}

export default ContactUs