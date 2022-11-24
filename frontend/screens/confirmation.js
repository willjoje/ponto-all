import React from "react";
import { Pressable, Image, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";
import confirmCircle from "../assets/confirmCircle.png";
import v from "../assets/v.png";

export default function Confirmation({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("History");
  };
  const pressHandlerBack = () => {
    navigation.navigate("Guide");
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image source={confirmCircle} style={styles.confirmCircle}></Image>
          <Image source={v} style={styles.v}></Image>
          <Text style={styles.confirmationText}> Sucesso! </Text>
          <Text style={globalStyles.normalText}>
            Ponto de entrada registrado com sucesso.
          </Text>
        </View>

        <View style={globalStyles.buttonGroup}>
          <Pressable style={globalStyles.button}>
            <Text style={globalStyles.buttonText} onPress={pressHandler}>
              Historico de ponto
            </Text>
          </Pressable>

          <Pressable onPress={pressHandlerBack}>
            <Text style={globalStyles.boldText}> Registro de ponto </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  confirmCircle: {
    width: 100,
    height: 100,
    bottom: 20,
  },
  confirmationText: {
    fontFamily: "Montserrat",
    fontWeight: "800",
    fontSize: 24,
    lineHeight: 34,
    color: "#F06595",
  },
  imgContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  v: {
    position: "absolute",
    top: 248,
  },
});
