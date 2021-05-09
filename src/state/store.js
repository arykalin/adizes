import thunk from 'redux-thunk';
import {counterReducer} from './counterReducer';
import { applyMiddleware, createStore, combineReducers} from 'redux';

const rootReducer = combineReducers({
    counter: counterReducer
});

export default createStore(rootReducer,applyMiddleware(thunk));
