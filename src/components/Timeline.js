import React, { Component } from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { TimelineOppositeContent } from '@material-ui/lab';
import { withStyles } from '@material-ui/core/styles'
import ExperienceCard from './ExperienceCard';

class TimeLine extends Component {
    StyledTimelineContent = withStyles({
        root: {
            position: 'relative',
            bottom: '2rem'
        }
    })(TimelineContent)

    render() {
        return (
            <Timeline align="left">
                <TimelineItem>
                    <TimelineOppositeContent>April 2021 — Present</TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot variant='outlined'/>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        Net-Inspect, LLC
                        {/* <ExperienceCard companyName='netInspect'></ExperienceCard> */}
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>July 2020 — March 2021</TimelineOppositeContent>                    
                    <TimelineSeparator>
                    <TimelineDot variant='outlined'/>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        Percolata Corporation
                        {/* <ExperienceCard companyName='percolata'></ExperienceCard> */}
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>June 2019 — August 2019</TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot variant='outlined'/>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        Argonne National Laboratory
                        {/* <ExperienceCard companyName='anl'></ExperienceCard> */}
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>November 2018 — July 2020</TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot variant='outlined'/>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        University of Illinois at Urbana-Champaign
                        {/* <ExperienceCard companyName='illinois'></ExperienceCard> */}
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>June 2018 — August 2018</TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot id='timeline-dot' color='green' variant='outlined'/>
                    </TimelineSeparator>
                    <TimelineContent>
                        Brookhaven National Laboratory
                        {/* <ExperienceCard companyName='bnl'></ExperienceCard> */}
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        )
    }
}

export default TimeLine