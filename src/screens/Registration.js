import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import MaterialCheckbox from "../components/MaterialCheckbox";

function Registration(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group1}>
        <Image
          source={require("../assets/images/smit_logo1.png")}
          resizeMode="contain"
          style={styles.image1}
        ></Image>
        <Text style={styles.loremIpsum1}>
          Бизнес игра SMART management - лучший способ понять, с какими вызовами
          вы, как руководитель компании, сталкиваетесь на разных этапах ее
          развития и какие стратегические и тактические решения должны быть
          приняты, чтобы компания продолжала успешно расти.{"\n"}В основе игры
          лежит теория жизненного цикла организации.{"\n"}В игре V этапов,
          проходя которые вы приведете свою компанию либо к смерти и
          ликвидациии, либо к новому этапу роста.
        </Text>
        <View style={styles.group2}>
          <View style={styles.registrationForm1}>
            <View style={styles.name1}>
              <View style={styles.rect1}>
                <TextInput
                  placeholder="Lorem Ipsum"
                  style={styles.textInput1}
                ></TextInput>
              </View>
            </View>
            <View style={styles.surname1}>
              <View style={styles.rect2}>
                <TextInput
                  placeholder="Lorem Ipsum"
                  style={styles.textInput2}
                ></TextInput>
              </View>
            </View>
            <View style={styles.email1}>
              <View style={styles.rect3}>
                <TextInput
                  placeholder="Lorem Ipsum"
                  style={styles.textInput3}
                ></TextInput>
              </View>
            </View>
            <View style={styles.checkbox1}>
              <MaterialCheckbox
                checkIconName="checkbox-blank-outline"
                style={styles.materialCheckbox1}
              ></MaterialCheckbox>
            </View>
            <View style={styles.rect4}>
              <MaterialCheckbox
                style={styles.materialCheckbox2}
              ></MaterialCheckbox>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Screen3")}
            style={styles.button1}
          >
            <View style={styles.registerButton1}></View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  group1: {
    height: 925,
    overflow: "scroll",
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  image1: {
    width: 58,
    height: 34,
    marginTop: 30,
    marginLeft: 20
  },
  loremIpsum1: {
    fontFamily: "montserrat-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 10,
    lineHeight: 14,
    textAlign: "justify",
    marginTop: 16,
    marginLeft: 18,
    marginRight: 18
  },
  group2: {
    width: 375,
    height: 340,
    backgroundColor: "rgba(238,238,238,1)",
    marginTop: 220,
    alignSelf: "center"
  },
  registrationForm1: {
    height: 240,
    backgroundColor: "rgba(238,238,238,1)"
  },
  name1: {
    width: 280,
    height: 28,
    marginTop: 15,
    marginLeft: 48
  },
  rect1: {
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(74,74,74,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    borderRadius: 5,
    flex: 1
  },
  textInput1: {
    fontFamily: "montserrat-600",
    color: "#121212",
    flex: 1
  },
  surname1: {
    width: 280,
    height: 28,
    marginTop: 27,
    marginLeft: 48
  },
  rect2: {
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(74,74,74,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    borderRadius: 5,
    flex: 1
  },
  textInput2: {
    fontFamily: "montserrat-600",
    color: "#121212",
    flex: 1
  },
  email1: {
    width: 280,
    height: 28,
    marginTop: 27,
    marginLeft: 48
  },
  rect3: {
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(74,74,74,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    borderRadius: 5,
    flex: 1
  },
  textInput3: {
    fontFamily: "montserrat-600",
    color: "#121212",
    flex: 1
  },
  checkbox1: {
    width: 26,
    height: 26,
    marginTop: 19,
    marginLeft: 48
  },
  materialCheckbox1: {
    borderRadius: 20,
    flex: 1
  },
  rect4: {
    width: 26,
    height: 26,
    marginTop: 12,
    marginLeft: 48
  },
  materialCheckbox2: {
    flex: 1
  },
  button1: {
    width: 220,
    height: 40,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: "center"
  },
  registerButton1: {
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
  }
});

export default Registration;
