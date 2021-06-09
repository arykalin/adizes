import Checkbox from 'expo-checkbox';
import {StyleSheet, View, Text, FlatList, TouchableOpacity, Modal} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {useState} from 'react';
import {hideQuestionModal, showAnswerModal} from "../state/actions/questions_modal";
import AnswerComponent from './AnswerComponent';

function QuestionComponent(props) {
    console.log("called QuestionComponent")
    let correct = 0
    let wrong = 0
    let answerMessage  = ""

    const currentQuestion = useSelector(state => state.currentQuestion)

    const answers = useSelector(state => state.answers)

    const stages = useSelector(state => state.progress.allStages)
    const currentStage = useSelector(state => state.currentStage.title)
    const currentCall = useSelector(state => state.currentCall.title)
    const questions = stages[currentStage].questions[currentCall]

    const idx = getIndex(currentQuestion.currentQuestionId, questions)
    console.log("question id is: ", currentQuestion.currentQuestionId)
    console.log("question index is: ", idx)

    const dispatch = useDispatch()

    const calcAnswers = () => {
        console.log("calculate answers", {answers: answers})
        for (const answer of answers.answers) {
            if (answer.checked === false) {
                continue
            }
            if (answer.correct === true) {
                correct++
            } else {
                wrong++
            }
        }
        console.log("answers calc:", {correct: correct, wrong: wrong})
        let ball = correct - wrong
        if (wrong > correct) {
            ball = 0;
        }
        if (ball / 7 * 100 < 33) {
            console.log("Плохой результат");
            answerMessage = "Плохой результат"
        } else if (ball / 7 * 100 > 33 && ball / 7 * 100 < 66) {
            console.log("Средний результат");
            answerMessage = "Средний результат"
        } else if (ball / 7 * 100 >= 66) {
            console.log("Хороший результат");
            answerMessage = "Хороший результат"
        }
        dispatch({
            type: 'CALC_ANSWERS',
            correct: correct,
            wrong: wrong,
            currentStage: currentStage,
            currentCall: currentCall,
            currentQuestion: currentQuestion.currentQuestionId,
            ball: ball,
        })
    }
    const onPress = () => {
        dispatch(hideQuestionModal())
        calcAnswers()
        dispatch({type: 'CLEANUP_ANSWERS'})
        dispatch(showAnswerModal(answerMessage, correct, wrong))
    }

    const renderItem = ({item}) => {
        console.log("{question in render item}: ", {item})
        return (
            <QuestionRow question={item}/>
        )
    };


    return (
        <View style={styles.container}>
            <View style={styles.rect}>
                <Text style={styles.turnNumberText}>Ход {idx}.</Text>
                <Text style={styles.turnName}>{questions[idx].questionTitle}</Text>
                <FlatList
                    data={questions[idx].answers}
                    renderItem={renderItem}
                    keyExtractor={item => item.text}
                    // extraData={selectedId}
                >
                </FlatList>
                <TouchableOpacity
                    onPress={() => onPress()}
                    style={styles.popupButtonClose}
                >
                    <View style={styles.rect}>
                        <Text style={styles.close}>ОТВЕТИТЬ</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const QuestionRow = ({question}) => {
    console.log("called QuestionRow for ", {question_text: question.text, correct: question.correct})
    const dispatch = useDispatch()
    const [isChecked, setChecked] = useState(false);
    const handleOnChange = () => {
        setChecked(!isChecked);
        console.log("called handleOnChange for ", {
            question_text: question.text,
            correct: question.correct,
            checked: isChecked
        })
        if (isChecked === false) {
            dispatch({
                type: 'SET_ANSWER',
                id: question.id,
                correct: question.correct,
                answered: true,
                text: question.text,
            })
        } else {
            dispatch({
                type: 'UNSET_ANSWER',
                id: question.id,
                correct: question.correct,
                answered: true,
                text: question.text,
            })
        }

    };

    return (
        <View>
            <View style={styles.checkboxRow}>
                <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    onValueChange={handleOnChange}
                    color={isChecked ? '#FF4E00' : '#FEA426'}
                />
                <Text style={styles.questionText}>{question.text}</Text>
            </View>
        </View>
    )
}

function getIndex(questionTitle, questions) {
    return questions.findIndex(obj => obj.questionTitle === questionTitle);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: '90%',
        // height: 40,
        alignSelf: 'center',
        overflow: "scroll",
        marginTop: 10,
    },
    rect: {
        flex: 1,
        backgroundColor: "#E6E6E6",
        borderWidth: 3,
        borderColor: "rgba(254,164,38,1)",
    },
    turnNumberText: {
        flex: 1,
        fontFamily: "montserrat-700",
        color: '#FF4E00',
        marginTop: 24,
        marginLeft: 25
    },
    turnName: {
        fontFamily: "montserrat-regular",
        color: "#121212",
        marginLeft: 69
    },
    checkbox: {
        flex: 1,
        height: 20,
        width: 20,
        maxWidth: 20,
    },
    questionText: {
        flex: 1,
        fontFamily: "montserrat-regular",
        color: "#121212",
        marginLeft: 14,
        marginTop: 14
    },
    checkboxRow: {
        flex: 1,
        height: 40,
        flexDirection: "row",
        marginTop: 31,
        marginLeft: 19,
    }
});

export default QuestionComponent;
