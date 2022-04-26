import React from 'react';
import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './redux/reducer';

const store = createStore(reducer);



// const container = document.getElementById('root');
const root = createRoot(document.getElementById('root'));
root.render(
            <Provider store={store}>
               <App />
            </Provider>
            );

