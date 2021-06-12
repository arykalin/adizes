import {useDispatch, useSelector} from "react-redux";
import {StyleSheet, View, Text, TouchableOpacity, Image} from "react-native";
import React from "react";
import {hideAnswerModal} from "../state/actions/questions_modal";
import ButtonComponent, {ButtonStyle} from "./ButtonComponent";
import {CheckStage} from "../utility/progress";
import {setCurrentStage} from "../state/actions/stage_set";


function AnswerComponent(props) {
    const currentStage = useSelector(state => state.currentStage)
    const allStages = useSelector(state => state.progress.allStages)
    const showProps = useSelector(state => state.modal.showAnswerModalProps)
    const dispatch = useDispatch()
    const onPress = () => {
        dispatch(hideAnswerModal())
        let stage = CheckStage(currentStage, allStages)
        console.log("setting stage:", stage.title)
        dispatch(setCurrentStage(stage.title))
    }
    return (
        <View style={styles.rect}>
            <Text style={{
                fontFamily: "montserrat-800",
                color: "rgba(68,68,68,1)",
                alignSelf: "center",
                marginVertical: 20,
            }}>{showProps.answerMessage}</Text>
            <Text>correct={showProps.correct}</Text>
            <Text>wrong={showProps.wrong}</Text>
            <Text>total={showProps.total}</Text>
            <Text>image={showProps.image}</Text>
            <Image
                source={showProps.image}
                resizeMode="contain"
                style={{
                    flex: 1,
                    marginVertical: 10,
                    minWidth: '90%',
                    minHeight: '50%',
                }}
            />
            <TouchableOpacity
                onPress={() => onPress()}
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
        borderWidth: 3,
        borderColor: "rgba(254,164,38,1)",
        alignSelf: "center"
    },
})

export default AnswerComponent;
