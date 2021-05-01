import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function ResurectionComponent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.resurection}>
        Стадия Возрождения возникает не во всех компаниях. Она происходит тогда,
        когда компания понимает, что теряет свою конкурентоспособность, и
        начинает бороться за свое существование.{"\n"}Стадия Возрождения может
        быть успешной, а может не принести желаемого результата.Главная цель в
        этот период - оживление компании..
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  resurection: {
    fontFamily: "montserrat-regular",
    color: "rgba(0,0,0,1)",
    textAlign: "left",
    flex: 1
  }
});

export default ResurectionComponent;
