import {useDispatch, useSelector} from "react-redux";
import {AllCallsTitles, Stage1, Stage2, Stage3, Stage4} from "../data/stages";
import {showInfoModal} from "../state/actions/questions_modal";
import {setCurrentStage} from "../state/actions/stage_set";

export function CalculateProgress(currentStage, allStages) {
    const currentStageQuestions = allStages[currentStage.title].questions
    console.log("currentStageQuestions", currentStageQuestions)
    let answered = 0
    let unanswered = 0
    let correct = 0
    let wrong = 0
    let total = 0
    for (const allQuestionTitle of AllCallsTitles) {
        for (const question of currentStageQuestions[allQuestionTitle]) {

            console.log("calculating question", question)
            if (question.answered === true) {
                answered++
            } else {
                unanswered++
            }
            correct = correct + question.correct
            wrong = wrong + question.wrong
            total++

        }
    }
    return {answered, unanswered, correct, wrong, total};
}

export function CheckStage(currentStage, allStages) {
    let {answered, unanswered, correct, wrong, total} = CalculateProgress(currentStage, allStages);
    if (unanswered === 0) {
        return SetNextStage(currentStage)
    }
    return currentStage
}

export function SetNextStage(currentStage) {
    let nextStage
    console.log("SetNextStage currentStage", currentStage)
    if (currentStage.title === Stage1) {
        console.log("SetNextStage next stage2", Stage2)
        nextStage = Stage2
    }
    if (currentStage.title === Stage2) {
        nextStage = Stage3
    }
    if (currentStage.title === Stage3) {
        nextStage = Stage4
    }
    console.log("SetNextStage next stage", nextStage)
    return nextStage
}
