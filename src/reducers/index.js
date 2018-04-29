import { combineReducers } from 'redux'

import {Modes} from '../actions/index'

const {POMODORO} = Modes;

function mode(state = {POMODORO}, action) {
    switch (action.type) {
        case "SET_MODE": {
            return action.mode
        }
        default: {
            return state
        }
    }
}

//todo: fix start after pause

function control(state = {
    startedAt: undefined,
    stoppedAt: undefined,
    baseTime: undefined,
}, action) {
    switch (action.type) {
        case "START_TIMER": 
            return {
                ...state,
                baseTime: action.baseTime,
                startedAt: action.now,
                stoppedAt: undefined
            };
        case "PAUSE_TIMER":
            return {
                ...state,
                stoppedAt: action.now
            };
        case "RESET_TIMER":
            return {
                ...state,
                baseTime: 0,
                startedAt: state.startedAt ? action.now : undefined,
                stoppedAt: state.stoppedAt ? action.now : undefined
            };
        default:
            return state;
    }
}

const tomatoTimerApp = combineReducers({
    mode,
    control,
})

export default tomatoTimerApp;