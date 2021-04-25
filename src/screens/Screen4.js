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
          <View style={styles.comment_boxRow}>
            <Image
              source={require("../assets/images/comment.png")}
              resizeMode="contain"
              style={styles.comment_box}
            ></Image>
            <Image
              source={require("../assets/images/statis.png")}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
          </View>
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
          <ImageBackground
            source={require("../assets/images/screen_4_back.png")}
            resizeMode="contain"
            style={styles.back}
            imageStyle={styles.back_imageStyle}
          >
            <TouchableOpacity
              onPress={() => props.navigation.navigate("DeathScreen")}
              style={styles.button9}
            >
              <View style={styles.rect}></View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("ResurectionScreen")}
              style={styles.button8}
            >
              <View style={styles.rect2}></View>
            </TouchableOpacity>
          </ImageBackground>
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
    height: 925,
    overflow: "scroll",
    flex: 1,
  },
  group3: {
    width: 340,
    height: 140,
    marginTop: 60,
    alignSelf: "center"
  },
  comment_box: {
    width: 260,
    height: 100
  },
  image2: {
    width: 80,
    height: 80,
    marginLeft: 7,
    marginTop: 10
  },
  comment_boxRow: {
    height: 100,
    flexDirection: "row",
    marginLeft: 10,
    marginRight: -17
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
  },
  back_imageStyle: {},
  button9: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 15,
    marginLeft: 20
  },
  rect: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(0,0,0,1)",
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
  button8: {
    width: 40,
    height: 40,
    marginTop: 20,
    marginLeft: 20
  },
  rect2: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(255,89,3,1)",
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10
  }
});

export default Screen4;
