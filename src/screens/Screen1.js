import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { Center } from "@builderx/utils";

function Screen1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <Image
          source={require("../assets/images/smit_logo.png")}
          resizeMode="contain"
          style={styles.logo}
        ></Image>
        <Text style={styles.smartМенджмент}>SMART МЕНДЖМЕНТ</Text>
        <View style={styles.бизнесИграПосмотриStack}>
          <Center horizontal>
            <Text style={styles.бизнесИграПосмотри}>
              БИЗНЕС ИГРА{"\n"}ПОСМОТРИ НА СВОЙ{"\n"}БИЗНЕС В ПЕРСПЕКТИВЕ{"\n"}
              НЕСКОЛЬКИХ ЛЕТ!
            </Text>
          </Center>
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
    flex: 1
  },
  group: {
    flex: 1,
    backgroundColor: "#e3e3e3",
    height: 852,
    overflow: "scroll"
  },
  logo: {
    width: 107,
    height: 40,
    marginTop: 60,
    alignSelf: "center"
  },
  smartМенджмент: {
    fontFamily: "montserrat-600",
    color: "rgba(255,73,5,1)",
    fontSize: 20,
    textAlign: "center",
    marginTop: 20
  },
  бизнесИграПосмотри: {
    top: 0,
    position: "absolute",
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
  бизнесИграПосмотриStack: {
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
