import React, { Component } from 'react'
import Particles from 'react-particles-js'
import particlesConfig from '../components/particles'
import FadeIn from 'react-fade-in'
import union from '../images/union.jpg'
import flower from '../images/flower.jpg'

class About extends Component {
    render() {
        return (
            <div id='About'>
                <div id="about-title">
                    About
                </div>
                <p id='about-section' align="justify">
                    I majored in Physics and minored in Computer Science at the University of Illinois
                    at Urbana-Champaign (UIUC). 
                    <br />
                    <br />
                    College was a transformative experience for me, where I
                    discovered many passions, one of which is writing clean, modular, and performant code.
                    <br />
                    <br />
                    Over time, I've garnered skills in Linux/Unix administration, 
                    .NET, Java, and Python development, Cloud Computing, and Data Warehousing.
                    I continue push myself to learn about emergent tools and technologies every day!
                    <br />
                    <br />
                    In my free time, I pursue my artistic passions, namely, music, creative writing, and 
                    photography.
                </p>
                {/* <div id='sample-photos'>
                    <img src={union} alt="union" id="union"></img>
                </div>
                <br/>
                <div id='sample-photos'>
                    <img src={flower} alt="flower" id="flower"></img>
                </div>                 */}
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
