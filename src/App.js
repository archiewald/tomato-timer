import React, { Component } from 'react';

import ModePanelContainer from './containers/ModePanelContainer';
import ControlPanelContainer from './containers/ControlPanelContainer';
import ClockContainer from './containers/ClockContainer';

import { TopBar } from './components/TopBar';
import { Clock } from './components/Clock';

class App extends Component {
  render() {
    return (
      <div>
        <TopBar/>
        <ModePanelContainer />
        <ClockContainer/>
        <ControlPanelContainer/>
      </div>
    );
  }
}

export default App;
