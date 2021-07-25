import React, { Component } from 'react'
import anl from '../images/anl.jpg'
import bnl from '../images/bnl.png'
import illinois from '../images/illinois.jpg'
import netInspect from '../images/netinspect.png'
import percolata from '../images/percolata.png'

class ExperienceCard extends Component {
    constructor(props) {
        super(props)

        this.onClick = this.onClick.bind(this);

        this.imageAliases = {
            'anl': anl,
            'bnl': bnl,
            'illinois': illinois,
            'netInspect': netInspect,
            'percolata': percolata
        };
    }

    onClick() {
        switch (this.props.companyName) {
            case "netInspect": {
                window.location.assign('https://www.net-inspect.com')
                break;
            }
            case "percolata": {
                window.location.assign('https://www.percolata.com')
                break;
            }
            case "anl": {
                window.location.assign('https://www.anl.gov')
                break;
            }
            case "illinois": {
                window.location.assign('https://physics.illinois.edu')
                break;
            }
            case "bnl": {
                window.location.assign('https://www.bnl.gov/world/')
                break;
            }
            default: {
                break;
            }
        }
    }

    render() {
        return (
            <div id='ExperienceCard' onClick={this.onClick}>
                <div id='Logo'>
                    <img src={this.imageAliases[this.props.companyName]} 
                        alt='companyLogo' id='companyLogo'></img>
                </div>
                {/* <div id='companyInfo'>
                    {this.props.companyName}
                </div> */}
            </div>
        )
    }
}

export default ExperienceCard
