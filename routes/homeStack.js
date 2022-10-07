import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import Guide from "../screens/guide";
import FaceVerification from "../screens/faceVerification";
import Confirmation from "../screens/confirmation";
import Location from "../screens/location";

const screens = {
  Location: {
    screen: Location,
  },
  Confirmation: {
    screen: Confirmation,
  },
  Home: {
    screen: Home,
  },
  Guide: {
    screen: Guide,
  },
  FaceVerification: {
    screen: FaceVerification,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
