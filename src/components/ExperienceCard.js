import React, { Component } from 'react'
import anl from '../images/anl.jpg'
import bnl from '../images/bnl.png'
import illinois from '../images/illinois.jpg'
import netInspect from '../images/netinspect.png'
import percolata from '../images/percolata.png'

class ExperienceCard extends Component {
    constructor(props) {
        super(props)

        this.imageAliases = {
            'anl': anl,
            'bnl': bnl,
            'illinois': illinois,
            'netInspect': netInspect,
            'percolata': percolata
        };
    }

    render() {
        return (
            <div id='ExperienceCard'>
                <div id='Logo'>
                    <img src={this.imageAliases[this.props.companyName]} 
                        alt='companyLogo' id='companyLogo'></img>
                </div>
                <div id='companyInfo'>
                    {this.props.companyName}
                </div>
            </div>
        )
    }
}

export default ExperienceCard
