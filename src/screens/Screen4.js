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
        <View style={styles.group3}>
          <View style={styles.moreInfoRow}>
            <Image
              source={require("../assets/images/Group_29.png")}
              resizeMode="contain"
              style={styles.moreInfo}
            ></Image>
            <Image
              source={require("../assets/images/Group_64.png")}
              resizeMode="contain"
              style={styles.showProgress}
            ></Image>
          </View>
          <View style={styles.progressBar}></View>
          <Text style={styles.этапIСтановление}>ЭТАП I. СТАНОВЛЕНИЕ</Text>
        </View>
        <View style={styles.group2}>
          <View style={styles.circleGroup}>
            <View style={styles.circleStack}>
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
          <Image
            source={require("../assets/images/screen_4_back.png")}
            resizeMode="contain"
            style={styles.back}
          ></Image>
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
    height: 857
  },
  group3: {
    width: 340,
    height: 140,
    marginTop: 60,
    alignSelf: "center"
  },
  moreInfo: {
    width: 50,
    height: 50
  },
  showProgress: {
    width: 50,
    height: 50,
    marginLeft: 190,
    marginTop: 10
  },
  moreInfoRow: {
    height: 60,
    flexDirection: "row",
    marginTop: -10,
    marginLeft: 20,
    marginRight: 30
  },
  progressBar: {
    width: 300,
    height: 20,
    backgroundColor: "rgba(208,2,27,1)",
    marginTop: 30,
    marginLeft: 20,
    alignSelf: "center"
  },
  этапIСтановление: {
    fontFamily: "montserrat-800",
    color: "rgba(74,74,74,1)",
    fontSize: 25,
    height: 34,
    width: 374,
    textAlign: "center",
    marginTop: 6,
    marginLeft: -17
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
  circleStack: {
    width: 340,
    flex: 1,
    marginBottom: -30,
    marginTop: -35
  },
  back: {
    width: 360,
    height: 295
  }
});

export default Screen4;
