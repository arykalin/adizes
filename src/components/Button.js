import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

function Button(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/Rectangle_21_(1).png")}
        resizeMode="contain"
        style={styles.image3}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image3: {
    flex: 1
  }
});

export default Button;
