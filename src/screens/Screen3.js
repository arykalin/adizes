import React, {Component, useState} from "react";
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    Text,
    Modal,
} from "react-native";
import ButtonComponent, {ButtonStyle} from "../components/ButtonComponent";

function Screen3(props) {
    const [showBecoming, setShowBecoming] = useState(false);
    const [showGrowing, setShowGrowing] = useState(false);
    const [showMaturity, setShowMaturity] = useState(false);
    const [showAging, setShowAging] = useState(false);
    const [showResurection, setShowResurection] = useState(false);
    const [showDeath, setShowDeath] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.mainView}>
                <ImageBackground
                    source={require("../assets/images/Group_22.png")}
                    resizeMode="contain"
                    style={styles.background}
                    imageStyle={styles.background_imageStyle}
                >
                    <View style={styles.progressStackStack}>
                        <View style={styles.mainDescription}>
                            <Image
                                source={require("../assets/images/smit_logo.png")}
                                resizeMode="contain"
                                style={styles.logo}
                            ></Image>
                            <Text style={styles.mainDescriptionText}>
                                На каждом этапе жизненного цикла, Вы, как руководитель,
                                столкнетесь с различными вызовами. В зависимости от выбранного
                                вами управленческого решения и ответа на вопрос, вам будут
                                начисляться баллы/проценты . Если вызов окажется для Вас
                                сложным, Вы сможете познакомиться с информацией, которая будет
                                Вам полезна в Вашей бизнес практике. Удачи!{"\n"}
                                {"\n"}Жизненный цикл компании - это совокупность стадий
                                развития, которые организация проходит за период своего
                                существования.{"\n"}Выделяют основные 5 этапов жизненного цикла.
                                Нажми на кружок с номером этапа и узнай о нем подробнее.
                            </Text>
                        </View>
                        <View style={styles.progressStack}>
                            <View style={styles.progress}>
                                <View style={styles.progressLineStack}>
                                    <ImageBackground
                                        source={require("../assets/images/Group_8.png")}
                                        resizeMode="contain"
                                        style={styles.progressLine}
                                        imageStyle={styles.progressLine_imageStyle}
                                    >
                                        <TouchableOpacity
                                            onPress={() => setShowAging(true)}
                                            style={styles.button6}>
                                            <Image
                                                source={require("../assets/images/5.png")}
                                                resizeMode="contain"
                                                style={styles.i5}
                                            ></Image>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => setShowAging(true)}
                                            style={styles.button5}>
                                            <Image
                                                source={require("../assets/images/4.png")}
                                                resizeMode="contain"
                                                style={styles.i4}
                                            ></Image>
                                        </TouchableOpacity>
                                        <View style={styles.button3Row}>
                                            <TouchableOpacity
                                                onPress={() => setShowGrowing(true)}
                                                style={styles.button3}>
                                                <Image
                                                    source={require("../assets/images/2.png")}
                                                    resizeMode="contain"
                                                    style={styles.i2}
                                                ></Image>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                onPress={() => setShowMaturity(true)}
                                                style={styles.button4}>
                                                <Image
                                                    source={require("../assets/images/3.png")}
                                                    resizeMode="contain"
                                                    style={styles.i3}
                                                ></Image>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                onPress={() => setShowDeath(true)}
                                                style={styles.button7}>
                                                <Image
                                                    source={require("../assets/images/6.png")}
                                                    resizeMode="contain"
                                                    style={styles.i6}
                                                ></Image>
                                            </TouchableOpacity>
                                        </View>
                                    </ImageBackground>
                                    <TouchableOpacity
                                        onPress={() => setShowBecoming(true)}
                                        style={styles.button2}
                                    >
                                        <Image
                                            source={require("../assets/images/1.png")}
                                            resizeMode="contain"
                                            style={styles.i1}
                                        ></Image>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={styles.button8}>
                                    <TouchableOpacity
                                        onPress={() => props.navigation.navigate("Screen4")}
                                        style={ButtonStyle}
                                    >
                                        <ButtonComponent text="Далее"/>
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            </View>
                            <Modal onRequestClose={() => setShowBecoming(false)} transparent visible={showBecoming}>
                                <View style={styles.popupDescription}>
                                    <Text style={styles.popupTextHeader}>
                                        Этап I. Становление.
                                    </Text>
                                    <Text style={styles.popupText}>
                                        На стадии Становления определяются направления деятельности
                                        компании, ее цели и стратегия.{"\n"}Главная задача этапа —
                                        определиться с ключевыми компетенциями и создать востребованный
                                        рынком продукт,{"\n"}Это критичный период, поскольку на этой стадии
                                        компания либо добьется успеха, либо потерпит крах и перестанет
                                        существовать.{"\n"}Чаще всего причины кроются в неопытности
                                        руководства
                                    </Text>
                                    <TouchableOpacity
                                        style={styles.popupButtonClose}
                                        onPress={() => setShowBecoming(false)}
                                    >
                                        <View style={styles.rect}>
                                            <Text style={styles.close}>ЗАКРЫТЬ</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </Modal>
                            <Modal onRequestClose={() => setShowGrowing(false)} transparent visible={showGrowing}>
                                <View style={styles.popupDescription}>
                                    <Text style={styles.popupTextHeader}>
                                        Этап II. Рост.
                                    </Text>
                                    <Text style={styles.popupText}>
                                        Стадия роста начинается в тот момент, когда компания расширяется,
                                        выбран свой сегмент, наработана клиентская база.Цель этапа -
                                        обеспечение стабильности и создание репутации компании
                                        на рынке, рост объема продаж и доли рынка.
                                        Стадия роста подходит к концу, когда темпы продаж замедляются.
                                    </Text>
                                    <TouchableOpacity
                                        onPress={() => setShowGrowing(false)}
                                        style={styles.popupButtonClose}
                                    >
                                        <View style={styles.rect}>
                                            <Text style={styles.close}>ЗАКРЫТЬ</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </Modal>
                            <Modal onRequestClose={() => setShowMaturity(false)} transparent visible={showMaturity}>
                                <View style={styles.popupDescription}>
                                    <Text style={styles.popupTextHeader}>
                                        Этап III. Зрелость.
                                    </Text>
                                    <Text style={styles.popupText}>
                                            Компания в период зрелости — один из ключевых игроков в выбранной нише.
                                            Продажи растут, хоть и не так динамично, как в период роста.
                                            Доля рынка либо продолжает понемногу расти, либо колеблется в установившихся
                                            пределах.
                                            Основная цель – обеспечение стабильности, максимизация доходов за
                                            счет улучшения внутренних показателей эффективности и более жесткого
                                            контроля над соблюдением стандартов работы.
                                        </Text>
                                        <TouchableOpacity
                                            onPress={() => setShowMaturity(false)}
                                            style={styles.popupButtonClose}
                                        >
                                            <View style={styles.rect}>
                                                <Text style={styles.close}>ЗАКРЫТЬ</Text>
                                            </View>
                                        </TouchableOpacity>
                                </View>
                            </Modal>
                            <Modal onRequestClose={() => setShowAging(false)} transparent visible={showAging}>
                                <View style={styles.popupDescription}>
                                    <Text style={styles.popupTextHeader}>
                                        Этап IV. Стерение.
                                    </Text>
                                    <Text style={styles.popupText}>
                                            На стадии Старения снижаются конкурентоспособность компании, ее продажи
                                            падают.
                                            Цель - борьба за выживание и стабильность.
                                            В результате компания может либо начать абсолютно новый процесс обновления
                                            и снова «возродиться», либо прекратить свою деятельность как самостоятельная
                                            структура.
                                        </Text>
                                        <TouchableOpacity
                                            onPress={() => setShowAging(false)}
                                            style={styles.popupButtonClose}
                                        >
                                            <View style={styles.rect}>
                                                <Text style={styles.close}>ЗАКРЫТЬ</Text>
                                            </View>
                                        </TouchableOpacity>
                                </View>
                            </Modal>
                            <Modal onRequestClose={() => setShowResurection(false)} transparent
                                   visible={showResurection}>
                                <View style={styles.popupDescription}>
                                    <Text style={styles.popupTextHeader}>
                                        Этап V. Возрождение.
                                    </Text>
                                    <Text style={styles.popupText}>
                                            Стадия Возрождения возникает не во всех компаниях.
                                            Она происходит тогда, когда компания понимает, что теряет свою
                                            конкурентоспособность, и начинает бороться за свое существование.
                                            Стадия Возрождения может быть успешной, а может не принести желаемого
                                            результата.Главная цель в этот период - оживление компании..
                                        </Text>
                                        <TouchableOpacity
                                            onPress={() => setShowResurection(false)}
                                            style={styles.popupButtonClose}
                                        >
                                            <View style={styles.rect}>
                                                <Text style={styles.close}>ЗАКРЫТЬ</Text>
                                            </View>
                                        </TouchableOpacity>
                                </View>
                            </Modal>
                            <Modal onRequestClose={() => setShowDeath(false)} transparent visible={showDeath}>
                                <View style={styles.popupDescription}>
                                    <Text style={styles.popupTextHeader}>
                                        Этап VI. Смерть.
                                    </Text>
                                    <Text style={styles.popupText}>
                                            В случае, если компания не может совершить прорыв и выжимает
                                            последнее из когда-то успешных проектов, ее ждет крах..
                                            Для владельца это означает потерю контроля, компания банкротится,
                                            ее активы скупаются.
                                        </Text>
                                        <TouchableOpacity
                                            onPress={() => setShowDeath(false)}
                                            style={styles.popupButtonClose}
                                        >
                                            <View style={styles.rect}>
                                                <Text style={styles.close}>ЗАКРЫТЬ</Text>
                                            </View>
                                        </TouchableOpacity>
                                </View>
                            </Modal>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(230, 230, 230,1)",
        overflow: "scroll",
        alignItems: 'flex-start',
    },
    mainView: {
        flex: 1,
        backgroundColor: "rgba(232,232,232,1)",
        alignSelf: 'center',
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    background_imageStyle: {
        flex: 1,
    },
    progress: {
        top: 74,
        alignSelf: 'center',
    },
    progressStackStack: {
        flex: 1,
        alignSelf: 'center',
    },
    progressLine: {
        width: 292,
        position: "absolute",
        height: 372,
        top: 0,
        left: 8
    },
    progressLine_imageStyle: {},
    button6: {
        width: 50,
        height: 50,
        marginTop: 22,
        marginLeft: 233
    },
    i5: {
        flex: 1
    },
    button5: {
        width: 50,
        height: 80,
        marginTop: 34,
        marginLeft: 132
    },
    i4: {
        flex: 1
    },
    button3: {
        width: 50,
        height: 50,
        marginTop: 30
    },
    i2: {
        flex: 1
    },
    button4: {
        width: 50,
        height: 50,
        marginLeft: 30,
        marginTop: 20
    },
    i3: {
        flex: 1
    },
    button7: {
        width: 50,
        height: 50,
        marginLeft: 92
    },
    i6: {
        flex: 1
    },
    button3Row: {
        height: 80,
        flexDirection: "row",
        marginTop: 16,
        marginLeft: 12,
        marginRight: 8
    },
    button2: {
        top: 322,
        left: 0,
        width: 50,
        height: 50,
        position: "absolute"
    },
    i1: {
        flex: 1
    },
    progressLineStack: {
        width: 300,
        height: 372,
        marginLeft: -8
    },
    button8: {
        width: 239,
        height: 45,
        marginTop: 16,
        alignSelf: "center"
    },
    button: {
        backgroundColor: "rgba(255,110,4,1)",
        borderRadius: 10,
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 30,
        shadowOpacity: 1,
        shadowRadius: 10,
        flex: 1
    },
    next: {
        fontFamily: "montserrat-600",
        color: "rgba(255,255,255,1)",
        fontSize: 20,
        marginTop: 11,
        marginLeft: 82
    },
    popupDescription: {
        flex: 1,
        width: '90%',
        height: 700,
        alignSelf: 'center',
        marginLeft: 0,
        marginTop: 30,
        marginBottom: 10,
        // borderWidth: 1,
        // borderColor: "red",
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 10,
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 30,
        shadowOpacity: 1,
        shadowRadius: 10,
    },
    popupTextHeader: {
        flex: 1,
        width: '95%',
        height: 20,
        alignSelf: 'center',
        marginTop: 10,
        fontFamily: "montserrat-600",
        color: "#FF4E00",
        textAlign: "center",
        // borderWidth: 1,
        // borderColor: "blue",
    },
    popupText: {
        flex: 1,
        width: '95%',
        // height: 100,
        alignSelf: 'center',
        marginTop: 10,
        justifyContent: 'center',
        fontFamily: "montserrat-regular",
        color: "rgba(64,64,64,1)",
        // height: 320,
        // borderWidth: 1,
        // borderColor: "#000000",
        flexWrap: 'wrap',
    },
    popupButtonClose: {
        flex: 1,
        width: 140,
        height: 40,
        alignSelf: 'center',
        marginTop: '5%',
        // borderWidth: 5,
        // borderColor: "red",
    },
    rect: {
        width: 140,
        height: 40,
        backgroundColor: "rgba(255,78,0,1)",
        borderRadius: 10,
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 30,
        shadowOpacity: 1,
        shadowRadius: 10
    },
    close: {
        fontFamily: "montserrat-600",
        color: "rgba(255,255,255,1)",
        marginTop: 11,
        marginLeft: 34
    },
    popupTextStack: {
        borderWidth: 1,
        borderColor: "#000000",
        // height: 305,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    progressStack: {
        // borderWidth: 1,
        // borderColor: "#000000",
        flex: 1,
        width: 300,
        height: 500,
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 20,
    },
    mainDescription: {
        // borderWidth: 3,
        // borderColor: "#000000",
        flex: 1,
        width: 300,
        justifyContent: 'center',
        alignSelf: 'center',

    },
    logo: {
        flex: 1,
        width: 50,
        // height: 20,
        positionLeft: '5%',
        // positionBottom: '80%',
        // borderWidth: 3,
        // borderColor: "#000000",
    },
    mainDescriptionText: {
        fontFamily: "montserrat-regular",
        color: "rgba(74,74,74,1)",
        fontSize: 11,
        flex: 1
    },
});

export default Screen3;
