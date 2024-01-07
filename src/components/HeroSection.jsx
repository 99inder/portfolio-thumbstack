import React from 'react'
import { imgsData, userImg, typedData } from '../assets/data/heroSectionData'
import Typed from 'react-typed';

const HeroSection = () => {
  return (
    <div className="hero-section">

      <div className="faded-text">John Doe</div>

      <div className="hero-section-left">
        <div className="hero-section-heading">Hi! John Doe</div>

        <div className="hero-section-heading hero-section-sub-heading">
          I am a <Typed
            className='role'
            strings={typedData}
            loop={true}
            typeSpeed={40}
            backSpeed={35}
            backDelay={1500}
          />
        </div>

        <div className="hero-section-description">
          I’m a software developer and here is my portfolio website. Here you’ll
          learn about my journey as a software developer.
        </div>

        <a href='#contactme' className="btn-pink" id="btn">Contact me</a>

      </div>

      <div className="hero-section-right">
        {
          imgsData.map((item, idx) => (
            <div key={idx} className={`absolute icons icon-${item.name}`}>
              <img src={item.src} alt={item.name + "_img"} />
            </div>
          ))
        }
        <div className="user-image">
          <img src={userImg} alt="" />
        </div>
      </div>

    </div>
  )
}

export default HeroSection