import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';
import './index.css';
import App from './App';

ReactDOM.render(
  // provider is a component that is the parent of everything of the application
  // as a parent, it allows us to get acess to all of things related to the data we want to store on redux state
  // once we pass the store object as a parameter for the provider, we are able to give the store content to the rest of the app
  <Provider store = {store} >
    <BrowserRouter>
      <PersistGate persistor = {persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
