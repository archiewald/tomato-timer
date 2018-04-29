import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import {Modes, setMode} from './actions'

import './styles/index.css'

import App from './App';
import tomatoTimerApp from './reducers'

let store = createStore(tomatoTimerApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(setMode(Modes.POMODORO))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));

