import React, {Component} from "react";
import {StyleSheet, View, Text, TouchableOpacity, Image, Modal} from "react-native";

import {useDispatch, useSelector} from "react-redux";
import {hideCallModal} from "../state/actions/questions_modal"
import stage1Questions from "../data/stage1";

function QuestionsComponent(props) {
    const dispatch = useDispatch()
    return (
        <View style={styles.questionsGroup}>
            <TouchableOpacity
                onPress={() => dispatch(hideCallModal())}
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
    const showQuestion = useSelector(state => state.modal.showQuestionModal)
    console.log("{questions}: ", {questions})
    return (
        <View>
            {questions.map((question) => {
                console.log("{question}: ", {question})
                return (
                    <QuestionView question={question}/>
                )
            })}
            <Modal transparent visible={ showQuestion }>
                <Text>Hello World!</Text>
            </Modal>
        </View>
    )
}

const QuestionView = ({question}) => {
    const dispatch = useDispatch()
    const onPress = () => {
        dispatch({type: 'SHOW_QUESTION_MODAL'})
    }
        return (
            <TouchableOpacity
                onPress={() => onPress()}
                style={styles.questionRectangle}
            >
                <Text style={styles.questionText}>
                    {question.questionTitle}
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
        borderRadius: 5,
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
        height: '80%',
        minHeight: 400,
        maxWidth: 360,
        alignSelf: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
        marginTop: '25%',
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
