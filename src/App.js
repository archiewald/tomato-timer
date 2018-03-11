import React, { Component } from 'react';
import { TopBar } from './TopBar';
import { ModePanel } from './ModePanel';
import { Timer } from './Timer';
import { ControlPanel } from './ControlPanel';

class App extends Component {
  render() {
    return (
      <div>
        <TopBar/>
        <ModePanel/>
        <Timer/>
        <ControlPanel/>
      </div>
    );
  }
}

export default App;
