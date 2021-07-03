import React from "react";
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Text,
    ImageBackground, Modal,
} from "react-native";
import {useSelector, useDispatch} from "react-redux"
import CallComponent from "../components/CallComponent";

import * as stageConstants from "../data/stages"
import AnswerComponent from "../components/AnswerComponent";
import InfoComponent from "../components/InfoComponent";
import {showInfoModal, showProgressModal} from "../state/actions/questions_modal";
import ProgressComponent from "../components/ProgressComponent";
import allStages from "../data/stages";
import StageIconsComponent from "../components/StageIconsComponent";

function Screen4(props) {
    const showCall = useSelector(state => state.modal.showCallModal)
    const showAnswer = useSelector(state => state.modal.showAnswerModal)
    const showInfo = useSelector(state => state.modal.showInfoModal)
    const showProgress = useSelector(state => state.modal.showProgressModal)
    const dispatch = useDispatch()
    const currentStage = useSelector(state => state.currentStage)

    const onPressPersonalManagementQuestions = () => {
        dispatch({
            type: 'SET_CURRENT_CALL_TITLE',
            title: stageConstants.PersonalManagementQuestions,
            currentCall: "Управление персоналом",
        })
        dispatch({type: 'SHOW_CALL_MODAL'})
    }

    const onPressDevelopmentStrategyQuestions = () => {
        dispatch({
            type: 'SET_CURRENT_CALL_TITLE',
            title: stageConstants.DevelopmentStrategyQuestions,
            currentCall: "Стратегия развития",
        })
        dispatch({type: 'SHOW_CALL_MODAL'})
    }

    const onPressOrganizationalStructureQuestions = () => {
        dispatch({
            type: 'SET_CURRENT_CALL_TITLE',
            title: stageConstants.OrganizationalStructureQuestions,
            currentCall: "Создание оргструктуры",
        })
        dispatch({type: 'SHOW_CALL_MODAL'})
    }

    const onPressBusinessProcessesQuestions = () => {
        dispatch({
            type: 'SET_CURRENT_CALL_TITLE',
            title: stageConstants.BusinessProcessesQuestions,
            currentCall: "Бизнес процессы",
        })
        dispatch({type: 'SHOW_CALL_MODAL'})
    }

    const onPressCorporateCultureQuestions = () => {
        dispatch({
            type: 'SET_CURRENT_CALL_TITLE',
            title: stageConstants.CorporateCultureQuestions,
            currentCall: "Формирование корпоративной культуры",
        })
        dispatch({type: 'SHOW_CALL_MODAL'})
    }

    const onPressFinanceAndPlanningQuestions = () => {
        dispatch({
            type: 'SET_CURRENT_CALL_TITLE',
            title: stageConstants.FinanceAndPlanningQuestions,
            currentCall: "Финансы и планирование",
        })
        dispatch({type: 'SHOW_CALL_MODAL'})
    }

    const onPressCorporateGovernanceQuestions = () => {
        dispatch({
            type: 'SET_CURRENT_CALL_TITLE',
            title: stageConstants.CorporateGovernanceQuestions,
            currentCall: "Корпоративное управление",
        })
        dispatch({type: 'SHOW_CALL_MODAL'})
    }

    const stageText = useSelector(state => state.currentCall.currentCall);
    return (
        <View style={styles.container}>
            <View style={styles.mainGroup}>
                <View style={styles.infoScreen}>
                    <View style={styles.infoScreenIcons}>
                        <View style={styles.moreInfoButtonRow}>
                            <TouchableOpacity
                                onPress={() => dispatch(showInfoModal())}
                                style={styles.moreInfoButton}>
                                <ImageBackground
                                    source={require("../assets/images/Group_29.png")}
                                    resizeMode="contain"
                                    style={styles.moreInfoImage}
                                >
                                    <View/>
                                </ImageBackground>
                                <Text style={styles.moreInfoText}>Подробно</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => dispatch(showProgressModal())}
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
                                <StageIconsComponent currentStage={currentStage}/>
                            </View>
                        </View>
                    </View>
                    <View style={styles.stageName}>
                        <Text style={styles.stageNameText}>{allStages[currentStage.title].name}</Text>
                    </View>
                </View>
                <View style={styles.gameScreen}>
                    <View style={styles.circleGroupStack}>
                        <View style={styles.circleGroup}>
                            <View style={styles.stageTextStack}>
                                <View style={styles.stageText}>
                                    <Text style={styles.centeredText}>{stageText}</Text>
                                </View>
                                <ImageBackground
                                    source={require("../assets/images/main_circle.png")}
                                    resizeMode="contain"
                                    style={styles.circle}
                                    imageStyle={styles.circle_imageStyle}
                                >
                                    <View style={styles.businessProcButtonRow}>
                                        <TouchableOpacity
                                            onPress={onPressBusinessProcessesQuestions}
                                            style={styles.businessProcButton}>
                                            <Image
                                                source={require("../assets/images/buisiness_proc.png")}
                                                resizeMode="contain"
                                                style={styles.procImage}
                                            ></Image>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={onPressCorporateCultureQuestions}
                                            style={styles.corpMngmtButton}>
                                            <Image
                                                source={require("../assets/images/corp_leadership.png")}
                                                resizeMode="contain"
                                                style={styles.procImage}
                                            ></Image>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.strategyButtonRow}>
                                        <TouchableOpacity
                                            onPress={onPressOrganizationalStructureQuestions}
                                            style={styles.strategyButton}>
                                            <Image
                                                source={require("../assets/images/scheme.png")}
                                                resizeMode="contain"
                                                style={styles.procImage}
                                            ></Image>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={onPressFinanceAndPlanningQuestions}
                                            style={styles.financesButton}>
                                            <Image
                                                source={require("../assets/images/finances.png")}
                                                resizeMode="contain"
                                                style={styles.procImage}
                                            ></Image>
                                        </TouchableOpacity>
                                    </View>
                                </ImageBackground>
                                <TouchableOpacity
                                    onPress={onPressDevelopmentStrategyQuestions}
                                    style={styles.devStrategyButton}>
                                    <Image
                                        source={require("../assets/images/developement.png")}
                                        resizeMode="contain"
                                        style={styles.procImageSelected}
                                    ></Image>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={onPressPersonalManagementQuestions}
                                    style={styles.orgStructureButton}>
                                    <Image
                                        source={require("../assets/images/Group.png")}
                                        resizeMode="contain"
                                        style={styles.procImage}
                                    ></Image>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={onPressCorporateGovernanceQuestions}
                                    style={styles.managementButton}>
                                    <Image
                                        source={require("../assets/images/leadership.png")}
                                        resizeMode="contain"
                                        style={styles.procImage}
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
            <Modal
                animationType="slide"
                transparent={false}
                visible={showCall}
            >
                <CallComponent/>
            </Modal>
            <Modal transparent visible={showAnswer}>
                <AnswerComponent/>
            </Modal>
            <Modal transparent visible={showInfo}>
                <InfoComponent/>
            </Modal>
            <Modal transparent visible={showProgress}>
                <ProgressComponent/>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: "scroll",
        alignItems: 'flex-start',
    },
    mainGroup: {
        flex: 1,
        alignSelf: 'center',
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
    stageIcons: {
        width: 276,
        height: 35,
        position: "absolute",
        flexDirection: "row",
        justifyContent: "space-between",
        left: 17,
        top: 0
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
        width: 360,
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
    businessProcButton: {
        width: 70,
        height: 70,
    },
    procImage: {
        width: 70,
        height: 70,
    },
    procImageSelected: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        overflow: "hidden",
        borderWidth: 4,
        borderColor: "rgba(101,101,101,1)",
    },
    corpMngmtButton: {
        width: 70,
        height: 70,
        marginLeft: 160
    },
    businessProcButtonRow: {
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
    financesButton: {
        width: 70,
        height: 70,
        marginLeft: 200,
        marginTop: 7
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
    orgStructureButton: {
        top: 0,
        left: 135,
        width: 70,
        height: 70,
        position: "absolute"
    },
    managementButton: {
        top: 290,
        left: 210,
        width: 70,
        height: 70,
        position: "absolute"
    },
    stageTextStack: {
        width: 340,
        flex: 1,
        marginBottom: -30,
        marginTop: -35
    },
    circleGroupStack: {
        width: 340,
        height: 345,
        marginTop: -5,
        alignSelf: "center"
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
