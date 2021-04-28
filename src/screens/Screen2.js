import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

function Screen2(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <Image
          source={require("../assets/images/smit_logo1.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
        <Text style={styles.loremIpsum}>
          Бизнес игра SMART management - лучший способ понять, с какими вызовами
          вы, как руководитель компании, сталкиваетесь на разных этапах ее
          развития и какие стратегические и тактические решения должны быть
          приняты, чтобы компания продолжала успешно расти.{"\n"}В основе игры
          лежит теория жизненного цикла организации.{"\n"}В игре V этапов,
          проходя которые вы приведете свою компанию либо к смерти и
          ликвидациии, либо к новому этапу роста.
        </Text>
        <Image
          source={require("../assets/images/screen2_sucess.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <View style={styles.group2}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Screen3")}
            style={styles.button}
          >
            <View style={styles.register_button}>
              <Text style={styles.Далее}>ИГРАТЬ</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(229,229,229,1)"
  },
  group: {
    height: 925,
    overflow: "scroll",
    backgroundColor: "rgba(229,229,229,1)"
  },
  image2: {
    width: 58,
    height: 34,
    marginTop: 30,
    marginLeft: 20
  },
  loremIpsum: {
    fontFamily: "montserrat-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 10,
    lineHeight: 14,
    textAlign: "justify",
    marginTop: 16,
    marginLeft: 18,
    marginRight: 18
  },
  image: {
    height: 200,
    marginTop: 20
  },
  group2: {
    width: 375,
    height: 340,
    backgroundColor: "rgba(235,232,232,1)",
    marginLeft: -7,
    alignSelf: "center"
  },
  button: {
    width: 220,
    height: 40,
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 15,
    shadowOpacity: 1,
    shadowRadius: 5,
    backgroundColor: "rgba(139,87,42,1)",
    marginTop: 120,
    marginLeft: 78,
    alignSelf: "center"
  },
  register_button: {
    backgroundColor: "#ff5c00",
    borderRadius: 5,
    shadowColor: "rgba(74,74,74,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    flex: 1
  },
  Далее: {
    fontFamily: "montserrat-600",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    fontSize: 30,
    flex: 1
  }
});

export default Screen2;
