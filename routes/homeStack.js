import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import Guide from "../screens/guide";
import FaceVerification from "../screens/faceVerification";
import Confirmation from "../screens/confirmation";
import { WhiteBalance } from "expo-camera";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: { headerTintColor: "#fff" },
  },
  Guide: {
    screen: Guide,
    navigationOptions: { title: "Reconhecimento facial" },
  },
  FaceVerification: {
    screen: FaceVerification,
    navigationOptions: { title: "Reconhecimento facial" },
  },
  Confirmation: {
    screen: Confirmation,
    navigationOptions: { headerTintColor: "#fff" },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerShown: true,
    headerStyle: {
      backgroundColor: "white",
      shadowColor: "transparent",
    },
  },
});

export default createAppContainer(HomeStack);
