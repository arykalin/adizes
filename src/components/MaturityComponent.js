import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function MaturityComponent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.maturity}>
        Компания в период зрелости — один из ключевых игроков в выбранной нише.
        {"\n"}Продажи растут, хоть и не так динамично, как в период роста. Доля
        рынка либо продолжает понемногу расти, либо колеблется в установившихся
        пределах.{"\n"}Основная цель – обеспечение стабильности, максимизация
        доходов за счет улучшения внутренних показателей эффективности и более
        жесткого контроля над соблюдением стандартов работы.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  maturity: {
    fontFamily: "montserrat-regular",
    color: "rgba(0,0,0,1)",
    textAlign: "left",
    flex: 1
  }
});

export default MaturityComponent;
