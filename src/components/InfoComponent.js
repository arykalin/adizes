import {useDispatch, useSelector} from "react-redux";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import React from "react";
import {hideInfoModal} from "../state/actions/questions_modal";


function InfoComponent(props) {
    const currentStage = useSelector(state => state.currentStage)
    const show = useSelector(state => state.progress.allStages[currentStage])
    const dispatch = useDispatch()
    return (
        <View style={styles.rect}>
            <Text>msg={show.name}</Text>
            <Text>correct={show.text}</Text>
            <TouchableOpacity
                onPress={() => dispatch(hideInfoModal())}
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

export default InfoComponent;
