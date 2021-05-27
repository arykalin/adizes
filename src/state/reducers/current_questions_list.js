import stage1Questions from "../../data/stage1";

const initialState = {
    list: stage1Questions.emptyQuestions,
};

export const currentQuestionsListReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_QUESTION_LIST': return { list: action.list };
        default: return state;
    }
}

export default currentQuestionsListReducer
