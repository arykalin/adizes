const emptyAnswers = [
    {
        id: 0,
        correct: false,
        checked: false,
        text: ""
    },
    {
        id: 0,
        correct: false,
        checked: false,
        text: ""
    },
    {
        id: 0,
        correct: false,
        checked: false,
        text: ""
    },
    {
        id: 0,
        correct: false,
        checked: false,
        text: ""
    },
    {
        id: 0,
        correct: false,
        checked: false,
        text: ""
    },
    {
        id: 0,
        correct: false,
        checked: false,
        text: ""
    },
    {
        id: 0,
        correct: false,
        checked: false,
        text: ""
    },
    {
        id: 0,
        correct: false,
        checked: false,
        text: ""
    },
    {
        id: 0,
        correct: false,
        checked: false,
        text: ""
    },
    {
        id: 0,
        correct: false,
        checked: false,
        text: ""
    },
]

const initialState = {
    answers: emptyAnswers,
};

export const currentAnswerReducer = (state = initialState, action) => {
    console.log("action:", action)
    const setAnswer = (action) => {
        console.log("setting up:", {setup_answer: state.answers[action.id], action: action, all_answers: state.answers}  )
        state.answers[action.id].id = action.id
        state.answers[action.id].correct = action.correct
        state.answers[action.id].checked = true
        state.answers[action.id].text = action.text
        return state.answers
    }
    const unsetAnswer = (action) => {
        state.answers[action.id].id = action.id
        state.answers[action.id].correct = action.correct
        state.answers[action.id].checked = false
        state.answers[action.id].text = action.text
        return state.answers
    }
    switch(action.type) {
        case 'SET_ANSWER': return {
            answers: setAnswer(action),
        };
        case 'UNSET_ANSWER': return {
            answers: unsetAnswer(action),
        };
        default: return state;
    }
}

export default currentAnswerReducer
