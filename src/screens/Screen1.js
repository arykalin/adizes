import React, {Component, useState} from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, Modal, Button } from "react-native";

function Screen1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <Image
          source={require("../assets/images/smit_logo.png")}
          resizeMode="contain"
          style={styles.logo}
        ></Image>
        <Text style={styles.smartOrangeText}>SMART МЕНДЖМЕНТ</Text>
        <View style={styles.businessGameStack}>
            <Text style={[styles.gameDescriptionText, {color: "rgba(255,78,0,1)"}]}>
              БИЗНЕС ИГРА
            </Text>
            <Text style={styles.gameDescriptionText}>
              ПОСМОТРИ НА СВОЙ{"\n"}БИЗНЕС В ПЕРСПЕКТИВЕ{"\n"}
              НЕСКОЛЬКИХ ЛЕТ!
            </Text>
          <Image
            source={require("../assets/images/screen1_back.png")}
            resizeMode="contain"
            style={styles.back}
          ></Image>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Screen2")}
          style={styles.button}
        >
          <View style={styles.rect}>
            <Text style={styles.играть}>ИГРАТЬ</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "scroll"
  },
  group: {
    shadowColor: "rgba(100,100,100,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    height: 900,
    overflow: "scroll"
  },
  logo: {
    width: 107,
    height: 40,
    marginTop: 60,
    alignSelf: "center"
  },
  smartOrangeText: {
    fontFamily: "montserrat-600",
    color: "rgba(255,78,0,1)",
    fontSize: 20,
    textAlign: "center",
    marginTop: 20
  },
  gameDescriptionText: {
    fontFamily: "montserrat-600",
    color: "rgba(66,66,66,1)",
    textAlign: "center"
  },
  back: {
    top: 60,
    height: 340,
    position: "absolute",
    left: 0,
    right: 0
  },
  businessGameStack: {
    height: 400,
    marginTop: 20
  },
  button: {
    width: 200,
    height: 60,
    borderRadius: 10,
    alignSelf: "center"
  },
  rect: {
    backgroundColor: "rgba(255,110,4,1)",
    borderRadius: 10,
    shadowColor: "rgba(78,78,78,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    flex: 1
  },
  играть: {
    fontFamily: "montserrat-700",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    fontSize: 30,
    flex: 1,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 15
  }
});

export default Screen1;
