import React, { Component } from 'react'
import github from '../images/GitHub.png'
import linkedin from '../images/linkedin.png'
import mail from '../images/mail.png'

class Contact extends Component {
    constructor(props) {
        super(props)
        this.mailBoxOnClick = this.mailBoxOnClick.bind(this)
    }

    mailBoxOnClick() {
        window.open('mailto:bhairavvalera98@gmail.com')
    }

    render() {
        return (
            <div id='Contact'>                
                <div id="contact-title" align="justify">
                    Contact
                </div>
                <div id="contact-links">
                    <div id="github-box">
                        <a href="https://github.com/bhairavvalera">
                            <img src={github} alt='github' className='github'></img>
                            <figcaption id="github-text">
                                <br></br>
                                Follow me
                            </figcaption>
                        </a>
                    </div>
                    <div id="linkedin-box">
                        <a href="https://www.linkedin.com/in/bhairavvalera/">
                            <img src={linkedin} alt='linkedin' className='linkedin'></img>
                            <figcaption id="linkedin-text">
                                <br></br>
                                Connect with me
                            </figcaption>
                        </a>
                    </div>
                    <div id="mail-box" onClick={this.mailBoxOnClick}>
                        <img src={mail} alt='mail' className='mail'></img>
                        <figcaption id="mail-text">
                            <br></br>
                            Email me
                        </figcaption>
                    </div>             
                </div>
            </div>
        )
    }
}

export default Contact
