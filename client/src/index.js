import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import App from './App';
import reducers from './reducers';
import './index.css';

const store = configureStore({
  reducer: reducers, // no need for combineReducers manually
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // adds thunk to default middleware
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
