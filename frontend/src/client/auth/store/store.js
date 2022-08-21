import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import loginFormReducers from '../reducers/loginFormReducer';

const composeEnhancers = composeWithDevTools({}) || compose;

export const store = createStore(
	loginFormReducers,
	composeEnhancers(applyMiddleware(thunk))
);