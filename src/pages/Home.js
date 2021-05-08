import React, { Component } from 'react'
import Particles from 'react-particles-js'
import particlesConfig from '../components/particles'
import FadeIn from 'react-fade-in'

class Home extends Component {
    render() {
        return (
            <div id='Home'>
                <p id="greeting" align="justify">
                    <FadeIn delay='130'>
                        <strong id="heading">Hey, there!</strong>
                    </FadeIn>
                    <FadeIn delay='130'>
                        <br/>
                        I'm Bhairav Valera, a Software Engineer based out of Seattle. 
                        Have a look around and feel free to send me a message if you'd like to hear about my work!
                    </FadeIn>
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

export default Home
