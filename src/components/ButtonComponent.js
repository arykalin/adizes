import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";

function ButtonComponent(props) {
    const text = props.text
    return (
        <View style={styles.playButton}>
            <Text style={styles.playText}>{text}</Text>
        </View>
    )
}

export const ButtonStyle = {
    width: 200,
    height: 60,
    borderRadius: 10,
    alignSelf: "center"
}

const styles = StyleSheet.create({
    playButton: {
        backgroundColor: "rgba(255,110,4,1)",
        borderRadius: 10,
        shadowColor: "rgba(78,78,78,1)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 30,
        shadowOpacity: 1,
        shadowRadius: 10,
        flex: 1
    },
    playText: {
        fontFamily: "montserrat-700",
        color: "rgba(255,255,255,1)",
        textAlign: "center",
        fontSize: 30,
        flex: 1,
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 15
    }
})

export default ButtonComponent
