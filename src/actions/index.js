export const Modes = {
    POMODORO: "POMODORO",
    SHORT_BREAK: "SHORT_BREAK",
    LONG_BREAK: "LONG_BREAK",
}

export function setMode(mode){
    return {type: "SET_MODE", mode}
}

export function startTimer(baseTime = 0){
    console.log("in startTimer baseTime is ",baseTime);
    return {
        type: "START_TIMER",
        baseTime: baseTime,
        now: new Date().getTime()
    }
}

export function pauseTimer(){
    return {
        type: "PAUSE_TIMER",
        now: new Date().getTime()
    }
}

export function resetTimer(){
    return {
        type: "RESET_TIMER",
        now: new Date().getTime()
    }
}

export function tick(currentTime){
    return {
        type: "TICK",
        currentTime
    }
}
