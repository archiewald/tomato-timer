import React from 'react';
import {Modes} from './../actions'

export const ModePanel = ({mode, setMode}) => (
    <div className="container my-4 text-center">
        <div className="btn-group" role="group">
            <button 
                type="button"
                className={`btn btn-secondary btn ${mode===Modes.POMODORO ? "active" : ""}`}
                onClick={() => setMode(Modes.POMODORO)}>
                Pomodoro
            </button> 
            <button 
                type="button"
                className={`btn btn-secondary btn ${mode===Modes.SHORT_BREAK ? "active" : ""}`}
                onClick={() => setMode(Modes.SHORT_BREAK)}>
                Short Break
            </button> 
            <button 
                type="button"
                className={`btn btn-secondary btn ${mode===Modes.LONG_BREAK ? "active" : ""}`}
                onClick={() => setMode(Modes.LONG_BREAK)}>
                Long Break
            </button> 
        </div>
    </div>
)