import React from 'react';
import {FaBars} from 'react-icons/fa'
import { MobileIcon, Nav, NavbarContainer, NavItem, NavLinks, NavMenu } from './navbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                            <NavLinks to="projects">Projects</NavLinks>
                            <NavLinks to="contact">Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;