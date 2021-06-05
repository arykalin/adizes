const initialState = {
    title: "",
};

export const currentCallReducer = (state = initialState, action) => {
    console.log("action:", action)
    switch(action.type) {
        case 'SET_CURRENT_CALL_TITLE': return {
            title: action.title,
        };
        default: return state;
    }
}

export default currentCallReducer
