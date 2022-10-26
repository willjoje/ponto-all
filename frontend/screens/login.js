import React from "react";
import { Pressable, Image, Text, View, TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";

export default function Login({ navigation }) {
  const [text, onChangeText] = React.useState("Nome");
  const [number, onChangeNumber] = React.useState(null);
  return (
    <>
      <View style={styles.container}>
        <View style={globalStyles.contentPlace}>
          <Text style={styles.title}>PONTO-ALL</Text>
          <View style={styles.pinkRectangle}></View>
          <Text style={{ marginTop: 27 }}>
            Faça o login para registrar sua presença. :)
          </Text>
          <Text style={{ marginTop: 32 }}>CPF ou CNPJ</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            keyboardType="numbers-and-punctuation"
          />
          <View style={styles.senha}>
            <Text>Senha</Text>
            <Text style={globalStyles.pinkText}>Esqueci minha senha</Text>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
          />
          <Pressable style={styles.button}>
            <Text style={globalStyles.buttonText}>Registrar entrada</Text>
          </Pressable>
          <Text style={{ marginTop: 32 }}>
            Não tem uma conta?
            <Text style={globalStyles.pinkText}> Cadastre seu funcionário</Text>
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignContent: "center",
    fontFamily: "Montserrat",
  },
  input: {
    width: "auto",
    height: 48,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#F06595",
    paddingLeft: 15,
    marginTop: 15,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#F06595",
    height: 45,
    marginTop: 20,
  },
  title: {
    fontFamily: "MontserratSemiBold",
    fontSize: 28,
  },
  pinkRectangle: {
    position: "absolute",
    backgroundColor: "rgba(240, 101, 149, 0.5)",
    width: 91,
    height: 15,
    left: 83,
    top: 13,
    zIndex: -1,
  },
  senha: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },
});
