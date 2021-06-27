import React, { Component } from 'react'
import TimeLine from '../components/Timeline'

class Experience extends Component {
    render() {
        return (
            <div id='Experience'>
                <div id="experience-title">
                    Experience
                </div>
                <div id='Timeline'>
                    <TimeLine/>
                </div>
            </div>
        )
    }
}

export default Experience