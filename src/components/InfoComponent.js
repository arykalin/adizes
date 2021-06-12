import {useDispatch, useSelector} from "react-redux";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import React from "react";
import {hideInfoModal} from "../state/actions/questions_modal";
import ButtonComponent, {ButtonStyle} from "./ButtonComponent";


function InfoComponent(props) {
    const currentStage = useSelector(state => state.currentStage)
    const allStages = useSelector(state => state.progress.allStages)
    const show = allStages[currentStage.title]
    console.log("show is", {show: show, allStages: allStages, currentStage: currentStage})
    const dispatch = useDispatch()
    return (
        <View style={styles.rect}>
            <Text style={styles.infoText}>{show.name}</Text>
            <View style={{flex: 1, marginVertical: 20}}>
            <Text  style={styles.descriptionText}>{show.text}</Text>
            </View>
            <TouchableOpacity
                onPress={() => dispatch(hideInfoModal())}
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
        maxWidth: 400,
        maxHeight: 600,
        paddingVertical: 20,
        paddingHorizontal: 10,
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
    infoText: {
        fontFamily: "montserrat-800",
        color: "rgba(68,68,68,1)",
        alignSelf: "center"
    },
    descriptionText: {
        fontFamily: "montserrat-500",
        color: "rgba(68,68,68,1)",
        alignSelf: "center"
    },
})

export default InfoComponent;
