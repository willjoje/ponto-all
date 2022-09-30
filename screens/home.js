import React from "react";
import { Pressable, Image, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import img from "../assets/home-img.svg";
import pin from "../assets/pin_drop.svg";

export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.localization}>
          <Image source={pin} style={styles.pin}></Image>
          <Text style={styles.street}> Rua das Flores, 263</Text>
        </View>
        <Text style={styles.time}>09:41</Text>
        <Text style={styles.wellcome}>Bem vindo, usuário!</Text>
        <Image source={img} style={styles.image}></Image>
      </View>
      <View style={styles.buttonGroup}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Registrar entrada</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.pressableText}>Ver histórico</Text>
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
  buttonGroup: {
    height: "20%",
    paddingBottom: "50px",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#F06595",
    width: "90%",
    height: "40%",
  },
  buttonText: {
    color: "white",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "24px",
  },
  pressableText: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "24px",
    marginTop: "-13px",
  },
  localization: {
    width: 350,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  pin: {
    marginRight: "3%",
    width: 12,
    height: 16,
  },
  street: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "24px",
  },
  time: {
    marginTop: "50px",
    fontStyle: "bold",
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "24px",
  },
  wellcome: {
    marginTop: "88px",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 24,
    lineHeight: 24,
  },
});
