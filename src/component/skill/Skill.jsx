import React from 'react'
import './Skill.css';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import Card from '../card/Card';
import ReactLogo from '../../img/React.png';
import NodeJs from '../../img/Nodejs.png';
import SQL from '../../img/SQL.png';

const Skill = () => {

    const transition = { duration: 1, type: 'spring' };

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="techno" id="Technologies">
            {/* Left sides */}
            <div className="awsm">
                <span style={{ color: darkMode ? 'white' : '' }}>My Skills</span>
                <span>are....</span>
                <span>Experienced Frontend developer proficient in HTML, CSS, and JavaScript, ReactJs/NestJs, Tailwind CSS. </span>
                <a href="https://www.linkedin.com/in/seemant-kamlapuri-b682331b5/details/skills/"><button className='button t-button'>check for more</button></a>
                <div className="blur t-blur1" style={{ background: '#ABF1FF94' }}></div>
            </div>

            {/* Right sides */}
            <div className="cards">
                {/* First Card */}
                <motion.div
                    initial={{ left: '25rem' }}
                    whileInView={{ left: '14rem' }}
                    transition={transition}
                    style={{ left: '14rem' }}>
                    <Card
                        emoji={ReactLogo}
                        heading={'ReactJs/NextJs'}
                        detail={"Build Interactive UI , SPA , reusable components"}
                        link={"https://react.dev/"}
                    />
                </motion.div>
                {/* Second Card */}
                <motion.div
                    initial={{ left: "-11rem", top: "12rem" }}
                    whileInView={{ left: "-4rem" }}
                    transition={transition}
                    style={{ top: '12rem', left: '-4rem' }}>
                    <Card
                        emoji={NodeJs}
                        heading={'NodeJs & Express'}
                        detail={"API creation, Server-side devlopment , Protocols, https-req/res"}
                        link={"https://nodejs.org/en"}
                    />
                </motion.div>
                {/* Third Card */}
                <motion.div
                    initial={{ top: "19rem", left: "25rem" }}
                    whileInView={{ left: "12rem" }}
                    transition={transition}
                    style={{ top: '19rem', left: '12rem' }}>
                    <Card
                        emoji={SQL}
                        heading={'Databases'}
                        detail={"SQL DB Management,NoSQL DB Management"}
                        link={"https://www.geeksforgeeks.org/difference-between-sql-and-nosql/"}
                    />
                    <div className='blur t-blur2' style={{ background: "var(--purple)" }}></div>
                </motion.div>
            </div>
        </div>
    )
}

export default Skill