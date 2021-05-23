const initialState = {
    showQuestionModal: false,
};
export const modalReducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case 'SHOW_QUESTION_MODAL':
            return {...state, showQuestionModal: true};
        case'HIDE_QUESTION_MODAL':
            return {...state, showQuestionModal: false}
        default:
            return state;
    }
}

export default modalReducer
