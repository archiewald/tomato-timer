import { combineReducers } from 'redux'

import {Modes} from '../actions/index'
import {Controls} from '../actions/index'

const {POMODORO} = Modes;
const {ONGOING, INITIAL, PAUSED} = Controls;

const POMODORO_DEFAULT_TIME = 1200;

function mode(state = POMODORO, action) {
    switch (action.type) {
        case "SET_MODE": {
            return action.mode
        }
        default: {
            return state
        }
    }
}

function control(state = "INITIAL", action) {
    switch (action.type) {
        case "START_TIMER": {
            return ONGOING;
        }
        case "PAUSE_TIMER": {
            return PAUSED;
        }
        case "RESET_TIMER": {
            return INITIAL;
        }
        default: {
            return state;
        }
    }
}

function pomodoroTime(state = POMODORO_DEFAULT_TIME) {
    return state;
}

// function time(state = POMODORO_DEFAULT_TIME, a)

const tomatoTimerApp = combineReducers({
    mode,
    control,
    pomodoroTime,
})

export default tomatoTimerApp;