import React, { Component } from 'react'
import FadeIn from 'react-fade-in'

class About extends Component {
    render() {
        return (
            <div id="about" class="content about">
                <div class="page-title">
                    About
                </div>
                <div className='about-info'>
                    <FadeIn>
                        I'm a Full-Stack Software Engineer, currently working out of Seattle.
                        <br />
                        <br />
                        I have expertise in Linux/Unix administration, 
                        .NET, Java, and Python development, Cloud Computing, and Data Warehousing.
                        <br />
                        <br />
                        In my free time, I continue push myself to learn about emergent tools and technologies every day!
                        <br />
                        <br />
                        I pursue my artistic passions, namely, music, creative writing, and 
                        photography.
                    </FadeIn>
                </div>
            </div>
        )
    }
}

export default About
