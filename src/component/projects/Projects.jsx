import React,{useContext} from 'react'
import './Projects.css'
import { themeContext } from '../../Context';
import {Swiper,SwiperSlide} from 'swiper/react';
import SocialMediaApp from '../../img/Social Media App.png';
import GroShopEcom from '../../img/GroShopEcom2.png';
import TellsWeather from '../../img/TellsWeather.png';

import 'swiper/css';

const Projects = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="gallery" id='Gallery'>
      {/* Heading */}
      <span style={{color:darkMode?'white':''}}>My Top</span>
      <span>Projects</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='gallery-slider'
      >
        <SwiperSlide>
          <a href="https://github.com/Seemant9118/SKMedia"><img src={SocialMediaApp} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://ecom-d57d8.web.app/"><img src={GroShopEcom} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/Seemant9118/Weather-App"><img src={TellsWeather} alt="" /></a>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  )
}

export default Projects