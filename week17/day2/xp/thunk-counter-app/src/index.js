import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client'; 
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import { reducer } from './redux/reducer';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const store = createStore(reducer);

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
