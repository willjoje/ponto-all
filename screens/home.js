import React from "react";
import { Pressable, Image, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";
import img from "../assets/landing-img.png";
import pin from "../assets/pin_drop.png";

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Guide");
  };
  return (
    <>
      <View style={styles.container}>
        <View style={globalStyles.localization}>
          <Image source={pin} style={globalStyles.pin}></Image>
          <Text style={globalStyles.street}> Rua das Flores, 263</Text>
        </View>
        <Text style={globalStyles.time}>09:41</Text>
        <Text style={styles.wellcome}>Bem vindo, usuário!</Text>
        <Image source={img} style={styles.image}></Image>
      </View>
      <View style={globalStyles.buttonGroup}>
        <Pressable style={globalStyles.button}>
          <Text style={globalStyles.buttonText} onPress={pressHandler}>
            Registrar entrada
          </Text>
        </Pressable>
        <Pressable style={globalStyles.pressable}>
          <Text style={globalStyles.boldText}>Ver histórico</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 300,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    marginTop: 60,
    width: 300,
    height: 300,
  },
  wellcome: {
    marginTop: 40,
    fontStyle: "bold",
    fontWeight: "800",
    fontSize: 24,
    lineHeight: 34,
  },
});
