import React, { Component } from 'react'
import Particles from 'react-particles-js'
import particlesConfig from '../components/particles'
import FadeIn from 'react-fade-in'

class Home extends Component {
    render() {
        return (
            <div id='Home' className='home'>
                Home
                <div className='particles'>
                    <FadeIn delay='150'>
                        <Particles height={window.outerHeight} params={particlesConfig}/>
                    </FadeIn>
                </div>
            </div>
        )
    }
}

export default Home
