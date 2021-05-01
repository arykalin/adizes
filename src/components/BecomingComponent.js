import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function BecomingComponent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.becoming}>
        На стадии Становления определяются направления деятельности компании, ее
        цели и стратегия.{"\n"}Главная задача этапа — определиться с ключевыми
        компетенциями и создать востребованный рынком продукт,{"\n"}Это
        критичный период, поскольку на этой стадии компания либо добьется
        успеха, либо потерпит крах и перестанет существовать.{"\n"}Чаще всего
        причины кроются в неопытности руководства
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  becoming: {
    fontFamily: "montserrat-regular",
    color: "rgba(0,0,0,1)",
    textAlign: "left",
    flex: 1
  }
});

export default BecomingComponent;
