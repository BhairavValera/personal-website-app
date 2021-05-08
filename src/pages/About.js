import React, { Component } from 'react'
import Particles from 'react-particles-js'
import particlesConfig from '../components/particles'
import FadeIn from 'react-fade-in'

class About extends Component {
    render() {
        return (
            <div id='About'>
                <p id="about-title" align="justify">
                    About
                </p>
                <div className='particles'>
                    <FadeIn delay='100'>
                        <Particles height={window.outerHeight} params={particlesConfig}/>
                    </FadeIn>
                </div>
            </div>
        )
    }
}

export default About
