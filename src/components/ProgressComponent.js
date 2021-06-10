import {useDispatch, useSelector} from "react-redux";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import React from "react";
import {hideProgressModal} from "../state/actions/questions_modal";
import ButtonComponent, {ButtonStyle} from "./ButtonComponent";
import {AllQuestionTitles, PersonalManagementQuestions} from "../data/stages";


function ProgressComponent(props) {
    const currentStage = useSelector(state => state.currentStage)
    const allStages = useSelector(state => state.progress.allStages)

    const currentStageQuestions = allStages[currentStage.title].questions
    console.log("currentStageQuestions", currentStageQuestions)
    let answered = 0
    let unanswered = 0
    let correct = 0
    let wrong = 0
    let total = 0
    for (const allQuestionTitle of AllQuestionTitles) {
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

    const dispatch = useDispatch()
    return (
        <View style={styles.rect}>
            <Text>Прогресс</Text>
            <Text>
                answered = {answered}{"\n"}
                unanswered = {unanswered}{"\n"}
                correct = {correct}{"\n"}
                wrong = {wrong}{"\n"}
                total = {total}{"\n"}
            </Text>
            <TouchableOpacity
                onPress={() => dispatch(hideProgressModal())}
                style={ButtonStyle}
            >
                <ButtonComponent text="Закрыть"/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    rect: {
        flex: 1,
        backgroundColor: "#E6E6E6",
        borderWidth: 3,
        borderColor: "rgba(254,164,38,1)",
    },
})

export default ProgressComponent;
