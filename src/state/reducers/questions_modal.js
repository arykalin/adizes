const initialState = {
    showCallModal: false,
    showQuestionModal: false
};
export const modalReducer = (state = initialState, action) => {
    console.log("action:", action)
    switch (action.type) {
        case 'SHOW_CALL_MODAL':
            return {...state, showCallModal: true};
        case'HIDE_CALL_MODAL':
            return {...state, showCallModal: false}
        case 'SHOW_QUESTION_MODAL':
            return {...state, showQuestionModal: true};
        case'HIDE_QUESTION_MODAL':
            return {...state, showQuestionModal: false}
        default:
            return state;
    }
}

export default modalReducer
