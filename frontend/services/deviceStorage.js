import AsyncStorage from "@react-native-async-storage/async-storage";

async function saveItem(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log("AsyncStorage Error: " + error.message);
  }
}

export default saveItem;
