import React, { Component } from 'react'
import FadeIn from 'react-fade-in'

class Home extends Component {
    render() {
        return (
            <div id='Home'>
                <div id="heading">
                    <FadeIn delay='100'>
                        Hey, there!
                    </FadeIn>
                </div>
                <div id="greeting">
                    <FadeIn delay='150'>
                        I'm Bhairav Valera, a Software Engineer based out of Seattle.
                        <br/>
                        I have 3+ years in Software Engineering 
                        as well as 1+ years in Data Engineering and Machine Learning. 
                        <br/>                         
                        Have a look around and feel free to send me a message if you'd like to hear about my work!
                    </FadeIn>
                </div>                
            </div>
        )
    }
}

export default Home
