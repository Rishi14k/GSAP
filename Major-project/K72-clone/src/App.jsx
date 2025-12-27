import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from "./pages/Home"
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import NavbarMenu from './components/Navbar/NavbarMenu'
import FullScreenNav from './components/Navbar/FullScreenNav'

const App = () => {

  return (
    <div className='text-white w-screen h-screen p-0'>
        <NavbarMenu/>
        <FullScreenNav/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/agence' element={<Agence/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
      
    </div>
  )
}

export default App
