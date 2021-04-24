import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

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
          <View style={styles.registration_form}>
            <View style={styles.name}>
              <View style={styles.textInputStack}>
                <TextInput
                  placeholder="Lorem Ipsum"
                  style={styles.textInput}
                ></TextInput>
                <View style={styles.rect}></View>
              </View>
            </View>
            <View style={styles.surname}>
              <View style={styles.textInput2Stack}>
                <TextInput
                  placeholder="Lorem Ipsum"
                  style={styles.textInput2}
                ></TextInput>
                <View style={styles.rect2}></View>
              </View>
            </View>
            <View style={styles.email}>
              <View style={styles.textInput3Stack}>
                <TextInput
                  placeholder="Lorem Ipsum"
                  style={styles.textInput3}
                ></TextInput>
                <View style={styles.rect3}></View>
              </View>
            </View>
            <View style={styles.checkbox1}>
              <View style={styles.rect4}></View>
            </View>
            <View style={styles.checkbox2}>
              <View style={styles.rect5}></View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Screen3")}
            style={styles.button}
          >
            <View style={styles.register_button}></View>
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
  group: {
    flex: 1,
    marginBottom: -20,
    marginTop: 20
  },
  image2: {
    width: 219,
    height: 28,
    marginTop: 30,
    marginLeft: 20
  },
  loremIpsum: {
    fontFamily: "montserrat-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 10,
    lineHeight: 14,
    textAlign: "justify",
    marginTop: 22,
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
    backgroundColor: "rgba(238,238,238,1)",
    alignSelf: "center"
  },
  registration_form: {
    height: 240,
    backgroundColor: "rgba(238,238,238,1)"
  },
  name: {
    width: 280,
    height: 28,
    marginTop: 15,
    marginLeft: 48
  },
  textInput: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "montserrat-600",
    color: "#121212",
    bottom: 0,
    right: 0
  },
  rect: {
    top: 0,
    position: "absolute",
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
    left: 0,
    right: 0,
    bottom: 0
  },
  textInputStack: {
    flex: 1
  },
  surname: {
    width: 280,
    height: 28,
    marginTop: 27,
    marginLeft: 48
  },
  textInput2: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "montserrat-600",
    color: "#121212",
    bottom: 0,
    right: 0
  },
  rect2: {
    top: 0,
    position: "absolute",
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
    left: 0,
    bottom: 0,
    right: 0
  },
  textInput2Stack: {
    flex: 1
  },
  email: {
    width: 280,
    height: 28,
    marginTop: 27,
    marginLeft: 48
  },
  textInput3: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "montserrat-600",
    color: "#121212",
    bottom: 0,
    right: 0
  },
  rect3: {
    top: 0,
    position: "absolute",
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
    left: 0,
    right: 0,
    bottom: 0
  },
  textInput3Stack: {
    flex: 1
  },
  checkbox1: {
    width: 26,
    height: 26,
    marginTop: 19,
    marginLeft: 48
  },
  rect4: {
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
  checkbox2: {
    width: 26,
    height: 26,
    marginTop: 12,
    marginLeft: 48
  },
  rect5: {
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
  button: {
    width: 220,
    height: 40,
    borderRadius: 5,
    marginTop: 20,
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
  }
});

export default Screen2;
