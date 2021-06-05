import Checkbox from 'expo-checkbox';
import {StyleSheet, View, Text, FlatList} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import { useState } from 'react';


function QuestionComponent(props) {
    console.log("called QuestionComponent")
    const dispatch = useDispatch()
    const questions = useSelector(state => state.currentQuestionsList.list)

    const renderItem = ({ item }) => {
        console.log("{question in render item}: ", {item})
        return (
            <QuestionRow question={item}/>
        )
    };
    return (
        <View style={styles.container}>
            <View style={styles.rect}>
                <Text style={styles.turnNumberText}>Ход1.</Text>
                <Text style={styles.turnName}>{questions.questionTitle}</Text>
                <FlatList
                    data={questions[0].answers}
                    renderItem={renderItem}
                    keyExtractor={item => item.text}
                    // extraData={selectedId}
                >
                </FlatList>
            </View>
        </View>
    )
}

const QuestionRow = ({question}) => {
    console.log("called QuestionRow for ", {question})
    const [isChecked, setChecked] = useState(false);
    return (
        <View>
            <View style={styles.checkboxRow}>
                <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? '#FF4E00' : '#FEA426'}
                />
                <Text style={styles.questionText}>{question.text}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: '90%',
        // height: 40,
        alignSelf: 'center',
        marginTop: 10,
    },
    rect: {
        backgroundColor: "#E6E6E6",
        borderWidth: 3,
        borderColor: "rgba(254,164,38,1)",
        flex: 1
    },
    turnNumberText: {
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
        height: 20,
        width: 20
    },
    questionText: {
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
        marginRight: 276
    }
});

export default QuestionComponent;
