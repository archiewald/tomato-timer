import React from 'react';
import moment from 'moment';
import {TitleTimer} from './TitleTimer';
import {MainTimer} from './MainTimer';

export class Clock extends React.Component {
    componentDidMount() {
        this.interval = setInterval(this.forceUpdate.bind(this), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
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

    getTimeLeft(elapsedTime, setTime){
        const timeLeft = setTime * 60 * 1000 - elapsedTime;
        console.log(timeLeft);
        return `${moment.duration(timeLeft).minutes()}:${moment.duration(timeLeft).seconds()}`;
    }

    render()  {
        const { baseTime, startedAt, stoppedAt, pauseTimer, resetTimer, mode } = this.props;
        const elapsedTime = this.getElapsedTime(baseTime, startedAt, stoppedAt)

        // if (elapsed >= this.pomodoroTime){
        //     console.log("POMODORO!");
        //     pauseTimer();
        //     resetTimer();

        // }

        return (
            <div>
                <p>{mode.name},{mode.time}</p>
                <TitleTimer time={this.getTimeLeft(elapsedTime, mode.time)}/>
                <MainTimer time={this.getTimeLeft(elapsedTime, mode.time)}/>
            </div>
        )
    }
}