import {useDispatch, useSelector} from "react-redux";
import {hideAnswerModal} from "../state/actions/questions_modal";
import {CheckStage} from "../utility/progress";
import {setCurrentStage} from "../state/actions/stage_set";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import ButtonComponent, {ButtonStyle} from "./ButtonComponent";
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
                style={styles.stage1}
            />
            <Image
                source={stage2Icon}
                resizeMode="contain"
                style={styles.stage2}
            />
            <Image
                source={stage3Icon}
                resizeMode="contain"
                style={styles.stage3}
            />
            <Image
                source={stage4Icon}
                resizeMode="contain"
                style={styles.stage4}
            />
            <Image
                source={stage5Icon}
                resizeMode="contain"
                style={styles.stage5}
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
    stage1: {
        width: 35,
        height: 35
    },
    stage2: {
        width: 35,
        height: 35
    },
    stage3: {
        width: 35,
        height: 35
    },
    stage4: {
        width: 35,
        height: 35
    },
    stage5: {
        width: 35,
        height: 35
    },
})
export default StageIconsComponent
