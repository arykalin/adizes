const initialState = {
    title: "",
    currentCall: "",
};

export const currentCallReducer = (state = initialState, action) => {
    console.log("action:", action)
    switch(action.type) {
        case 'SET_CURRENT_CALL_TITLE': return {
            title: action.title,
            currentCall: action.currentCall,
        };
        default: return state;
    }
}

export default currentCallReducer
