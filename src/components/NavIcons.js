import React from 'react'
import { Link } from 'react-scroll'

function NavIcons() {
    return (
        <div class="nav">
            <ul>
                <li class="nav-dot">
                    <Link
                        activeClass="active"
                        id="Link"
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={1000}>
                    </Link>
                </li>
                {/* <li class="nav-dot">
                    <Link
                        activeClass="active"
                        id="Link"
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={1000}>
                    </Link>
                </li>
                <li class="nav-dot">
                    <Link activeClass="active" to="experience" spy={true} smooth={true}></Link>
                </li>
                <li class="nav-dot">
                    <Link activeClass="active" to="projects" spy={true} smooth={true}></Link>
                </li>
                <li class="nav-dot">
                    <Link activeClass="active" to="contact" spy={true} smooth={true}></Link>
                </li>*/}
            </ul>
        </div>
    )
}

export default NavIcons
