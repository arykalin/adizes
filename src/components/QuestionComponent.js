import Checkbox from 'expo-checkbox';
import {StyleSheet, View, Text, FlatList, TouchableOpacity, Modal} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {useState} from 'react';
import {hideQuestionModal, showAnswerModal} from "../state/actions/questions_modal";
import AnswerComponent from './AnswerComponent';
import ButtonComponent, {ButtonStyle} from "./ButtonComponent";

function QuestionComponent(props) {
    console.log("called QuestionComponent")
    let correct = 0
    let wrong = 0
    let total = 0
    let answerMessage  = ""
    let image = require("../assets/images/comment.png")

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
        const badResultImage = require("../assets/images/bad_answer_result.png")
        const averageResultImage = require("../assets/images/average_answer_result.png")
        const goodResultImage = require("../assets/images/good_answer_result.png")
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
        total = correct + wrong
        let ball = correct - wrong
        if (wrong > correct) {
            ball = 0;
        }
        if (ball / total * 100 < 33) {
            console.log("???????????? ??????????????????");
            answerMessage = "???????????? ??????????????????"
            image = badResultImage
        } else if (ball / total * 100 > 33 && ball / 7 * 100 < 66) {
            console.log("?????????????? ??????????????????");
            answerMessage = "?????????????? ??????????????????"
            image = averageResultImage
        } else if (ball / total * 100 >= 66) {
            console.log("?????????????? ??????????????????");
            answerMessage = "?????????????? ??????????????????"
            image = goodResultImage
        } else {
            console.log("???????????????????? ??????????????????");
            answerMessage = "???????????????????? ??????????????????"
            image = averageResultImage
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
        dispatch(showAnswerModal(answerMessage, correct, wrong, total, image))
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
                <Text style={styles.turnNumberText}>?????? {idx}.</Text>
                <Text style={styles.turnName}>{questions[idx].questionTitle}</Text>
                <FlatList
                    data={questions[idx].answers}
                    renderItem={renderItem}
                    keyExtractor={item => item}
                    // extraData={selectedId}
                >
                </FlatList>
                <TouchableOpacity
                    onPress={() => onPress()}
                    style={ButtonStyle}
                >
                    <ButtonComponent text="????????????????"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const QuestionRow = ({question}) => {
    console.log("called QuestionRow for ", {question: question})
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
    let correct = "wrong"
    if (question.correct === true) {
        correct = "correct"
    }
    return (
        <View>
            <View style={styles.checkboxRow}>
                <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    onValueChange={handleOnChange}
                    color={isChecked ? '#FF4E00' : '#FEA426'}
                />
                <Text style={styles.questionText}>{question.text} {correct}</Text>
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
        flexGrow: 1,
        // width: '90%',
        // height: 40,
        minWidth: 300,
        alignSelf: 'center',
        overflow: "scroll",
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
        fontFamily: "montserrat-700",
        color: "#121212",
        alignSelf: 'center',
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
