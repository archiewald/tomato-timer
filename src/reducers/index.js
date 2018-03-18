import { combineReducers } from 'redux'

import {Modes, SET_MODE} from '../actions/index'

const {POMODORO} = Modes;

function mode(state = POMODORO, action) {
    switch (action.type) {
        case SET_MODE: {
            //to do: rewrite with spread operator
            return action.mode
        }
        default: {
            return state
        }
    }
}

const tomatoTimerApp = combineReducers({
    mode,
})

export default tomatoTimerApp;