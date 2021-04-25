import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Text, Image } from "react-native";

function DeathScreen(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.group}
        imageStyle={styles.group_imageStyle}
        source={require("../assets/images/Gradient_fOm5wol.png")}
      >
        <Text style={styles.loremIpsum}>
          Если компания все же не удалось совершить прорыв, то ее ждет крах.
          Растут долги, продажи падают, уходят инвесторы. Для владельца это
          означает потерю контроля, компания банкротится, ее активы скупаются.
          {"\n"}В большинстве случаев компания сначала становится фактическим
          банкротом, а уже потом начинается судебная процедура банкротства.
          Иногда между двумя этими датами проходят годы. По судебной практике,
          компания – банкрот, когда доходов не хватает, чтобы расплатиться по
          долгам, и нет плана по исправлению ситуации. С этого момента Вы в зоне
          риска{"\n"}Как минимизировать риски и какие действия предпринять,
          читайте в Правилах безопасного банкротства{"\n"}Чтобы развивать и
          растить бизнес, нужно расти самому!{"\n"}Регистрируйтесь на вебинар,
          где я расскажу вам о курсе «Бизнес как система» - самый короткий путь
          от операционной зависимости к системному бизнесу
        </Text>
        <Image
          source={require("../assets/images/death_screen.png")}
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
  loremIpsum: {
    fontFamily: "montserrat-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 11,
    textAlign: "left",
    marginTop: 52,
    marginLeft: 18,
    marginRight: 18
  },
  image: {
    height: 312
  }
});

export default DeathScreen;
