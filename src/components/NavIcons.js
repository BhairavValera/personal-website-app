import React, { Component } from 'react'
import { Link } from 'react-scroll'
import { Button } from 'react-bootstrap'

class NavIcons extends Component {
    render() {
        return (
            <div class="nav">
                <ul>
                    <li>
                        <Link
                            activeClass="active"
                            id="Link"
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={1000}>
                                <Button variant="outline-light"></Button>
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            id="Link"
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={1000}>
                                <Button variant="outline-light"></Button>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            activeClass="active" 
                            id="Link"
                            to="experience" 
                            spy={true} 
                            smooth={true}
                            duration={1000}>
                                <Button variant="outline-light"></Button>                            
                        </Link>
                    </li>
                    <li>
                        <Link 
                            activeClass="active" 
                            id="Link"
                            to="projects" 
                            spy={true} 
                            smooth={true}
                            duration={1000}>
                                <Button variant="outline-light"></Button>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            activeClass="active"
                            id="Link"
                            to="contact"
                            spy={true} 
                            smooth={true}
                            duration={1000}>
                                <Button variant="outline-light"></Button>
                        </Link>
                    </li>
                </ul>
            </div>
        )        
    }
}

export default NavIcons
