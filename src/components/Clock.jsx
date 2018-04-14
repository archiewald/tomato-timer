// TO DO:
// - subscribe to store
// - if START_TIMER action is dispatched (or state is changed?), start running clock in interval of 1000 ms
// - on each interval dispatch TICK action with current time

import React from 'react';
import {TitleTimer} from './TitleTimer';
import {MainTimer} from './MainTimer';

export class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: this.props.mode,
            time: 0
        }
    }

    render()  {
        return (
            <div>
                <TitleTimer time={this.state.time}/>
                <MainTimer time={this.state.time}/>
            </div>
        )
    }
}