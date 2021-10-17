import React, { Component } from 'react'
import profile from '../images/Profile.jpg'
import FadeIn from 'react-fade-in'
import { Button } from 'react-bootstrap'

class Home extends Component {
    render() {
        return (
            <div class="content home">
                <img src={profile} alt="profile" class="profile"></img>
                <div class="greeting">
                    Hello, I'm Bhairav Valera.
                    <br></br>
                    Full-Stack Software Engineer.
                    <br></br>
                    Seattle-based.
                    <br></br>
                </div>
                <Button variant="outline-light" size="lg">Explore</Button>
            </div>
        )
    }
}

export default Home
