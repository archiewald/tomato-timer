import React from 'react';

export const ModePanel = () => (
    <div className="container my-4">
        <div className="row">
            <div className="col-sm">
                <button type="button" className="btn btn-secondary btn-lg btn-block">
                    Pomodoro
                </button> 
            </div>
            <div className="col-sm">
                <button type="button" className="btn btn-secondary btn-lg btn-block">
                    Short Break
                </button> 
            </div>
            <div className="col-sm">
                <button type="button" className="btn btn-secondary btn-lg btn-block">
                    Long Break
                </button> 
            </div>
        </div>
    </div>
)