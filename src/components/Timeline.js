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
                    <TimelineDot />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <this.StyledTimelineContent>
                        <ExperienceCard companyName='netInspect'></ExperienceCard>
                    </this.StyledTimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>July 2020 — March 2021</TimelineOppositeContent>                    
                    <TimelineSeparator>
                    <TimelineDot/>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <this.StyledTimelineContent>
                        <ExperienceCard companyName='percolata'></ExperienceCard>
                    </this.StyledTimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>June 2019 — August 2019</TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot/>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <this.StyledTimelineContent>
                        <ExperienceCard companyName='anl'></ExperienceCard>
                    </this.StyledTimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>November 2018 — July 2020</TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <this.StyledTimelineContent>
                        <ExperienceCard companyName='illinois'></ExperienceCard>
                    </this.StyledTimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>June 2018 — August 2018</TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot />
                    </TimelineSeparator>
                    <this.StyledTimelineContent>
                        <ExperienceCard companyName='bnl'></ExperienceCard>
                    </this.StyledTimelineContent>
                </TimelineItem>
            </Timeline>
        )
    }
}

export default TimeLine