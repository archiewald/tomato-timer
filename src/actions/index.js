export const SET_MODE = "SET_MODE";

export const Modes = {
    POMODORO: "POMODORO",
    SHORT_BREAK: "SHORT_BREAK",
    LONG_BREAK: "LONG_BREAK",
}

export function setMode(mode){
    return {type: SET_MODE, mode}
}

