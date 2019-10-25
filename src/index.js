import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import './index.css';
import {createHashHistory} from 'history';
import reduxThunk from 'redux-thunk';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import GroceryReducer from "./reducers/GroceryReducer";
import {combineEpics, createEpicMiddleware} from "redux-observable";
import { categoryEpic } from "./epics/CategoryEpic";
import {productsEpic} from "./epics/ProductsEpic";
import {deleteProductEpic} from "./epics/DeleteProductEpic";
import {updateProductEpic} from './epics/UpdateProductEpic';

const combineReducer = combineReducers({GroceryReducer: GroceryReducer});

const rootEpic = combineEpics(productsEpic, categoryEpic,deleteProductEpic,updateProductEpic);

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
