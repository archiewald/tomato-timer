import React from 'react';

export const ControlPanel = ({startTimer, pauseTimer, resetTimer}) => (
    <div className="container my-4">
        <div className="row">
            <div className="col-sm">
                <button
                    type="button"
                    className="btn btn-success btn-lg btn-block"
                    onClick={startTimer}>
                    Start
                </button> 
            </div>
            <div className="col-sm">
                <button
                    type="button"
                    className="btn btn-danger btn-lg btn-block"
                    onClick={pauseTimer}
                    >
                    Pause
                </button> 
            </div>
            <div className="col-sm">
                <button
                    type="button"
                    className="btn btn-info btn-lg btn-block"
                    onClick={resetTimer}
                    >
                    Reset
                </button> 
            </div>
        </div>
    </div>
)