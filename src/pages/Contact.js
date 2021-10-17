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
            <div class="content contact">                
                <div class="page-title">
                    Contact
                </div>
                <div class="contact-links">
                    <div class="contact-box">
                        <a href="https://github.com/bhairavvalera">
                            <img src={github} alt="github" class="contact-img"></img>
                            <figcaption class="contact-text">
                                <br></br>
                                Follow me
                            </figcaption>
                        </a>
                    </div>
                    <div class="contact-box">
                        <a href="https://www.linkedin.com/in/bhairavvalera/">
                            <img 
                                src={linkedin} alt="linkedin" 
                                class="contact-img linkedin-img"></img>
                            <figcaption class="contact-text">
                                <br></br>
                                Connect with me
                            </figcaption>
                        </a>
                    </div>
                    <div class="contact-box" onClick={this.mailBoxOnClick}>
                        <img src={mail} alt="mail" class="contact-img"></img>
                        <figcaption class="contact-text">
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
