// TO DO:
// - subscribe to store
// - if START_TIMER action is dispatched (or state is changed?), start running clock in interval of 1000 ms
// - on each interval dispatch TICK action with current time

import React from 'react';
import {TitleTimer} from './TitleTimer';
import {MainTimer} from './MainTimer';

export class Clock extends React.Component {
    pomodoroTime = 10000;
    // constructor(props) {
    //     super(props);
    // }
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

    render()  {
        const { baseTime, startedAt, stoppedAt, pauseTimer, resetTimer } = this.props;
        const elapsed = this.getElapsedTime(baseTime, startedAt, stoppedAt)

        if (elapsed >= this.pomodoroTime){
            console.log("POMODORO!");
            pauseTimer();
            resetTimer();
        }

        return (
            <div>
                <TitleTimer time={elapsed}/>
                <MainTimer time={elapsed}/>
            </div>
        )
    }
}