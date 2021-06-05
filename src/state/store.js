import thunk from 'redux-thunk';
import {modalReducer} from './reducers/questions_modal';
import {currentQuestionsListReducer} from './reducers/current_questions_list'
import { applyMiddleware, createStore, combineReducers} from 'redux';
import currentQuestionReducer from "./reducers/current_question";

const rootReducer = combineReducers({
    modal: modalReducer,
    currentQuestionsList: currentQuestionsListReducer,
    currentQuestion: currentQuestionReducer,
});

export default createStore(rootReducer,applyMiddleware(thunk)
    +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
