import thunk from 'redux-thunk';
import {counterReducer} from './reducers/questions_modal';
import { applyMiddleware, createStore, combineReducers} from 'redux';

const rootReducer = combineReducers({
    counter: counterReducer
});

export default createStore(rootReducer,applyMiddleware(thunk) +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
