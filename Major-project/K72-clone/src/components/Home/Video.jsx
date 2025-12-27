import React from 'react'

const Video = ({src,className=""}) => {
  return (
    <div className='w-full h-screen'>
      <video className={`${className}`} autoPlay loop muted src={src}></video>
    </div>
  )
}

export default Video
