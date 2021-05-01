import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function AgingComponent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.aging}>
        На стадии Старения снижаются конкурентоспособность компании, ее продажи
        падают.{"\n"}Цель - борьба за выживание и стабильность.{"\n"}В
        результате компания может либо начать абсолютно новый процесс обновления
        и снова «возродиться», либо прекратить свою деятельность как
        самостоятельная структура.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  aging: {
    fontFamily: "montserrat-regular",
    color: "rgba(0,0,0,1)",
    textAlign: "left",
    flex: 1
  }
});

export default AgingComponent;
