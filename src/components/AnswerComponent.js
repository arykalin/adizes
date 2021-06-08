import {useDispatch, useSelector} from "react-redux";
import {Modal, StyleSheet, View, Text, TouchableOpacity} from "react-native";
import React from "react";
import {hideQuestionModal} from "../state/actions/questions_modal";


function AnswerComponent(props) {
    const dispatch = useDispatch()
    const onPress = () => {
        dispatch(hideQuestionModal())
    }
    return (
        <View style={styles.rect}>
            <Text>msg={props.message}</Text>
            <Text>correct={props.correct}</Text>
            <Text>wrong={props.wrong}</Text>
            <TouchableOpacity
                onPress={() => onPress()}
                style={styles.popupButtonClose}
            >
                <View style={styles.rect}>
                    <Text style={styles.close}>Закрыть</Text>
                </View>
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
    popupButtonClose: {
        flex: 1,
        width: 140,
        height: 40,
        alignSelf: 'center',
        marginTop: '5%',
    },
})

export default AnswerComponent;
