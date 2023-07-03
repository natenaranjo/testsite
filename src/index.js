import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import db from './store/db';
import store from './store/store';
import './assets/index.css';
import App from './App';

db();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
);