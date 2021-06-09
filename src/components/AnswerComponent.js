import {useDispatch, useSelector} from "react-redux";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import React from "react";
import {hideAnswerModal} from "../state/actions/questions_modal";


function AnswerComponent(props) {
    const showProps = useSelector(state => state.modal.showAnswerModalProps)
    const dispatch = useDispatch()
    const onPress = () => {
        dispatch(hideAnswerModal())
    }
    return (
        <View style={styles.rect}>
            <Text>msg={showProps.answerMessage}</Text>
            <Text>correct={showProps.correct}</Text>
            <Text>wrong={showProps.wrong}</Text>
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