import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {Provider} from 'react-redux';
import App from './App';

import thunk from 'redux-thunk';

import {name_reducer, res_reducer} from './redux/reducer';

import {createStore, applyMiddleware, combineReducers} from 'redux';
const rootreducer = combineReducers({name_reducer, res_reducer});
const store = createStore(rootreducer, applyMiddleware(thunk));

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);

// ReactDOM.render(
//   <React.StrictMode>
//       <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


