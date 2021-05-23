import questionsModalReducer from './reducers/questions_modal'

import {combineReducers} from 'redux'

const allReducers = combineReducers({
    questionsModal: questionsModalReducer,
})

export default allReducers
