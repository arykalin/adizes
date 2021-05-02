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

  return (
      <View style={styles.container}>
        <View style={styles.group2}>
          <ImageBackground
              source={require("../assets/images/Group_22.png")}
              resizeMode="contain"
              style={styles.background}
              imageStyle={styles.background_imageStyle}
          >
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
                        <TouchableOpacity style={styles.button3}>
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
                    ></TouchableOpacity>
                  </TouchableOpacity>
                </View>
                <Modal onRequestClose={() => setShowBecoming(false)} transparent visible={showBecoming}>
                <View style={styles.descriptionBecoming}>
                  <View style={styles.group7Stack}>
                    <Text style={styles.becomingText}>
                      На стадии Становления определяются направления деятельности
                      компании, ее цели и стратегия.{"\n"}Главная задача этапа —
                      определиться с ключевыми компетенциями и создать
                      востребованный рынком продукт,{"\n"}Это критичный период,
                      поскольку на этой стадии компания либо добьется успеха, либо
                      потерпит крах и перестанет существовать.{"\n"}Чаще всего
                      причины кроются в неопытности руководства
                    </Text>
                    <View style={styles.group7}>
                      <TouchableOpacity
                          onPress={() => setShowBecoming(false)}
                          style={styles.button9}
                      >
                        <View style={styles.rect}>
                          <Text style={styles.close}>ЗАКРЫТЬ</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                </Modal>
              </View>
              <View style={styles.group5}>
                <Text style={styles.lifecycle}>
                  Жизненный цикл компании - это совокупность стадий развития,
                  которые организация проходит за период своего существования.
                  {"\n"}Выделяют основные 5 этапов жизненного цикла (подробности о
                  каждом этапе вы узнаете далее):
                </Text>
                <Text style={styles.lifecycle2}>
                  Становление{"\n"}Развитие{"\n"}Зрелость{"\n"}Старение{"\n"}
                  Возрождение или Смерть
                </Text>
                <Text style={styles.lifecycle3}>
                  На каждом этапе жизненного цикла, Вы, как руководитель,
                  столкнетесь с различными вызовами. В зависимости от выбранного
                  вами управленческого решения и ответа на вопрос, вам будут
                  начисляться баллы/проценты . Если вызов окажется для Вас
                  сложным, Вы сможете познакомиться с информацией, которая будет
                  Вам полезна в Вашей бизнес практике. Удачи!
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
    backgroundColor: "#e3e3e3",
    height: 852,
    overflow: "scroll"
  },
  background: {
    flex: 1
  },
  background_imageStyle: {},
  group6: {
    top: 120,
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
  descriptionBecoming: {
    top: 0,
    width: 280,
    height: 360,
    position: "absolute",
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    left: 7
  },
  group7: {
    top: 240,
    left: 40,
    width: 180,
    height: 40,
    position: "absolute"
  },
  button9: {
    width: 140,
    height: 40,
    marginLeft: 20
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
  becomingText: {
    top: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 320,
    width: 260,
    left: 0
  },
  group7Stack: {
    width: 260,
    height: 320,
    marginTop: 20,
    marginLeft: 10
  },
  group6Stack: {
    top: 78,
    left: 0,
    width: 292,
    height: 492,
    position: "absolute"
  },
  group5: {
    top: 0,
    width: 191,
    height: 90,
    position: "absolute",
    left: 51
  },
  lifecycle: {
    fontFamily: "montserrat-regular",
    color: "rgba(74,74,74,1)",
    width: 340,
    height: 100,
    fontSize: 11,
    marginTop: -100,
    marginLeft: -72
  },
  lifecycle2: {
    fontFamily: "montserrat-regular",
    color: "#121212",
    fontSize: 12,
    textAlign: "center",
    alignSelf: "center"
  },
  lifecycle3: {
    fontFamily: "montserrat-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 11,
    width: 320,
    height: 150,
    marginTop: 15,
    alignSelf: "center"
  },
  group6StackStack: {
    width: 292,
    height: 570,
    marginTop: 122,
    marginLeft: 41
  }
});

export default Screen3;
