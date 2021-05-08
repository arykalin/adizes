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
        <Text style={styles.gameDescriptionText}>
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
    // borderWidth: 3,
    // borderColor: "#000000",
  },
  logoImage: {
    width: 50,
    height: 50,
    marginLeft: '3%',
    marginTop: '3%',
    // borderWidth: 3,
    // borderColor: "#000000",
  },
  gameDescriptionText: {
    flex: 1,
    width: '90%',
    height: '34%',
    alignSelf: 'center',
    marginHorizontal: '5%',
    fontFamily: "montserrat-regular",
    color: "rgba(68,68,68,1)",
    fontSize: 12,
    lineHeight: 14,
    textAlign: "justify",
    // borderWidth: 3,
    // borderColor: "#000000",
  },
  sucessImage: {
    flex: 1,
    width: '90%',
    height: '30%',
    alignSelf: 'center',
    // borderWidth: 3,
    // borderColor: "#000000",
  },
  nextButtonView: {
    flex: 1,
    width: 200,
    height: 40,
    alignSelf: 'center',
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,1)",
    // borderWidth: 3,
    // borderColor: "#000000",
  },
  button: {
    // flex: 1,
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
  },
  nextButton: {
    // flex: 1,
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
  },
  NextText: {
    fontFamily: "montserrat-600",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    fontSize: 30,
    // flex: 1
  }
});

export default Screen2;
