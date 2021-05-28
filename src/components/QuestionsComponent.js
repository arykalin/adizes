import React, {Component} from "react";
import {StyleSheet, View, Text, TouchableOpacity, Image, Modal} from "react-native";

import {useDispatch, useSelector} from "react-redux";
import {hideQuestionModal} from "../state/actions/questions_modal"

function QuestionsComponent(props) {
    const dispatch = useDispatch()
    return (
        <View style={styles.questionsGroup}>
            <TouchableOpacity
                onPress={() => dispatch(hideQuestionModal())}
                style={styles.backButton}>
                <Image
                    source={require("../assets/images/Group_25.png")}
                    resizeMode="contain"
                    style={styles.backButtonImage}
                ></Image>
            </TouchableOpacity>
            <Questions/>
        </View>
    );
}

const Questions = () => {
    const questions = useSelector(state => state.currentQuestionsList.list)
    console.log("{questions}: ", {questions})
    return (
        <View>
            {questions.map((question) => {
                console.log("{question}: ", {question})
                return (
                    <QuestionView title={question.questionTitle}/>
                )
            })}
        </View>
    )
}

const QuestionView = ({title}) => {
        return (
            <TouchableOpacity
                style={styles.questionRectangle}
            >
                <Text style={styles.questionText}>
                    {title}
                </Text>
            </TouchableOpacity>
        )
}

const styles = StyleSheet.create({
    container: {},
    backButtonImage: {
        width: 50,
        height: 50
    },
    questionRectangle: {
        flex: 1,
        width: '90%',
        height: 40,
        alignSelf: 'center',
        marginTop: 10,
        // borderWidth: 3,
        // borderColor: "red",
        borderRadius: 10,
        backgroundColor: "rgba(101,101,101,1)",
    },
    questionText: {
        fontFamily: "montserrat-600",
        color: "white",
        alignSelf: "center",
        textAlign: "center",
        fontSize: 20,
        marginTop: 10,
        flex: 1,
        justifyContent: "center"
    },
    questionsGroup: {
        flex: 1,
        width: '90%',
        minHeight: 300,
        maxWidth: 400,
        alignSelf: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
        marginTop: '35%',
        marginBottom: '10%',
        positionHorizontal: '5%',
        flexGrow: 0,
        flexShrink: 0,
        borderWidth: 3,
        borderColor: "rgba(254,164,38,1)",
        backgroundColor: "rgba(255,255,255,1)",
    },
    backButton: {
        width: 50,
        height: 50,
        alignSelf: 'center',
        marginTop: -25,
    },
});

export default QuestionsComponent;
