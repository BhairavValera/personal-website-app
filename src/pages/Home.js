import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import FadeIn from 'react-fade-in'
import { Link } from 'react-scroll'
import profile from '../images/Profile.jpg'

class Home extends Component {
    render() {
        return (
            <div id="home">
                <FadeIn
                    className='content home'
                    delay={150}>
                    <img src={profile} alt="profile" class="profile"></img>
                    <div class="greeting">
                        Hello, I'm Bhairav Valera.
                        <br></br>
                        Full-Stack Software Engineer.
                        <br></br>
                        Seattle-based.
                        <br></br>
                    </div>
                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}>
                        <Button variant="outline-light" size="lg">
                            Explore
                        </Button>
                    </Link>
                </FadeIn>
            </div>
        )
    }
}

export default Home
