import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {  createStore } from 'redux'
import { bookReducer } from './store/reducers/book';
import {composeWithDevTools} from '@redux-devtools/extension'
import { Provider } from 'react-redux';

const myStore = createStore(bookReducer, composeWithDevTools());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

