import React, {Component} from "react";
import {StyleSheet, View, Text, TouchableOpacity, Image, FlatList, Modal} from "react-native";

import {useDispatch, useSelector} from "react-redux";
import {hideCallModal, showQuestionModal} from "../state/actions/questions_modal"
import QuestionComponent from "./QuestionComponent";
import {setCurrentQuestion} from "../state/actions/question_set";


function CallComponent(props) {
    const dispatch = useDispatch()
    return (
        <View style={styles.callGroup}>
            <TouchableOpacity
                onPress={() => dispatch(hideCallModal())}
                style={styles.backButton}>
                <Image
    source={require("../assets/images/Group_25.png")}
    resizeMode="contain"
    style={styles.backButtonImage}
    />
            </TouchableOpacity>
            <Questions/>
        </View>
    );
}

const Questions = () => {
    const stages = useSelector(state => state.progress.allStages)
    const currentStage = useSelector(state => state.currentStage.title)
    const currentCall = useSelector(state => state.currentCall.title)
    const questions = stages[currentStage].questions[currentCall]

    const showQuestion = useSelector(state => state.modal.showQuestionModal)
    console.log("{questions}: ", {questions})

    const renderItem = ({ item }) => {
        console.log("question in render item: ", {item})
        return (
            <QuestionView question={item}/>
        )
    };

    return (
        <View>
        <View>
            <FlatList
                data={questions}
                renderItem={renderItem}
                keyExtractor={item => item.callTitle}
                // extraData={selectedId}
            >
            </FlatList>
        </View>
            <Modal transparent visible={ showQuestion }>
                <QuestionComponent/>
            </Modal>
        </View>
    )
}

const QuestionView = ({question}) => {
    console.log("called QuestionView for ", {question})
    const dispatch = useDispatch()
    const onPress = () => {
        if (question.answered === false) {
            console.log("question title is: ", question.callTitle)
            dispatch(showQuestionModal())
            dispatch(setCurrentQuestion(question.callTitle))
        }
    }
    let questionColor =  "rgba(101,101,101,1)"
    if (question.answered === true) {
        questionColor =  "rgba(80,80,80,1)"
    }
        return (
            <TouchableOpacity
                onPress={() => onPress()}
                style={[styles.questionRectangle, {backgroundColor: questionColor}]}
            >
                <Text style={styles.questionText}>
                    {question.callTitle}
                </Text>
            </TouchableOpacity>
        )
}

const styles = StyleSheet.create({
    container: {
        overflow: "scroll",
        flex: 1,
    },
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
        borderRadius: 5,
    },
    questionText: {
        fontFamily: "montserrat-600",
        color: "white",
        alignSelf: "center",
        textAlign: "center",
        fontSize: 20,
        marginVertical: 10,
        flex: 1,
        justifyContent: "center"
    },
    callGroup: {
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

export default CallComponent;
