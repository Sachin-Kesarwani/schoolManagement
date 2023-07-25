import React from 'react'
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export default () => {
  return (
   
    <Confetti
    // confettiSource={{ x: 660, y: 300, w: 200, h: 200 }}
      width={200}
      height={200}
    // tweenDuration={5000}
    />
  )
}