import {useDispatch, useSelector} from "react-redux";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import React from "react";
import {hideProgressModal} from "../state/actions/questions_modal";
import ButtonComponent, {ButtonStyle} from "./ButtonComponent";


function ProgressComponent(props) {
    const currentStage = useSelector(state => state.currentStage)
    const allStages = useSelector(state => state.progress.allStages)

    const dispatch = useDispatch()
    return (
        <View style={styles.rect}>
            <Text>Прогресс</Text>
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
