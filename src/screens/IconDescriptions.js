import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon1Description from "../components/Icon1Description";

function IconDescriptions(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <View style={styles.icon1DescriptionStack}>
          <Text style={styles.icon1Description}>Описание иконки 1</Text>
          <Icon1Description style={styles.icon1Description}></Icon1Description>
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
    width: 120,
    height: 120,
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
    shadowRadius: 10,
    marginTop: 100,
    marginLeft: 80
  },
  icon1Description: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 120,
    width: 120
  },
  icon1DescriptionStack: {
    width: 120,
    height: 120
  }
});

export default IconDescriptions;
