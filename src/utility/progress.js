import {useDispatch, useSelector} from "react-redux";
import {AllQuestionTitles, Stage1, Stage2, Stage3, Stage4} from "../data/stages";
import {showInfoModal} from "../state/actions/questions_modal";
import {setCurrentStage} from "../state/actions/stage_set";

export function CalculateProgress(currentStage, allStages) {
    const currentStageCalls = allStages[currentStage.title].questions
    console.log("currentStageCalls", currentStageCalls)
    let progress = {
        allCalls: {
            answered : 0,
            unanswered : 0,
            correct : 0,
            wrong : 0,
            total : 0,
        },
    }

    for (const callTitle of AllQuestionTitles) {
        progress[callTitle] = {
            answered : 0,
            unanswered : 0,
            correct : 0,
            wrong : 0,
            total : 0,
        }
        for (const question of currentStageCalls[callTitle]) {
            console.log("calculating question title:", question.questionTitle)
            if (question.answered === true) {
                progress.allCalls.answered++
                progress[callTitle].answered++
            } else {
                progress.allCalls.unanswered++
                progress[callTitle].unanswered++
            }
            progress.allCalls.correct = progress.allCalls.correct + question.correct
            progress[callTitle].correct = progress[callTitle].correct + question.correct

            progress.allCalls.wrong = progress.allCalls.wrong + question.wrong
            progress[callTitle].wrong = progress[callTitle].wrong + question.wrong

            progress.allCalls.total++
            progress[callTitle].total++

        }
    }
    return progress;
}

export function CheckStage(currentStage, allStages) {
    let progress = CalculateProgress(currentStage, allStages);
    if (progress.allCalls.unanswered === 0) {
        return SetNextStage(currentStage)
    }
    return currentStage
}

export function SetNextStage(currentStage) {
    let nextStage = {
        title: ""
    }
    console.log("SetNextStage currentStage", currentStage)
    if (currentStage.title === Stage1) {
        console.log("SetNextStage next stage2", Stage2)
        nextStage.title = Stage2
    }
    if (currentStage.title === Stage2) {
        nextStage.title = Stage3
    }
    if (currentStage.title === Stage3) {
        nextStage.title = Stage4
    }
    console.log("SetNextStage next stage", nextStage)
    return nextStage
}
