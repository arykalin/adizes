import thunk from 'redux-thunk';
import {modalReducer} from './reducers/questions_modal';
import {currentCallReducer} from './reducers/current_call'
import { applyMiddleware, createStore, combineReducers} from 'redux';
import currentQuestionReducer from "./reducers/current_question";
import currentAnswerReducer from "./reducers/answers";
import {progressReducer} from "./reducers/progress";
import currentStageReducer from "./reducers/current_stage";

const rootReducer = combineReducers({
    modal: modalReducer,
    currentStage: currentStageReducer,
    currentCall: currentCallReducer,
    currentQuestion: currentQuestionReducer,
    answers: currentAnswerReducer,
    progress: progressReducer,
});

export default createStore(rootReducer,applyMiddleware(thunk)
//    +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
