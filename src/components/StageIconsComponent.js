import {Image, StyleSheet, View} from "react-native";
import React from "react";
import {Stage1, Stage2, Stage3, Stage4} from "../data/stages";

function StageIconsComponent(props) {

    let stage1Icon = require("../assets/images/circli_grey_icon.png")
    let stage2Icon = require("../assets/images/circli_grey_icon.png")
    let stage3Icon = require("../assets/images/circli_grey_icon.png")
    let stage4Icon = require("../assets/images/circli_grey_icon.png")
    let stage5Icon = require("../assets/images/circli_grey_icon.png")

    if (props.currentStage.title === Stage1) {
        stage1Icon = require("../assets/images/circle_colored_icon.png")
    }
    if (props.currentStage.title === Stage2) {
        stage2Icon = require("../assets/images/circle_colored_icon.png")
    }
    if (props.currentStage.title === Stage3) {
        stage3Icon = require("../assets/images/circle_colored_icon.png")
    }
    if (props.currentStage.title === Stage4) {
        stage4Icon = require("../assets/images/circle_colored_icon.png")
    }

    return (
        <View style={styles.stageIcons}>
            <Image
                source={stage1Icon}
                resizeMode="contain"
                style={styles.stageIcon}
            />
            <Image
                source={stage2Icon}
                resizeMode="contain"
                style={styles.stageIcon}
            />
            <Image
                source={stage3Icon}
                resizeMode="contain"
                style={styles.stageIcon}
            />
            <Image
                source={stage4Icon}
                resizeMode="contain"
                style={styles.stageIcon}
            />
            <Image
                source={stage5Icon}
                resizeMode="contain"
                style={styles.stageIcon}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    stageIcons: {
        width: 276,
        height: 35,
        position: "absolute",
        flexDirection: "row",
        justifyContent: "space-between",
        left: 17,
        top: 0
    },
    stageIcon: {
        width: 35,
        height: 35
    },
})
export default StageIconsComponent
