import React from 'react'
import PhoneFrame from '../components/PhoneSlideshow'
import LoginBox from '../components/LoginBox'
import "./Home.css"

const Home = () => {
  return (
    <div className="container">
      <div className="left-side">
        <PhoneFrame/>
      </div>
      <div className="right-side">
        <LoginBox />
        </div>
    </div>
  )
}

export default Home