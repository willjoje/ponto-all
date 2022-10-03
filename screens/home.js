import React from "react";
import { Pressable, Image, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";
import { useCallback } from "react";
import img from "../assets/home-img.svg";
import pin from "../assets/pin_drop.svg";

export default function Home() {
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
          <Text style={globalStyles.buttonText}>Registrar entrada</Text>
        </Pressable>
        <Pressable>
          <Text style={globalStyles.pressableText}>Ver histórico</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "30%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    marginTop: "88px",
    width: "20rem",
    height: "20rem",
  },
  wellcome: {
    marginTop: "88px",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 24,
    lineHeight: 24,
  },
});
