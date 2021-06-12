const initialState = {
    title: "stage1",
};

export const currentStageReducer = (state = initialState, action) => {
    console.log("currentStageReducer action:", action)
    switch(action.type) {
        case 'SET_CURRENT_STAGE_TITLE': return {
            title: action.title,
        };
        default: return state;
    }
}

export default currentStageReducer
