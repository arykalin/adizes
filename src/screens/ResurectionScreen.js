import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Text, Image } from "react-native";

function ResurectionScreen(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.group}
        imageStyle={styles.group_imageStyle}
        source={require("../assets/images/Gradient_D90PcfS.png")}
      >
        <Text gradientImage="Gradient_mAGh8Qz.png" style={styles.text}>
          Поздравляю! Ваша компания успешно возродилась и вам удалось сделать
          все необходимое для того, чтобы она продолжала свое дальнейшее
          развитие:{"\n"} • внедрить новые инновационные продукты{"\n"} •
          диверсифицировать бизнес{"\n"} • модернизировать бизнес-процессы{"\n"}{" "}
          • сократить время на принятие решений и ликвидировать бюрократию{"\n"}{" "}
          • обновить руководство{"\n"} Ваша главная цель: используя свои
          лидерские навыки и управленческие компетенции обеспечить новый этап
          роста компании.{"\n"} Хотите стать эффективным управленцем?{"\n"}{" "}
          Регистрируйтесь на вебинар, где я расскажу вам о курсе «Бизнес как
          система» - самый короткий путь от операционной зависимости к
          системному бизнесу
        </Text>
        <Image
          source={require("../assets/images/resurection_screen.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  group: {
    height: 925,
    overflow: "scroll",
    flex: 1,
  },
  group_imageStyle: {},
  text: {
    fontFamily: "montserrat-regular",
    color: "rgba(255,255,255,1)",
    width: 335,
    height: 256,
    fontSize: 11,
    marginTop: 81,
    alignSelf: "center"
  },
  image: {
    height: 352,
    marginTop: 23
  }
});

export default ResurectionScreen;
