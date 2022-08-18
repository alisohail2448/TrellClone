import React from 'react'
import Navbar from '../Components/NavPart/Navbar'
import NavPart from '../Components/NavPart/NavPart'
import ReadCards from '../Components/ReadCards/ReadCards'

const ReadPage = () => {
  return (
    <div className="mainCon">
    <div className="navPart">
    <NavPart/>
    <Navbar />
    </div>
    <div className="videos">
    <ReadCards/>
    </div>
   </div>
  )
}

export default ReadPage