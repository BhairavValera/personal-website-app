import React, { Component } from 'react'
import Particles from 'react-particles-js'
import particlesConfig from '../components/particles'
import FadeIn from 'react-fade-in'

class Home extends Component {
    render() {
        return (
            <div id='Home'>
                <FadeIn delay='70'>
                    <strong id="heading">Hey, there!</strong>
                </FadeIn>
                <p id="greeting" align="justify">
                    <FadeIn delay='70'>
                        <br/>
                        I'm Bhairav Valera, a Software Engineer based out of Seattle.
                        <br/>
                        I have 3+ years in Software Engineering 
                        as well as 1+ years in Data Engineering and Machine Learning. 
                        <br/>                         
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
