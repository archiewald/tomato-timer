import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import {setMode} from './actions'

import './styles/index.css'

//import { setMode } from './actions'
import App from './App';
import tomatoTimerApp from './reducers'

let store = createStore(tomatoTimerApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Log the initial state
console.log(store.getState())
 
// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// Stop listening to state updates
//unsubscribe()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));

