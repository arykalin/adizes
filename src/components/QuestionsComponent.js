import React, { Component } from "react";
import {StyleSheet, View, Text, TouchableOpacity, Image, Modal} from "react-native";

function QuestionComponent(props) {
  return (
      <View style={styles.questionsGroup}>
        <TouchableOpacity
            onPress={() => setShowQuestion(false)}
            style={styles.backButton}>
          <Image
              source={require("../assets/images/Group_25.png")}
              resizeMode="contain"
              style={styles.backButtonImage}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.questionRectangle}
        >
          <Text style={styles.questionText}>
            Подбор команды
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.questionRectangle}
        ></TouchableOpacity>
        <TouchableOpacity
            style={styles.questionRectangle}
        ></TouchableOpacity>
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
