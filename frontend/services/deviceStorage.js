import { AsyncStorage } from "react-native";

async function saveItem(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log("AsyncStorage Error: " + error.message);
  }
}

export default saveItem;
