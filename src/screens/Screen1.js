import React, {Component, useState} from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, Modal, Button } from "react-native";

import {Provider} from 'react-redux';
import store from '../state/store'

function Screen1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <Image
          source={require("../assets/images/smit_logo.png")}
          resizeMode="contain"
          style={styles.logoImage}
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
    overflow: "scroll",
    alignItems: 'flex-start',
    backgroundColor: "rgba(255,255,255,1)",
  },
  mainView: {
    flex: 1,
    maxWidth: 400,
    minHeight: 640,
    maxHeight: 720,
    alignSelf: "center",
  },
  logoImage: {
    width: 100,
    height: 100,
    marginLeft: '3%',
    marginTop: '3%',
    // borderWidth: 3,
    // borderColor: "#000000",
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
