import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import Rx from 'rxjs/Rx';
import 'rxjs';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import App from './components/app';
import  {rootEpic , Reducer as reducers} from './reducers';


const epicMiddleware = createEpicMiddleware(rootEpic);
const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
</Provider> , document.querySelector('.root'));
