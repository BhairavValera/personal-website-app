import React, { Component } from 'react'
import TimeLine from '../components/Timeline'
import FadeIn from 'react-fade-in'

class Experience extends Component {
    render() {
        return (
            <div id='Experience'>
                <div id="experience-title">
                    Experience
                </div>
                <div>
                    <TimeLine/>
                </div>
            </div>
        )
    }
}

export default Experience