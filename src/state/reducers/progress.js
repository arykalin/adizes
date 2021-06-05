import {useSelector} from "react-redux";
import allStages from "../../data/stages";

const initialState = {
    allStages,
};

export const progressReducer = (state = initialState, action) => {
    console.log("questions:", action.questions)
    const initProgress = (action) => {
        for (const question of action.questions) {
            if ( question.questionTitle === "") {
                progress[0].stage.name = question.stageTitle
                progress[0].stage.num = question.stageNum
                continue
            }
            stage.progress.concat()
        }
        return progress
    }
    const calcAnswers = (action) => {
        console.log("state.progress:", {progress: state.progress})
        state.progress['stage1']['call0']['turn0']['answer0'].correct = action.correct
        state.progress['stage1']['call0']['turn0']['answer0'].wrong = action.wrong
        state.progress.set('stage2', { call0: { turn0: { answer0: { correct: action.correct}}}})
        state.progress.set('stage2', { call0: { turn0: { answer0: { correct: action.wrong}}}})
        return state.progress
    }

    switch(action.type) {
        case 'INIT': return {
            progress: initProgress(action),
        };
        case 'CALC_ANSWERS': return {
            progress: calcAnswers(action)
        }
        default: return state;
    }
}

export default progressReducer
