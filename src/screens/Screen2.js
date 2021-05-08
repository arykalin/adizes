import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

function Screen2(props) {
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <Image
          source={require("../assets/images/smit_logo1.png")}
          resizeMode="contain"
          style={styles.logoImage}
        ></Image>
        <Text style={styles.loremIpsum}>
          {"\t"}Бизнес игра SMART management - лучший способ понять, с какими вызовами
          вы, как руководитель компании, сталкиваетесь на разных этапах ее
          развития и какие стратегические и тактические решения должны быть
          приняты, чтобы компания продолжала успешно расти.{"\n"}{"\n"}{"\t"}В основе игры
          лежит теория жизненного цикла организации.{"\n"}{"\n"}{"\t"}В игре V этапов,
          проходя которые вы приведете свою компанию либо к смерти и
          ликвидациии, либо к новому этапу роста.
        </Text>
        <Image
          source={require("../assets/images/screen2_sucess.png")}
          resizeMode="contain"
          style={styles.sucessImage}
        ></Image>
        <View style={styles.nextButtonView}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Screen3")}
            style={styles.button}
          >
            <View style={styles.nextButton}>
              <Text style={styles.NextText}>Далее</Text>
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
    backgroundColor: "rgba(229,229,229,1)",
    overflow: "scroll",
    alignItems: 'flex-start',
    borderWidth: 3,
    borderColor: "#000000",
  },
  mainView: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)",
    alignSelf: 'center',
    borderWidth: 3,
    borderColor: "#000000",
  },
  logoImage: {
    flex: 1,
    width: 50,
    height: 50,
    positionLeft: '5%',
    borderWidth: 3,
    borderColor: "#000000",
  },
  loremIpsum: {
    fontFamily: "montserrat-regular",
    color: "rgba(68,68,68,1)",
    fontSize: 12,
    lineHeight: 14,
    textAlign: "justify",
    marginTop: 16,
    marginLeft: 18,
    marginRight: 18,
    borderWidth: 3,
    borderColor: "#000000",
  },
  sucessImage: {
    height: 200,
    borderWidth: 3,
    borderColor: "#000000",
  },
  nextButtonView: {
    // width: 375,
    // height: 160,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 65,
    alignSelf: "center",
    borderWidth: 3,
    borderColor: "#000000",
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
    marginTop: 60,
    alignSelf: "center"
  },
  nextButton: {
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
  NextText: {
    fontFamily: "montserrat-600",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    fontSize: 30,
    flex: 1
  }
});

export default Screen2;
