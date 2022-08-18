import React from 'react'
import Navbar from '../Components/NavPart/Navbar'
import NavPart from '../Components/NavPart/NavPart'
import VideoCards from '../Components/VideoCards/VideoCards'

const MainPage = () => {
  return (
   <div className="mainCon">
    <div className="navPart">
    <NavPart/>
    <Navbar  />
    </div>
    <div className="videos">
    <VideoCards/>
    </div>
   </div>
  )
}

export default MainPage