import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function GrowingComponent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.growing}>
        Стадия роста начинается в тот момент, когда компания расширяется, выбран
        свой сегмент, наработана клиентская база.Цель этапа - обеспечение
        стабильности и создание репутации компании{"\n"}на рынке, рост объема
        продаж и доли рынка.{"\n"}Стадия роста подходит к концу, когда темпы
        продаж замедляются.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  growing: {
    fontFamily: "montserrat-regular",
    color: "rgba(0,0,0,1)",
    textAlign: "left",
    flex: 1
  }
});

export default GrowingComponent;
