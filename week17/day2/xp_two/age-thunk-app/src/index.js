import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client'; 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { reducer } from './redux/reducer';
import App from './App';

export const middleware = (store) => (next) => (action) => {
  next(action);
  console.log('Caught in middleware', JSON.stringify(store.getState()));
  return action
  
}

const store = createStore(reducer, applyMiddleware(middleware));

// console.log(store.getState());

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>
  
);


