import React, { Component } from "react";
import { StyleSheet, View, Image, Text, ImageBackground } from "react-native";

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
                <View style={styles.progressRow}>
                  <Image
                    source={require("../assets/images/buisiness_proc.png")}
                    resizeMode="contain"
                    style={styles.progress}
                  ></Image>
                  <Image
                    source={require("../assets/images/corp_leadership.png")}
                    resizeMode="contain"
                    style={styles.corp}
                  ></Image>
                </View>
                <View style={styles.schemeRow}>
                  <Image
                    source={require("../assets/images/scheme.png")}
                    resizeMode="contain"
                    style={styles.scheme}
                  ></Image>
                  <Image
                    source={require("../assets/images/finances.png")}
                    resizeMode="contain"
                    style={styles.finances}
                  ></Image>
                </View>
              </ImageBackground>
              <Image
                source={require("../assets/images/developement.png")}
                resizeMode="contain"
                style={styles.developement}
              ></Image>
              <Image
                source={require("../assets/images/Group.png")}
                resizeMode="contain"
                style={styles.corp_leadership}
              ></Image>
              <Image
                source={require("../assets/images/leadership.png")}
                resizeMode="contain"
                style={styles.image}
              ></Image>
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
    flex: 1,
    height: 852,
    overflow: "scroll"
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
  progress: {
    width: 70,
    height: 70
  },
  corp: {
    width: 70,
    height: 70,
    marginLeft: 160
  },
  progressRow: {
    height: 70,
    flexDirection: "row",
    marginTop: 35,
    marginLeft: 20,
    marginRight: 20
  },
  scheme: {
    width: 70,
    height: 70
  },
  finances: {
    width: 70,
    height: 70,
    marginLeft: 200,
    marginTop: 7
  },
  schemeRow: {
    height: 77,
    flexDirection: "row",
    marginTop: 43
  },
  developement: {
    top: 290,
    left: 70,
    width: 70,
    height: 70,
    position: "absolute"
  },
  corp_leadership: {
    top: 0,
    left: 135,
    width: 70,
    height: 70,
    position: "absolute"
  },
  image: {
    top: 290,
    left: 210,
    width: 70,
    height: 70,
    position: "absolute"
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
