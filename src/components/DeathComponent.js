import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function DeathComponent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.death}>
        В случае, если компания не может совершить прорыв и выжимает последнее
        из когда-то успешных проектов, ее ждет крах.. Для владельца это означает
        потерю контроля, компания банкротится, ее активы скупаются.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  death: {
    fontFamily: "montserrat-regular",
    color: "rgba(0,0,0,1)",
    textAlign: "left",
    flex: 1
  }
});

export default DeathComponent;
