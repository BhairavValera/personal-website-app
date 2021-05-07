import React, { Component } from 'react'
import profile from '../images/Profile.jpg'
import FadeIn from 'react-fade-in'
import { Link } from 'react-scroll'

class NavBar extends Component {
    render() {
        return (
            <nav>
                <FadeIn delay='150'>
                    <img src={profile} alt='profile' className='profile'></img>
                    <h1 className='title'> Bhairav Valera </h1>
                    <h1 className='subtitle'> Seattle-Based Full Stack Engineer </h1>
                    <ul className='nav-items'>
                        <FadeIn delay='200'>
                            <li>
                                <Link 
                                    activeClass="active"
                                    to="Home"
                                    spy={true}
                                    smooth={true}
                                    duration={1000}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    activeClass="active"
                                    to="About"
                                    spy={true}
                                    smooth={true}
                                    duration={1000}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    activeClass="active"
                                    to="Projects"
                                    spy={true}
                                    smooth={true}
                                    duration={1000}>
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    activeClass="active"
                                    to="Contact"
                                    spy={true}
                                    smooth={true}
                                    duration={1000}>
                                    Contact
                                </Link>
                            </li>
                        </FadeIn>
                    </ul>
                </FadeIn>
            </nav>
        )
    }
}

export default NavBar
