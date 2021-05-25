const initialState = {
    showQuestionModal: false,
    // showS1personalManagementQuestions: false,
    // showS1developmentStrategyQuestions: false,
    // showS1organizationalStructureQuestions: false,
    // showS1businessProcessesQuestions: false,
    // showS1corporateCultureQuestions: false,
    // showS1financeAndPlanningQuestions: false,
    // showS1corporateGovernanceQuestions: false,
};
export const callReducer = (state = initialState, action) => {
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

export default callReducer


