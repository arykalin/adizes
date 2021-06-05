import {useSelector} from "react-redux";

const answer = {
    correct: 0,
    incorrect: 0,
}

const turns = {
    'turn0': {answer}
}

const call = {
    'call0': turns,
}

const stageProgress = {
    'call0': {call}
}

const stage = {
    name: "",
    num: 0,
    progress: stageProgress,
}

const progress = {
    stages: {
        'stage1': {stage},
        'stage2': {stage},
        'stage3': {stage},
        'stage4': {stage},
    },
}


const initialState = {
    progress: progress,
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
    switch(action.type) {
        case 'INIT': return {
            progress: initProgress(action),
        };
        default: return state;
    }
}

export default progressReducer
