import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import './index.scss';
import {createHashHistory} from 'history';
import reduxThunk from 'redux-thunk';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import OverviewReducer from './reducers/OverviewReducer'
import 'bootstrap/dist/css/bootstrap.min.css';

import {combineEpics, createEpicMiddleware} from "redux-observable";
import {overviewEpic} from "./epics/OverviewEpic";

const combineReducer = combineReducers({OverviewReducer: OverviewReducer});

const rootEpic = combineEpics(overviewEpic);

const history = createHashHistory();

const epicMiddleware = createEpicMiddleware();
const middlewares = [reduxThunk, epicMiddleware];

const middlewareEnhancer = applyMiddleware(...middlewares);
/* eslint-disable */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(middlewareEnhancer);
const store = createStore(combineReducer, enhancers);

epicMiddleware.run(rootEpic);


ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
