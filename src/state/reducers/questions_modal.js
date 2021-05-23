const initialState = {
    showModal: false,
};
export const modalReducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case 'SHOW_QUESTION_MODAL':
            return {...state, showModal: true};
        case'HIDE_QUESTION_MODAL':
            return {...state, showModal: false}
        default:
            return state;
    }
}

export default modalReducer
