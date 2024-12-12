import React from 'react'
import animation from "../../public/Animation -Loader.json"
import Lottie from 'lottie-react'



 const Loader = () => {
  return (
    <div className='h-screen flex justify-center '>  
        <Lottie animationData={animation} loop={true} />
        </div>
  )
}
export default Loader