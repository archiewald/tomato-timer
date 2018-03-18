import React, { Component } from 'react';

import ModePanelContainer from './containers/ModePanelContainer';

import { TopBar } from './components/TopBar';
import { Timer } from './components/Timer';
import { ControlPanel } from './components/ControlPanel';

class App extends Component {
  render() {
    return (
      <div>
        <TopBar/>
        <ModePanelContainer />
        <Timer time={24}/>
        <ControlPanel/>
      </div>
    );
  }
}

export default App;
