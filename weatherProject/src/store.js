import { applyMiddleware, compose, createStore } from 'redux'
import { weatherReducer } from './reducer/weatherReducer';
import {thunk} from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    weatherReducer,
    composeEnhancers(applyMiddleware(thunk))
);


export default store