import React, { Component } from 'react'
import NavItem from './NavItem'
import profile from '../images/Profile.jpg'
import FadeIn from 'react-fade-in'

class NavBar extends Component {

    constructor(props) {
        super(props)
        this.state={
            'NavItemActive':''
        }
    }

    activeitem=(x)=> {
        if (this.state.NavItemActive.length > 0) {
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemId': x}, () => {
            document.getElementById(this.state.NavItemActive).classList.add('active')
        })
    }

    render() {
        return (
            <nav>
                <FadeIn delay='150'>
                    <img src={profile} alt='profile' className='profile'></img>
                    <h1 className='title'> Bhairav Valera </h1>
                    <h1 className='subtitle'> Seattle-Based Full Stack Engineer </h1>
                    <ul>
                        <FadeIn delay='200'>
                            <NavItem item='Home' tolink='/' activec={this.activeitem}></NavItem>
                            <NavItem item='About' tolink='/about' activec={this.activeitem}></NavItem>
                            <NavItem item='Projects' tolink='/projects' activec={this.activeitem}></NavItem>
                            <NavItem item='Contact' tolink='/contact' activec={this.activeitem}></NavItem>
                        </FadeIn>
                    </ul>
                </FadeIn>
            </nav>
        )
    }
}

export default NavBar
