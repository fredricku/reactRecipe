import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
// import rootReducer from './Components/RootReducer'
// import Thunk from 'redux-thunk';
// import {Provider}from 'react-redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import {createStore, applyMiddleware}from 'redux';
import * as serviceWorker from './serviceWorker';
//import 'semantic-ui-css/semantic-ui.min.css';
// const store= createStore(rootReducer,
//   composeWithDevTools(applyMiddleware(Thunk)));

ReactDOM.render(
  <BrowserRouter>

     <App />
     
  </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
