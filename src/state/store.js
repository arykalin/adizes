import thunk from 'redux-thunk';
import {modalReducer} from './reducers/questions_modal';
import { applyMiddleware, createStore, combineReducers} from 'redux';

const rootReducer = combineReducers({
    modal: modalReducer
});

export default createStore(rootReducer,applyMiddleware(thunk)
    +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
