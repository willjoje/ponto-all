import React from "react";
import { Pressable, Image, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";
import img from "../assets/perfil.png";
import pin from "../assets/pin_drop.png";

export default function Guide({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("FaceVerification");
  };
  const pressHandlerBack = () => {
    navigation.navigate("Home");
  };
  return (
    <>
      <View style={styles.container}>
        <View style={globalStyles.localization}>
          <Text style={styles.boldText}>
            Tire uma foto para registrar sua presença
          </Text>
        </View>
        <Image source={img} style={styles.image}></Image>
        <Text style={styles.pText}>
          . Preencha o círculo com seu rosto {"\n"}. Assegure-se de que o
          ambiente está iluminado {"\n"}. Não utilize chapéus, óculos ou
          qualquer coisa que esconda o seu rosto
        </Text>
      </View>
      <View style={styles.buttonGroup}>
        <Pressable style={globalStyles.button}>
          <Text style={globalStyles.buttonText} onPress={pressHandler}>
            Começar o reconhecimento
          </Text>
        </Pressable>
        <Pressable style={styles.pressable} onPress={pressHandlerBack}>
          <Text style={globalStyles.boldText}>Cancelar</Text>
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
    marginTop: 70,
    width: 200,
    height: 200,
  },
  wellcome: {
    fontFamily: "Montserrat",
    fontSize: 24,
    lineHeight: 24,
  },
  boldText: {
    marginTop: 60,
    fontFamily: "Montserrat",
    fontWeight: "900",
    fontSize: 15,
  },
  pText: {
    marginHorizontal: 40,
    marginTop: 60,
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: 15,
    lineHeight: 25,
  },
  pressable: {
    marginBottom: 60,
  },
  buttonGroup: {
    justifyContent: "flex-start",
    height: "30%",
    paddingBottom: 80,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
