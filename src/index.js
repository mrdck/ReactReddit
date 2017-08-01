import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Rx from 'rxjs/Rx';
import 'rxjs';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import App from './components/app';
import View from './components/containers/view';
import  {rootEpic , Reducer as reducers} from './reducers';


const epicMiddleware = createEpicMiddleware(rootEpic);
const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <Router>
          <Switch>
              <Route exact path="/" component={App} />
              <Route exact path="/:r/:id" component={View} />
          </Switch>
      </Router>
</Provider> , document.querySelector('.root'));
