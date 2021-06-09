const initialState = {
    showCallModal: false,
    showQuestionModal: false,
    showAnswerModal: false,
    showAnswerModalProps: {},
    showInfoModal: false,
};
export const modalReducer = (state = initialState, action) => {
    console.log("action:", action)
    switch (action.type) {
        case 'SHOW_CALL_MODAL':
            return {...state, showCallModal: true};
        case 'HIDE_CALL_MODAL':
            return {...state, showCallModal: false}
        case 'SHOW_QUESTION_MODAL':
            return {...state, showQuestionModal: true};
        case 'HIDE_QUESTION_MODAL':
            return {...state, showQuestionModal: false}
        case 'SHOW_ANSWER_MODAL':
            return {
                ...state, showAnswerModal: true,
                showAnswerModalProps: {
                    correct: action.correct,
                    wrong: action.wrong,
                    answerMessage: action.answerMessage,
                }
            };
        case 'HIDE_ANSWER_MODAL':
            return {
                ...state, showAnswerModal: false,
                showAnswerModalProps: {
                    correct: 0,
                    wrong: 0,
                    answerMessage: "",
                }
            };
        case 'SHOW_INFO_MODAL':
            return {...state, showInfoModal: true}
        case 'HIDE_INFO_MODAL':
            return {...state, showInfoModal: false}
        default:
            return state;
    }
}

export default modalReducer
