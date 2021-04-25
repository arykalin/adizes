import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import AppLoading from "expo-app-loading";

import * as Font from "expo-font";
import Screen1 from "./src/screens/Screen1";
import Screen2 from "./src/screens/Screen2";
import Screen3 from "./src/screens/Screen3";
import Screen4 from "./src/screens/Screen4";
import DeathScreen from "./src/screens/DeathScreen";
import ResurectionScreen from "./src/screens/ResurectionScreen";

const DrawerNavigation = createDrawerNavigator({
  Screen1: Screen1,
  Screen2: Screen2,
  Screen3: Screen3,
  Screen4: Screen4,
  DeathScreen: DeathScreen,
  ResurectionScreen: ResurectionScreen
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Screen1: Screen1,
    Screen2: Screen2,
    Screen3: Screen3,
    Screen4: Screen4,
    DeathScreen: DeathScreen,
    ResurectionScreen: ResurectionScreen
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "montserrat-600": require("./src/assets/fonts/montserrat-600.ttf"),
      "montserrat-700": require("./src/assets/fonts/montserrat-700.ttf"),
      "montserrat-regular": require("./src/assets/fonts/montserrat-regular.ttf"),
      "montserrat-800": require("./src/assets/fonts/montserrat-800.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
