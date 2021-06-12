import {useDispatch, useSelector} from "react-redux";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {hideProgressModal} from "../state/actions/questions_modal";
import ButtonComponent, {ButtonStyle} from "./ButtonComponent";
import {CalculateProgress} from "../utility/progress";


function ProgressComponent(props) {
    const currentStage = useSelector(state => state.currentStage)
    const allStages = useSelector(state => state.progress.allStages)
    let {answered, unanswered, correct, wrong, total} = CalculateProgress(currentStage, allStages);

    const dispatch = useDispatch()
    return (
        <View style={styles.rect}>
            <Text style={styles.infoText}>Прогресс</Text>
            <View style={{flex: 1, marginVertical: 20}}>
                <Text style={styles.descriptionText}>
                    answered = {answered}{"\n"}
                    unanswered = {unanswered}{"\n"}
                    correct = {correct}{"\n"}
                    wrong = {wrong}{"\n"}
                    total = {total}{"\n"}
                </Text>
            </View>
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
        backgroundColor: "white",
        maxWidth: 400,
        maxHeight: 600,
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderWidth: 3,
        borderColor: "rgba(254,164,38,1)",
    },
    infoText: {
        fontFamily: "montserrat-800",
        color: "rgba(68,68,68,1)",
        alignSelf: "center"
    },
    descriptionText: {
        fontFamily: "montserrat-500",
        color: "rgba(68,68,68,1)",
        alignSelf: "center"
    },
})

export default ProgressComponent;
