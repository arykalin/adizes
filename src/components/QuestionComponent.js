import Checkbox from 'expo-checkbox';
import {StyleSheet, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import { useState } from 'react';


function QuestionComponent(props) {
    const [isChecked, setChecked] = useState(false);
    const dispatch = useDispatch()
    const questions = useSelector(state => state.currentQuestionsList.list)
    return (
        <View style={styles.container}>
            <View style={styles.rect}>
                <Text style={styles.turnNumberText}>Ход1.</Text>
                <Text style={styles.turnName}>Совет директоров</Text>
                <View style={styles.checkboxRow}>
                    <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                    />
                    <Text style={styles.questionText}>Нам нужен рыбьа рыба</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 349,
        height: 463
    },
    rect: {
        backgroundColor: "#E6E6E6",
        borderWidth: 1,
        borderColor: "#000000",
        flex: 1
    },
    turnNumberText: {
        fontFamily: "montserrat-700",
        color: "#121212",
        marginTop: 24,
        marginLeft: 25
    },
    turnName: {
        fontFamily: "montserrat-regular",
        color: "#121212",
        marginLeft: 69
    },
    checkbox: {
        height: 40,
        width: 40
    },
    questionText: {
        fontFamily: "montserrat-regular",
        color: "#121212",
        marginLeft: 14,
        marginTop: 14
    },
    checkboxRow: {
        height: 40,
        flexDirection: "row",
        marginTop: 31,
        marginLeft: 19,
        marginRight: 276
    }
});

export default QuestionComponent;
