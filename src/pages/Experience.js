import React, { Component } from 'react'
import Particles from 'react-particles-js'
import particlesConfig from '../components/particles'
import _Timeline from '../components/Timeline'
import FadeIn from 'react-fade-in'

class Experience extends Component {
    render() {
        return (
            <div id='Experience'>
                <div id="experience-title">
                    Experience
                </div>
                {/* <_Timeline/>
                <div className='particles'>
                    <FadeIn delay='100'>
                        <Particles height={window.outerHeight} params={particlesConfig}/>
                    </FadeIn>
                </div> */}
            </div>
        )
    }
}

export default Experience
