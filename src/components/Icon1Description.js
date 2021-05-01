import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Icon1Description(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.описаниеИконки1}>Описание иконки 1</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(227,223,223,1)",
    borderWidth: 1,
    borderColor: "#000000",
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
  описаниеИконки1: {
    fontFamily: "montserrat-regular",
    color: "#121212",
    height: 120,
    width: 120,
    textAlign: "center"
  }
});

export default Icon1Description;
