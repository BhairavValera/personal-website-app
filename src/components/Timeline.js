import React, { Component } from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { TimelineOppositeContent } from '@material-ui/lab';
import ExperienceCard from './ExperienceCard';

class TimeLine extends Component {
    render() {
        return (
            <Timeline align="left">
                <TimelineItem>
                    <TimelineOppositeContent>April 2021 — Present</TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <ExperienceCard companyName='netInspect'></ExperienceCard>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>July 2020 — March 2021</TimelineOppositeContent>                    
                    <TimelineSeparator>
                    <TimelineDot/>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Percolata</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>June 2019 — August 2019</TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot/>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Argonne</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>November 2018 — July 2020</TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Dept. of Physics</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>June 2018 — August 2018</TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>Brookhaven</TimelineContent>
                </TimelineItem>
            </Timeline>
        )
    }
}

export default TimeLine