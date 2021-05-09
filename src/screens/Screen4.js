import React, {Component, useState} from "react";
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Text,
    ImageBackground, Modal,
    TouchableHighlight,
} from "react-native";

function Screen4(props) {
    const [showQuestion, setShowQuestion] = useState(false);

    var [ isPress, setIsPress ] = React.useState(false);
    var touchProps = {
        activeOpacity: 1,
        underlayColor: 'blue',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
        style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
        onHideUnderlay: () => setIsPress(false),
        onShowUnderlay: () => setIsPress(true),
        onPress: () => console.log('HELLO'),                 // <-- "onPress" is apparently required
    };

    return (
        <View style={styles.container}>
            <View style={styles.mainGroup}>
                <View style={styles.infoScreen}>
                    <View style={styles.infoScreenIcons}>
                        <View style={styles.moreInfoButtonRow}>
                            <TouchableOpacity
                                style={styles.moreInfoButton}>
                                <ImageBackground
                                    source={require("../assets/images/Group_29.png")}
                                    resizeMode="contain"
                                    style={styles.moreInfoImage}
                                >
                                    <View style={styles.darkening} />
                                </ImageBackground>
                                <Text style={styles.moreInfoText}>Подробно</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => props.navigation.navigate("Screen1")}
                                style={styles.showProgressButton}
                            >
                                <Image
                                    source={require("../assets/images/Group_64.png")}
                                    resizeMode="contain"
                                    style={styles.showProgressImage}
                                ></Image>
                                <Text style={styles.progressText}>Прогресс</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.stage_bar}>
                            <View style={styles.progressBarStack}>
                                <View style={styles.progressBar}></View>
                                <View style={styles.group5}>
                                    <Image
                                        source={require("../assets/images/circle_colored_icon.png")}
                                        resizeMode="contain"
                                        style={styles.stage1}
                                    ></Image>
                                    <Image
                                        source={require("../assets/images/circli_grey_icon.png")}
                                        resizeMode="contain"
                                        style={styles.stage2}
                                    ></Image>
                                    <Image
                                        source={require("../assets/images/circli_grey_icon.png")}
                                        resizeMode="contain"
                                        style={styles.stage3}
                                    ></Image>
                                    <Image
                                        source={require("../assets/images/circli_grey_icon.png")}
                                        resizeMode="contain"
                                        style={styles.stage4}
                                    ></Image>
                                    <Image
                                        source={require("../assets/images/circli_grey_icon.png")}
                                        resizeMode="contain"
                                        style={styles.stage5}
                                    ></Image>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.stageName}>
                        <Text style={styles.stageNameText}>ЭТАП I. СТАНОВЛЕНИЕ</Text>
                    </View>
                </View>
                <View style={styles.gameScreen}>
                    <View style={styles.circleGroupStack}>
                        <View style={styles.circleGroup}>
                            <View style={styles.stageTextStack}>
                                <View style={styles.stageText}>
                                    <Text style={styles.centeredText}>Стратегия развития</Text>
                                </View>
                                <ImageBackground
                                    source={require("../assets/images/main_circle.png")}
                                    resizeMode="contain"
                                    style={styles.circle}
                                    imageStyle={styles.circle_imageStyle}
                                >
                                    <View style={styles.businessPrcocButtonRow}>
                                        <TouchableHighlight
                                            activeOpacity={0.6}
                                            underlayColor="#DDDDDD"
                                            onPress={() => alert('Pressed!')}>
                                        <TouchableOpacity
                                            onPress={() => setShowQuestion(true)}
                                            style={styles.businessPrcocButton}>
                                            <Image
                                                source={require("../assets/images/buisiness_proc.png")}
                                                resizeMode="contain"
                                                style={styles.businecProcImage}
                                            ></Image>
                                        </TouchableOpacity>
                                        </TouchableHighlight>
                                        <TouchableOpacity
                                            onPress={() => setShowQuestion(true)}
                                            style={styles.corpMngmtButton}>
                                            <Image
                                                source={require("../assets/images/corp_leadership.png")}
                                                resizeMode="contain"
                                                style={styles.corpMngmtImage}
                                            ></Image>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.strategyButtonRow}>
                                        <TouchableOpacity
                                            onPress={() => setShowQuestion(true)}
                                            style={styles.strategyButton}>
                                            <Image
                                                source={require("../assets/images/scheme.png")}
                                                resizeMode="contain"
                                                style={styles.strategyImage}
                                            ></Image>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => setShowQuestion(true)}
                                            style={styles.financesButton}>
                                            <Image
                                                source={require("../assets/images/finances.png")}
                                                resizeMode="contain"
                                                style={styles.financesImage}
                                            ></Image>
                                        </TouchableOpacity>
                                    </View>
                                </ImageBackground>
                                <TouchableOpacity
                                    onPress={() => setShowQuestion(true)}
                                    style={styles.devStrategyButton}>
                                    <Image
                                        source={require("../assets/images/developement.png")}
                                        resizeMode="contain"
                                        style={styles.devStrategyImage}
                                    ></Image>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => setShowQuestion(true)}
                                    style={styles.orgStructureButton}>
                                    <Image
                                        source={require("../assets/images/Group.png")}
                                        resizeMode="contain"
                                        style={styles.orgStructureImage}
                                    ></Image>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => setShowQuestion(true)}
                                    style={styles.managementButton}>
                                    <Image
                                        source={require("../assets/images/leadership.png")}
                                        resizeMode="contain"
                                        style={styles.managementImage}
                                    ></Image>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                    <View style={styles.bottomImages}>
                        <Image
                            source={require("../assets/images/screen_4_back.png")}
                            resizeMode="contain"
                            style={styles.back_left}
                        ></Image>
                        <Image
                            source={require("../assets/images/pic_right.png")}
                            resizeMode="contain"
                            style={styles.back_right}
                        ></Image>
                    </View>
                </View>
            </View>
            <Modal onRequestClose={() => setShowQuestion(false)} transparent visible={showQuestion}>
                <View style={styles.questionsGroup}>
                    <TouchableOpacity
                        onPress={() => setShowQuestion(false)}
                        style={styles.backButton}>
                        <Image
                            source={require("../assets/images/Group_25.png")}
                            resizeMode="contain"
                            style={styles.backButtonImage}
                        ></Image>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.questionRectangle}
                    >
                        <Text style={styles.questionText}>
                            Подбор команды
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.questionRectangle}
                    ></TouchableOpacity>
                    <TouchableOpacity
                        style={styles.questionRectangle}
                    ></TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    darkening: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    container: {
        // flex: 1,
        overflow: "scroll",
        // minHeight: 800,
        // alignItems: 'flex-start',
        // borderWidth: 5,
        // borderColor: "green",
    },
    mainGroup: {
        flex: 1,
        alignSelf: 'center',
        // width: 500,
        // minHeight: 800,
        // borderWidth: 4,
        // borderColor: "blue",
    },
    infoScreen: {
        width: 340,
        height: 160,
        marginTop: 40,
        alignSelf: "center"
    },
    infoScreenIcons: {
        width: 310,
        height: 110,
        marginTop: -10,
        alignSelf: "center"
    },
    moreInfoButton: {
        width: 50,
        height: 50,
        justifyContent: "space-between"
    },
    moreInfoImage: {
        width: 50,
        height: 50
    },
    moreInfoText: {
        fontFamily: "montserrat-700",
        color: "rgba(68,68,68,1)",
        alignSelf: "center"
    },
    questionText: {
        fontFamily: "montserrat-700",
        color: "white",
        alignSelf: "center",
        textAlign: "center",
        fontSize: 20,
        marginTop: 20,
        flex: 1,
        justifyContent: "center"
    },
    showProgressButton: {
        width: 50,
        height: 50,
        justifyContent: "space-between",
        marginLeft: 210
    },
    showProgressImage: {
        width: 50,
        height: 50
    },
    progressText: {
        fontFamily: "montserrat-700",
        color: "rgba(68,68,68,1)",
        flex: 1,
        alignSelf: "center"
    },
    moreInfoButtonRow: {
        height: 50,
        flexDirection: "row",
        marginTop: 10
    },
    stage_bar: {
        width: 310,
        height: 10,
        marginTop: 27,
        alignSelf: "center"
    },
    progressBar: {
        top: 12,
        height: 10,
        position: "absolute",
        backgroundColor: "rgba(101,101,101,1)",
        left: 0,
        borderRadius: 5,
        width: 310
    },
    group5: {
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
    progressBarStack: {
        width: 310,
        height: 35,
        marginTop: -12
    },
    stageName: {
        alignSelf: "center",
        height: 16,
        marginTop: 16,
    },
    stageNameText: {
        fontFamily: "montserrat-800",
        color: "rgba(68,68,68,1)",
        fontSize: 20,
        textAlign: "center",
        lineHeight: 0,
        height: 16
    },
    gameScreen: {
        width: 689,
        height: 527,
        marginTop: 5,
        alignSelf: "center"
    },
    circleGroup: {
        top: 50,
        width: 340,
        height: 295,
        position: "absolute",
        left: 0
    },
    stageText: {
        top: 158,
        left: 114,
        width: 112,
        height: 50,
        position: "absolute"
    },
    centeredText: {
        fontFamily: "montserrat-700",
        color: "rgba(68,68,68,1)",
        textAlign: "center",
        fontSize: 20,
        flex: 1
    },
    circle: {
        top: 35,
        width: 340,
        position: "absolute",
        left: 0,
        bottom: 30
    },
    circle_imageStyle: {},
    businessPrcocButton: {
        width: 70,
        height: 70
    },
    businecProcImage: {
        width: 70,
        height: 70
    },
    corpMngmtButton: {
        width: 70,
        height: 70,
        marginLeft: 160
    },
    corpMngmtImage: {
        width: 70,
        height: 70
    },
    businessPrcocButtonRow: {
        height: 70,
        flexDirection: "row",
        marginTop: 35,
        marginLeft: 20,
        marginRight: 20
    },
    strategyButton: {
        width: 70,
        height: 70
    },
    strategyImage: {
        width: 70,
        height: 70
    },
    financesButton: {
        width: 70,
        height: 70,
        marginLeft: 200,
        marginTop: 7
    },
    financesImage: {
        width: 70,
        height: 70
    },
    strategyButtonRow: {
        height: 77,
        flexDirection: "row",
        marginTop: 43
    },
    devStrategyButton: {
        top: 290,
        left: 70,
        width: 70,
        height: 70,
        position: "absolute"
    },
    devStrategyImage: {
        width: 70,
        height: 70
    },
    orgStructureButton: {
        top: 0,
        left: 135,
        width: 70,
        height: 70,
        position: "absolute"
    },
    orgStructureImage: {
        width: 70,
        height: 70
    },
    managementButton: {
        top: 290,
        left: 210,
        width: 70,
        height: 70,
        position: "absolute"
    },
    managementImage: {
        width: 70,
        height: 70
    },
    stageTextStack: {
        width: 340,
        flex: 1,
        marginBottom: -30,
        marginTop: -35
    },
    questionsGroup: {
        flex: 1,
        width: '90%',
        minHeight: 300,
        maxWidth: 400,
        alignSelf: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
        marginTop: '35%',
        marginBottom: '10%',
        positionHorizontal: '5%',
        flexGrow: 0,
        flexShrink: 0,
        borderWidth: 3,
        borderColor: "rgba(254,164,38,1)",
        backgroundColor: "rgba(255,255,255,1)",
    },
    backButton: {
        // borderWidth: 3,
        // borderColor: "red",
        // flex: 1,
        width: 50,
        height: 50,
        alignSelf: 'center',
        marginTop: -40,
    },
    questionRectangle: {
        flex: 1,
        width: '90%',
        height: 40,
        alignSelf: 'center',
        marginTop: 10,
        // borderWidth: 3,
        // borderColor: "red",
        borderRadius: 10,
        backgroundColor: "rgba(101,101,101,1)",
    },
    backButtonImage: {
        width: 50,
        height: 50
    },
    circleGroupStack: {
        width: 340,
        height: 345,
        marginTop: -5,
        marginLeft: 174
    },
    bottomImages: {
        width: 360,
        height: 160,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15,
        alignSelf: "center"
    },
    back_left: {
        width: 180,
        height: 175,
        flex: 1
    },
    back_right: {
        width: 180,
        height: 175,
        flex: 1
    }
});

export default Screen4;
