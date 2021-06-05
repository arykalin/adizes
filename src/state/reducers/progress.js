import {useSelector} from "react-redux";
import allStages from "../../data/stages";

const initialState = {
    allStages,
};

export const progressReducer = (state = initialState, action) => {
    console.log("questions:", action.questions)
    const calcAnswers = (action) => {
        console.log("setting answers for:",
            {
                stage: action.currentStage,
                call: action.currentCall,
                question: action.currentQuestion
            })
        const questions = state.allStages[action.currentStage].questions[action.currentCall]
        const idx = getIndex(action.currentQuestion, questions)
        state.allStages[action.currentStage].questions[action.currentCall][idx].correct = action.correct
        state.allStages[action.currentStage].questions[action.currentCall][idx].wrong = action.wrong
        state.allStages[action.currentStage].questions[action.currentCall][idx].answered = true
        return state.allStages
    }

    switch(action.type) {
        case 'CALC_ANSWERS': return {
            allStages: calcAnswers(action)
        }
        default: return state;
    }
}

function getIndex(questionTitle, questions) {
    return questions.findIndex(obj => obj.questionTitle === questionTitle);
}

export default progressReducer
