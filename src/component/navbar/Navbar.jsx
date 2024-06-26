import React from 'react'
import Toggle from '../toggle/Toggle'
import './Navbar.css'
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <div className='n-wrapper'>
            <div className='n-left'>
                <div className="n-name">PORTFOLIO</div>
                <Toggle />
            </div>
            <div className='n-left'>
                <div className="n-list">
                    <ul style={{ listStyleType: 'none' }}>
                        <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'><li>Home</li></Link>
                        <Link spy={true} to='Technologies' smooth={true} ><li>Skills</li></Link>
                        <Link spy={true} to='EventsWorks' smooth={true} ><li>Achievements</li></Link>
                        <Link spy={true} to='Gallery' smooth={true} ><li>Projects</li></Link>
                        <Link spy={true} to='Team' smooth={true} ><li>Experiences</li></Link>
                        <Link spy={true} to='Contact' smooth={true} ><li>Contacts</li></Link>             

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar