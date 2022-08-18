import React from 'react'
import LangCards from '../Components/LangCards/LangCards'
import './styles.css'

const Home = () => {
  return (
    <div className="containerHome">
        <div className="videoContainer">
            <video src="https://cdn.trell.co/videos/orig/5MupVkpEzrMWho0jjxT51GQjTl7LyHmV.mp4" autoPlay />
        </div>
        <div className="lang">
            <LangCards/>
        </div>
    </div>
  )
}

export default Home