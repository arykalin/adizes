export const showCallModal =()=>({
    type: 'SHOW_CALL_MODAL',
})

export const hideCallModal =()=>({
    type: 'HIDE_CALL_MODAL'
})

export const showQuestionModal =()=>({
    type: 'SHOW_QUESTION_MODAL',
})

export const hideQuestionModal =()=>({
    type: 'HIDE_QUESTION_MODAL'
})

export const showAnswerModal =(answerMessage, correct, wrong)=>({
    type: 'SHOW_ANSWER_MODAL',
    answerMessage: answerMessage,
    correct: correct,
    wrong: wrong,
})

export const hideAnswerModal =()=>({
    type: 'HIDE_ANSWER_MODAL'
})
