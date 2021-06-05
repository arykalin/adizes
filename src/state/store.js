import thunk from 'redux-thunk';
import {modalReducer} from './reducers/questions_modal';
import {currentQuestionsListReducer} from './reducers/current_questions_list'
import { applyMiddleware, createStore, combineReducers} from 'redux';
import currentQuestionReducer from "./reducers/current_question";
import currentAnswerReducer from "./reducers/answers";
import {progressReducer} from "./reducers/progress";

const rootReducer = combineReducers({
    modal: modalReducer,
    currentQuestionsList: currentQuestionsListReducer,
    currentQuestion: currentQuestionReducer,
    answers: currentAnswerReducer,
    progress: progressReducer,
});

export default createStore(rootReducer,applyMiddleware(thunk)
    +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
