import React from 'react';
import moment from 'moment';
import Sound from 'react-sound';
import {TitleTimer} from './TitleTimer';
import {MainTimer} from './MainTimer';

export class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            playSound: Sound.status.STOPPED
        }
    }
    
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    tick() {
        const elapsedTime = this.getElapsedTime(this.props.baseTime, this.props.startedAt, this.props.stoppedAt);
        if (elapsedTime >=  this.minutesToMiliseconds(this.props.mode.time)){
            console.log(this.props.mode.name);
            this.setState({
                playSound: Sound.status.PLAYING
            })
            this.props.pauseTimer();
            this.props.resetTimer();
        }   else {
            this.setState({
                playSound: Sound.status.STOPPED
            })
        }
        this.forceUpdate();
    }
    
    
    render()  {
        const { baseTime, startedAt, stoppedAt, mode } = this.props;
        const elapsedTime = this.getElapsedTime(baseTime, startedAt, stoppedAt)                  
        return (
            <div>
                <TitleTimer time={this.getTimeLeft(elapsedTime, mode.time)}/>
                <MainTimer time={this.getTimeLeft(elapsedTime, mode.time)}/>
                <Sound
                    url="alarm.mp3"
                    playStatus={this.state.playSound}
                    />
            </div>
        )
    }

    // Helper function that takes store state
    // and returns the current elapsed time
    getElapsedTime(baseTime, startedAt, stoppedAt = new Date().getTime()) {
        if (!startedAt) {
            return 0;
        } else {
            return stoppedAt - startedAt + baseTime;
        }
    }
    
    minutesToMiliseconds(minutes){
        return minutes * 60 * 1000
    }
    
    getTimeLeft(elapsedTime, setTime){
        const timeLeft = this.minutesToMiliseconds(setTime) - elapsedTime;
        console.log(timeLeft);
        return `${
            moment
            .duration(timeLeft).
            minutes()
        }:${
            moment
            .duration(timeLeft)
            .seconds()
            .toString()
            .padStart(2,"0")
        }`;
    }
}