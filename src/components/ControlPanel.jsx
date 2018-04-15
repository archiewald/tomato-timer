import React from 'react';

function getElapsedTime(baseTime, startedAt, stoppedAt = new Date().getTime()) {
    if (!startedAt) {
      return 0;
    } else {
      return stoppedAt - startedAt + baseTime;
    }
}
  

export const ControlPanel = ({startTimer, pauseTimer, resetTimer, baseTime, startedAt, stoppedAt}) => {
    console.log(baseTime, startedAt)
    const elapsed = getElapsedTime(baseTime, startedAt, stoppedAt);

    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-sm">
                    <button
                        type="button"
                        className="btn btn-success btn-lg btn-block"
                        onClick={() => startTimer(elapsed)}>
                        Start
                    </button> 
                </div>
                <div className="col-sm">
                    <button
                        type="button"
                        className="btn btn-danger btn-lg btn-block"
                        onClick={() => pauseTimer()}
                        >
                        Pause
                    </button> 
                </div>
                <div className="col-sm">
                    <button
                        type="button"
                        className="btn btn-info btn-lg btn-block"
                        onClick={() => resetTimer()}
                        >
                        Reset
                    </button> 
                </div>
            </div>
        </div>
    )

}