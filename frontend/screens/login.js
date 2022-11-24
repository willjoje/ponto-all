import React from "react";
import { Pressable, Image, Text, View, TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";
import jwt_decode from "jwt-decode";
import api from "../services/api";
import saveKey from "../services/deviceStorage";

export default function Login({ navigation }) {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  function pressHandler() {
    api.post("/api/Auth/Login", { email, password }).then((response) => {
      if (response.status > 199 && response.status < 300) {
        const token = response.data;
        saveKey("id_token", token);
        alert("Bem vindo");
        next(token);
      }
    });
  }

  const next = (token) => {
    const decoded = jwt_decode(token);
    console.log(decoded);
    if (decoded.role == "Admin") {
      navigation.navigate("CollaboratorSignUp");
    } else {
      navigation.navigate("Home");
    }
  };

  const signCompany = () => {
    navigation.navigate("CompanySignUp");
  };

  return (
    <>
      <View style={styles.container}>
        <View style={globalStyles.contentPlace}>
          <Text style={styles.title}>PONTO-ALL</Text>
          <View style={styles.pinkRectangle}></View>
          <Text style={{ marginTop: 12, fontFamily: "MontserratSemiBold" }}>
            Faça o login para registrar sua presença. :)
          </Text>

          <Text style={{ marginTop: 32, fontFamily: "MontserratSemiBold" }}>
            Email
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
          />

          <View style={styles.senha}>
            <Text style={{ fontFamily: "MontserratSemiBold" }}>Senha</Text>
            <Text style={globalStyles.pinkText}>Esqueci minha senha</Text>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            secureTextEntry={true}
          />

          <Pressable style={styles.button} onPress={pressHandler}>
            <Text style={globalStyles.buttonText}>Registrar entrada</Text>
          </Pressable>
          <Text style={{ marginTop: 32, fontFamily: "MontserratSemiBold" }}>
            Não tem uma conta?
            <Text style={globalStyles.pinkText} onPress={signCompany}>
              {" "}
              Cadastre sua empresa
            </Text>
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
  },
  input: {
    width: "auto",
    height: 48,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#F06595",
    paddingLeft: 15,
    marginTop: 15,
    fontFamily: "Montserrat",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#F06595",
    height: 45,
    marginTop: 20,
    fontFamily: "Montserrat",
  },
  title: {
    fontFamily: "MontserratBold",
    fontSize: 28,
  },
  pinkRectangle: {
    position: "absolute",
    backgroundColor: "rgba(240, 101, 149, 0.5)",
    width: 73,
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
