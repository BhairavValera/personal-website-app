import React, { Component } from 'react'
import Particles from 'react-particles-js'
import particlesConfig from '../components/particles'
import FadeIn from 'react-fade-in'

class Projects extends Component {
    render() {
        return (
            <div id='Projects'>
                <p id="projects-title" align="justify">
                    Projects
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

export default Projects

