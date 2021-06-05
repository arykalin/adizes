import stage1Questions from "../../data/stage1";

const initialState = {
    list: stage1Questions.emptyQuestions,
    currentCall: "Выберите вызов",
};

export const currentQuestionsListReducer = (state = initialState, action) => {
    console.log("action:", action)
    switch(action.type) {
        case 'SET_QUESTION_LIST': return {
            list: action.list,
            currentCall: action.currentCall,
        };
        default: return state;
    }
}

export default currentQuestionsListReducer
