import React from "react";
import { Pressable, Image, Text, View, TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { companyPost } from "../services/companyPost";
import { globalStyles } from "../styles/global";
import api from "../services/api";

export default function companySignUp({ navigation }) {
  const [corporateName, onChangeCorporateName] = React.useState("");
  const [fantasyName, onChangeFantasyName] = React.useState("");
  const [cnpj, onChangeCnpj] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [confirmPassword, onChangeConfirmPassword] = React.useState("");
  const [phoneNumber, onChangePhoneNumber] = React.useState("");
  const [email, onChangeEmail] = React.useState("");

  const data = {
    corporateName,
    fantasyName,
    cnpj,
    password,
    confirmPassword,
    phoneNumber,
    email,
  };

  function pressHandler() {
    api.post("/api/Company/RegisterCompany", data).then((response) => {
      if (response.status == 200) {
        navigation.navigate("Login");
      }
    });
  }

  return (
    <>
      <View style={styles.container}>
        <View style={globalStyles.contentPlace}>
          <Text style={styles.title}>PONTO-ALL</Text>
          <View style={styles.pinkRectangle}></View>
          <Text style={{ marginTop: 12, fontFamily: "MontserratSemiBold" }}>
            Cadastre sua empresa
          </Text>

          <Text style={{ marginTop: 30, fontFamily: "MontserratSemiBold" }}>
            Nome da empresa
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeCorporateName}
            value={corporateName}
          />

          <Text style={{ marginTop: 5, fontFamily: "MontserratSemiBold" }}>
            Nome fantasia
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeFantasyName}
            value={fantasyName}
          />

          <Text style={{ marginTop: 5, fontFamily: "MontserratSemiBold" }}>
            CNPJ
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeCnpj}
            value={cnpj}
            keyboardType="numbers-and-punctuation"
          />

          <Text style={{ marginTop: 5, fontFamily: "MontserratSemiBold" }}>
            E-mail
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
          />

          <Text style={{ marginTop: 5, fontFamily: "MontserratSemiBold" }}>
            Telefone
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangePhoneNumber}
            value={phoneNumber}
          />

          <Text style={{ marginTop: 5, fontFamily: "MontserratSemiBold" }}>
            Senha
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
          />

          <Text style={{ marginTop: 5, fontFamily: "MontserratSemiBold" }}>
            Confirmar senha
          </Text>

          <TextInput
            style={styles.input}
            onChangeText={onChangeConfirmPassword}
            value={confirmPassword}
          />

          <Pressable style={styles.button} onPress={pressHandler}>
            <Text style={globalStyles.buttonText}>Registrar entrada</Text>
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
  password: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    marginRight: 38,
  },
  halfInput: {
    width: "47%",
    height: 48,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#F06595",
    paddingLeft: 15,
    marginTop: 5,
    fontFamily: "Montserrat",
  },
});
