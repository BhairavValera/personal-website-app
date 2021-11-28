import React, { Component } from 'react'
import { Link } from 'react-scroll'
import { Button } from 'react-bootstrap'
import FadeIn from 'react-fade-in'

class NavIcons extends Component {
    render() {
        return (
            <div className="nav">
                <ul>
                    <FadeIn delay={150}>
                        <li>
                            <Link
                                activeClass="nav-active"
                                to="home"
                                spy={true}
                                smooth={true}
                                duration={500}>
                                    <Button variant="outline-light"></Button>
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="nav-active"
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={500}>
                                    <Button variant="outline-light"></Button>
                            </Link>
                        </li>
                        <li>
                            <Link 
                                activeClass="nav-active"
                                to="experience" 
                                spy={true} 
                                smooth={true}
                                duration={500}>
                                    <Button variant="outline-light"></Button>                            
                            </Link>
                        </li>
                        <li>
                            <Link 
                                activeClass="nav-active"
                                to="projects" 
                                spy={true} 
                                smooth={true}
                                duration={500}>
                                    <Button variant="outline-light"></Button>
                            </Link>
                        </li>
                        <li>
                            <Link 
                                activeClass="nav-active"
                                to="contact"
                                spy={true} 
                                smooth={true}
                                duration={500}>
                                    <Button variant="outline-light"></Button>
                            </Link>
                        </li>
                    </FadeIn>
                </ul>
            </div>
        )        
    }
}

export default NavIcons
