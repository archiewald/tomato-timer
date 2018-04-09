import React, { Component } from 'react';

import ModePanelContainer from './containers/ModePanelContainer';
import ControlPanelContainer from './containers/ControlPanelContainer';

import { TopBar } from './components/TopBar';
import { Timer } from './components/Timer';

class App extends Component {
  render() {
    return (
      <div>
        <TopBar/>
        <ModePanelContainer />
        <Timer time={24}/>
        <ControlPanelContainer/>
      </div>
    );
  }
}

export default App;
