import React,{useContext} from 'react'
import './Achievements.css'
import { themeContext } from '../../Context';
import CodingNinjas from '../../img/codingNinja.png';
import GeeksforGeeks from '../../img/geeksforgeeks.png';
import Devfest from '../../img/devfest.webp';
import Wow from '../../img/wow.svg';
import devloper from '../../img/devleper.png';
import {useId,motion} from 'framer-motion';

const Achievements = () => {
  
  

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works" id='EventsWorks'>
      {/* Left sides */}
      <div className="awsm">
        <span style={{color:darkMode?'white':''}}>My</span>
        <span>Achievements!</span>
        <span>Top-performing Web developer | AIR 74 in CodeBlooded3.0 | 3rd runner up in Novathon Hackathon | Organized Devfest by Google 2022.</span>
        <button className='button t-button'>Upcoming </button>
        <div className="blur t-blur1" style={{ background: '#ABF1FF94' }}></div>
      </div>

      {/* Right sides */}
      <div className="w-right">
        <motion.div 
          initial={{rotate:45}}
          whileInView={{rotate:0}}
          viewport={{margin:'-40px'}}
          transition={{duration:3.5,type:'spring'}}
          className="w-mainCircle">
          <div className="w-secCircle">
            <img src={CodingNinjas} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={GeeksforGeeks} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Devfest} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Wow} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={devloper} alt="" />
          </div>
        </motion.div>
        {/* background circle */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  )
}

export default Achievements