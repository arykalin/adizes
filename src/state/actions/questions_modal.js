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

export const showAnswerModal =(answerMessage, correct, wrong, total, image)=>({
    type: 'SHOW_ANSWER_MODAL',
    answerMessage: answerMessage,
    correct: correct,
    wrong: wrong,
    total: total,
    image: image,
})

export const hideAnswerModal =()=>({
    type: 'HIDE_ANSWER_MODAL'
})

export const hideInfoModal =()=>({
    type: 'HIDE_INFO_MODAL'
})

export const showInfoModal =()=>({
    type: 'SHOW_INFO_MODAL'
})

export const hideProgressModal =()=>({
    type: 'HIDE_PROGRESS_MODAL'
})

export const showProgressModal =()=>({
    type: 'SHOW_PROGRESS_MODAL'
})
