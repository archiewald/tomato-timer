import React from 'react';

export const ModePanel = () => (
    <div className="container my-4 text-center">
        <div className="btn-group" role="group">
            <button type="button" className="btn btn-secondary btn">
                Pomodoro
            </button> 
            <button type="button" className="btn btn-secondary btn">
                Short Break
            </button> 
            <button type="button" className="btn btn-secondary btn">
                Long Break
            </button> 
        </div>
    </div>
)