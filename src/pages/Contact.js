import React, { Component } from 'react'
import Particles from 'react-particles-js'
import particlesConfig from '../components/particles'
import FadeIn from 'react-fade-in'

class Contact extends Component {
    render() {
        return (
            <div id='Contact' className='contact'>
                Contact
                <div className='particles'>
                    <FadeIn delay='150'>
                        <Particles height={window.outerHeight} params={particlesConfig}/>
                    </FadeIn>
                </div>
            </div>
        )
    }
}

export default Contact
