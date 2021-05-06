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

function Screen3(props) {
  const [showBecoming, setShowBecoming] = useState(false);
  const [showGrowing, setShowGrowing] = useState(false);
  const [showMaturity, setShowMaturity] = useState(false);
  const [showAging, setShowAging] = useState(false);
  const [showResurection, setShowResurection] = useState(false);
  const [showDeath, setShowDeath] = useState(false);

  return (
      <View style={styles.container}>
        <View style={styles.group2}>
          <ImageBackground
              source={require("../assets/images/Group_22.png")}
              resizeMode="contain"
              style={styles.background}
              imageStyle={styles.background_imageStyle}
          >
            <Image
                source={require("../assets/images/smit_logo.png")}
                resizeMode="contain"
                style={styles.logo}
            ></Image>
            <View style={styles.group6StackStack}>
              <View style={styles.group6Stack}>
                <View style={styles.group6}>
                  <View style={styles.progressLineStack}>
                    <ImageBackground
                        source={require("../assets/images/Group_8.png")}
                        resizeMode="contain"
                        style={styles.progressLine}
                        imageStyle={styles.progressLine_imageStyle}
                    >
                      <TouchableOpacity style={styles.button6}>
                        <Image
                            source={require("../assets/images/5.png")}
                            resizeMode="contain"
                            style={styles.i5}
                        ></Image>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.button5}>
                        <Image
                            source={require("../assets/images/41.png")}
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
                        <TouchableOpacity style={styles.button4}>
                          <Image
                              source={require("../assets/images/3.png")}
                              resizeMode="contain"
                              style={styles.i3}
                          ></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button7}>
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
                        style={styles.button}
                    >
                      <Text style={styles.next}>ДАЛЕЕ</Text>
                    </TouchableOpacity>
                  </TouchableOpacity>
                </View>
                <Modal onRequestClose={() => setShowBecoming(false)} transparent visible={showBecoming}>
                <View style={styles.popupDescription}>
                  <View style={styles.becomingTextStack}>
                    <Text style={styles.becomingText}>
                        На стадии Становления определяются направления деятельности
                        компании, ее цели и стратегия.{"\n"}Главная задача этапа —
                        определиться с ключевыми компетенциями и создать востребованный
                        рынком продукт,{"\n"}Это критичный период, поскольку на этой стадии
                        компания либо добьется успеха, либо потерпит крах и перестанет
                        существовать.{"\n"}Чаще всего причины кроются в неопытности
                        руководства
                      </Text>
                      <TouchableOpacity
                          onPress={() => setShowBecoming(false)}
                          style={styles.popupButtonClose}
                      >
                        <View style={styles.rect}>
                          <Text style={styles.close}>ЗАКРЫТЬ</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                </View>
                </Modal>
                <Modal onRequestClose={() => setShowGrowing(false)} transparent visible={showGrowing}>
                  <View style={styles.popupDescription}>
                    <View style={styles.becomingTextStack}>
                      <Text style={styles.becomingText}>
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
                </View>
                </Modal>
              </View>
              <View style={styles.mainDescription}>
                <Text style={styles.lifecycle3}>
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
            </View>
          </ImageBackground>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  group2: {
    flex: 1,
    backgroundColor: "rgba(232,232,232,1)",
    height: 852,
    overflow: "scroll",
    marginLeft: 33
  },
  background: {
    flex: 1
  },
  background_imageStyle: {},
  logo: {
    width: 50,
    height: 50,
    marginTop: 35,
    marginLeft: 23
  },
  group6: {
    top: 74,
    width: 292,
    height: 372,
    position: "absolute",
    left: 0
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
    backgroundColor: "#ff4d00",
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
    width: 280,
    height: 360,
    marginTop: 30,
    marginLeft: 82
  },
  group7: {
    width: 180,
    height: 40,
    marginTop: 260,
    marginLeft: 50
  },
  group6Stack: {
    top: 161,
    left: 0,
    width: 292,
    height: 446,
    position: "absolute"
  },
  becomingText: {
    top: 0,
    position: "absolute",
    fontFamily: "montserrat-regular",
    color: "rgba(64,64,64,1)",
    height: 320,
    width: 260,
    left: 0
  },
  popupButtonClose: {
    top: 265,
    left: 60,
    width: 140,
    height: 40,
    position: "absolute"
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
  becomingTextStack: {
    width: 260,
    height: 320,
    marginTop: 20,
    marginLeft: 10
  },
  mainDescription: {
    top: 0,
    width: 292,
    height: 220,
    position: "absolute",
    left: 0
  },
  lifecycle3: {
    fontFamily: "montserrat-regular",
    color: "#404040",
    fontSize: 11,
    flex: 1
  },
  group6StackStack: {
    width: 292,
    height: 607,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Screen3;
