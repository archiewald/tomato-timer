import React from 'react';

export const ControlPanel = (onClick) => (
    <div className="container my-4">
        <div className="row">
            <div className="col-sm">
                <button
                    type="button"
                    className="btn btn-success btn-lg btn-block"
                    onClick={onClick}>
                    Start
                </button> 
            </div>
            <div className="col-sm">
                <button
                    type="button"
                    className="btn btn-danger btn-lg btn-block"
                    onClick={onClick}>
                    Stop
                </button> 
            </div>
            <div className="col-sm">
                <button
                    type="button"
                    className="btn btn-info btn-lg btn-block"
                    onClick={onClick}>
                    Reset
                </button> 
            </div>
        </div>
    </div>
)