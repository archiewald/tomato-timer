export const Modes = {
    POMODORO: {
        name: "POMODORO",
        time: 20,
    },
    SHORT_BREAK: {
        name: "SHORT_BREAK",
        time: 5,
    },
    LONG_BREAK: {
        name: "LONG_BREAK",
        time: 10,
    }
}

export function setMode(mode){
    return {type: "SET_MODE", mode}
}

export function startTimer(baseTime = 0){
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
