import React from 'react'
import Video from '../components/Home/Video'
import HeroText from '../components/Home/HeroText'
import HomeHeroBottomText from '../components/Home/HomeHeroBottomText'

const Home = () => {
  return (
    <div>
       <div className='w-screen h-screen fixed'>
          <Video src="https://player.vimeo.com/progressive_redirect/playback/1119600858/rendition/1080p/file.mp4?loc=external&log_user=0&signature=c4a137161d6ce80a52c50c7ee23d4fdf8df103bfc816252fc304e317a43bacc6" 
          className='w-full h-full object-cover'
          />
       </div>
      
      <div className='h-screen w-screen relative justify-between flex flex-col'>
        <HeroText/>
        <HomeHeroBottomText/>
      </div>

    </div>
  )
}

export default Home
