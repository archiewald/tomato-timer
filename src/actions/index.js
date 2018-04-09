export const Modes = {
    POMODORO: "POMODORO",
    SHORT_BREAK: "SHORT_BREAK",
    LONG_BREAK: "LONG_BREAK",
}

export const Controls = {
    INITIAL: "INITIAL",
    ONGOING: "ONGOING",
    PAUSED: "PAUSED",
}

export function setMode(mode){
    return {type: "SET_MODE", mode}
}

export function startTimer(){
    return {type: "START_TIMER"}
}

export function pauseTimer(){
    return {type: "PAUSE_TIMER"}
}

export function resetTimer(){
    return {type: "RESET_TIMER"}
}

export function tick(currentTime){
    return {
        type: "TICK",
        currentTime
    }
}
