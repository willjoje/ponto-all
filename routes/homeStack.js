import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import Guide from "../screens/guide";
import faceVerification from "../screens/faceVerification";

const screens = {
  faceVerification: {
    screen: faceVerification,
  },
  Home: {
    screen: Home,
  },
  Guide: {
    screen: Guide,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
