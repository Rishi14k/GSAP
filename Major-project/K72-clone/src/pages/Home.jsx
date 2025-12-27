import React from 'react'
import Video from '../components/Home/Video'
import HeroText from '../components/Home/HeroText'
import HomeHeroBottomText from '../components/Home/HomeHeroBottomText'

const Home = () => {
  return (
    <div>
       <div className='w-screen h-screen fixed'>
          <Video/>
       </div>
      
      <div className='h-screen w-screen relative justify-between flex flex-col'>
        <HeroText/>
        <HomeHeroBottomText/>
      </div>

    </div>
  )
}

export default Home
