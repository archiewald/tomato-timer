import React from 'react';

export const ModePanel = ({mode, setMode}) => (
    <div className="container my-4 text-center">
        <div className="btn-group" role="group">
            <button 
                type="button"
                className={`btn btn-secondary btn ${mode==="POMODORO" ? "active" : ""}`}
                onClick={() => setMode("POMODORO")}>
                Pomodoro
            </button> 
            <button 
                type="button"
                className={`btn btn-secondary btn ${mode==="SHORT_BREAK" ? "active" : ""}`}
                onClick={() => setMode("SHORT_BREAK")}>
                Short Break
            </button> 
            <button 
                type="button"
                className={`btn btn-secondary btn ${mode==="LONG_BREAK" ? "active" : ""}`}
                onClick={() => setMode("LONG_BREAK")}>
                Long Break
            </button> 
        </div>
    </div>
)