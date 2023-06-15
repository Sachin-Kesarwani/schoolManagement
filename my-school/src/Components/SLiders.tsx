import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../Styles/slider.css'
const responsive = {superLargeDesktop: {
  // the naming can be any, depends on you.
  breakpoint: { max: 4000, min: 900 },
  items: 4
},
desktop: {
  breakpoint: { max: 800, min: 900 },
  items: 2
},
tablet: {
    breakpoint: { max: 300, min: 800 },
    items: 1
  },
  mobile: {
      breakpoint: { max: 0, min: 300 },
      items: 1
  }
};

const SimpleSlider = () => (
    <div className='slider'>
        <h1>WHAT OUR PARENTS HAVE TO SAY?</h1>
     <Carousel responsive={responsive}>
  <div>
    <img width={'500px'} src="https://k8school.com/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-12-at-16.55.05.jpeg" alt="" />
  </div>
  <div>
    <img width={'500px'} src="https://k8school.com/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-12-at-16.55.05.jpeg" alt="" />
  </div>
  <div>
    <img width={'500px'} src="https://k8school.com/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-12-at-16.55.05.jpeg" alt="" />
  </div>
  <div>
    <img width={'500px'} src="https://k8school.com/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-12-at-16.55.05.jpeg" alt="" />
  </div>
  <div>
    <img width={'500px'} src="https://k8school.com/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-12-at-16.55.05.jpeg" alt="" />
  </div>
  <div>
    <img width={'500px'} src="https://k8school.com/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-12-at-16.55.05.jpeg" alt="" />
  </div>
  <div>
    <img width={'500px'} src="https://k8school.com/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-12-at-16.55.05.jpeg" alt="" />
  </div>
 
</Carousel>
 
    </div>
  );


export default SimpleSlider
