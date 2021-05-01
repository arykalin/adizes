import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity
} from "react-native";

function Screen4(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <View style={styles.stage_layer}>
          <View style={styles.group4}>
            <View style={styles.moreInfoButtonRow}>
              <View style={styles.moreInfoButton}>
                <Image
                  source={require("../assets/images/Group_29.png")}
                  resizeMode="contain"
                  style={styles.moreInfo}
                ></Image>
                <Text style={styles.подробно}>Подробно</Text>
              </View>
              <View style={styles.showProgressButton}>
                <Image
                  source={require("../assets/images/Group_64.png")}
                  resizeMode="contain"
                  style={styles.showProgress}
                ></Image>
                <Text style={styles.прогресс}>Прогресс</Text>
              </View>
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
          <Text style={styles.этапIСтановление}>ЭТАП I. СТАНОВЛЕНИЕ</Text>
        </View>
        <View style={styles.group2}>
          <View style={styles.circleGroup}>
            <View style={styles.стратегияРазвитияStack}>
              <Text style={styles.стратегияРазвития}>Стратегия развития</Text>
              <ImageBackground
                source={require("../assets/images/main_circle.png")}
                resizeMode="contain"
                style={styles.circle}
                imageStyle={styles.circle_imageStyle}
              >
                <View style={styles.button4Row}>
                  <TouchableOpacity style={styles.button4}>
                    <Image
                      source={require("../assets/images/buisiness_proc.png")}
                      resizeMode="contain"
                      style={styles.progress}
                    ></Image>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button2}>
                    <Image
                      source={require("../assets/images/corp_leadership.png")}
                      resizeMode="contain"
                      style={styles.corp}
                    ></Image>
                  </TouchableOpacity>
                </View>
                <View style={styles.buttonRow}>
                  <TouchableOpacity style={styles.button}>
                    <Image
                      source={require("../assets/images/scheme.png")}
                      resizeMode="contain"
                      style={styles.scheme}
                    ></Image>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button3}>
                    <Image
                      source={require("../assets/images/finances.png")}
                      resizeMode="contain"
                      style={styles.finances}
                    ></Image>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
              <TouchableOpacity style={styles.button5}>
                <Image
                  source={require("../assets/images/developement.png")}
                  resizeMode="contain"
                  style={styles.developement}
                ></Image>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button6}>
                <Image
                  source={require("../assets/images/Group.png")}
                  resizeMode="contain"
                  style={styles.corp_leadership}
                ></Image>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button7}>
                <Image
                  source={require("../assets/images/leadership.png")}
                  resizeMode="contain"
                  style={styles.image}
                ></Image>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.group6}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  group: {
    height: 940,
    overflow: "scroll"
  },
  stage_layer: {
    width: 340,
    height: 140,
    marginTop: 60,
    alignSelf: "center"
  },
  group4: {
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
  moreInfo: {
    width: 50,
    height: 50
  },
  подробно: {
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
  showProgress: {
    width: 50,
    height: 50
  },
  прогресс: {
    fontFamily: "montserrat-700",
    color: "rgba(68,68,68,1)",
    flex: 1,
    alignSelf: "center"
  },
  moreInfoButtonRow: {
    height: 50,
    flexDirection: "row"
  },
  stage_bar: {
    width: 310,
    height: 10,
    marginTop: 40
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
  этапIСтановление: {
    fontFamily: "montserrat-800",
    color: "rgba(68,68,68,1)",
    fontSize: 20,
    textAlign: "center",
    lineHeight: 5,
    marginTop: 26,
    marginLeft: 45
  },
  group2: {
    width: 360,
    height: 720,
    marginTop: 5,
    alignSelf: "center"
  },
  circleGroup: {
    width: 340,
    height: 295,
    marginTop: 45,
    marginLeft: 10
  },
  стратегияРазвития: {
    position: "absolute",
    fontFamily: "montserrat-700",
    color: "rgba(68,68,68,1)",
    width: 112,
    height: 50,
    textAlign: "center",
    fontSize: 20,
    left: 114,
    top: 158
  },
  circle: {
    top: 35,
    width: 340,
    position: "absolute",
    left: 0,
    bottom: 30
  },
  circle_imageStyle: {},
  button4: {
    width: 70,
    height: 70
  },
  progress: {
    width: 70,
    height: 70
  },
  button2: {
    width: 70,
    height: 70,
    marginLeft: 160
  },
  corp: {
    width: 70,
    height: 70
  },
  button4Row: {
    height: 70,
    flexDirection: "row",
    marginTop: 35,
    marginLeft: 20,
    marginRight: 20
  },
  button: {
    width: 70,
    height: 70
  },
  scheme: {
    width: 70,
    height: 70
  },
  button3: {
    width: 70,
    height: 70,
    marginLeft: 200,
    marginTop: 7
  },
  finances: {
    width: 70,
    height: 70
  },
  buttonRow: {
    height: 77,
    flexDirection: "row",
    marginTop: 43
  },
  button5: {
    top: 290,
    left: 70,
    width: 70,
    height: 70,
    position: "absolute"
  },
  developement: {
    width: 70,
    height: 70
  },
  button6: {
    top: 0,
    left: 135,
    width: 70,
    height: 70,
    position: "absolute"
  },
  corp_leadership: {
    width: 70,
    height: 70
  },
  button7: {
    top: 290,
    left: 210,
    width: 70,
    height: 70,
    position: "absolute"
  },
  image: {
    width: 70,
    height: 70
  },
  стратегияРазвитияStack: {
    width: 340,
    flex: 1,
    marginBottom: -30,
    marginTop: -35
  },
  group6: {
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
