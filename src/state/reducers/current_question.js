const initialState = {
    currentQuestionId: "init",
};

export const currentQuestionReducer = (state = initialState, action) => {
    console.log("action:", action)
    switch(action.type) {
        case 'SET_QUESTION': return {
            currentQuestionId: action.currentQuestionId,
        };
        default: return state;
    }
}

export default currentQuestionReducer
