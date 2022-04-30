import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client'; 
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {rootReducer} from './reducers/rootReducer';
import { BrowserRouter } from "react-router-dom";

const store = createStore(rootReducer);
createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
