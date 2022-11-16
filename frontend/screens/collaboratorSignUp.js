import React, { useEffect } from "react";
import {
  Pressable,
  Image,
  Text,
  View,
  TextInput,
  AsyncStorage,
} from "react-native";
import { StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";
import api from "../services/api";

export default function Login({ navigation }) {
  const [name, onChangeName] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [cpf, onChangeCPF] = React.useState("");
  const [phoneNumber, onChangePhoneNumber] = React.useState("");
  const [birthDate, onChangeBirthDate] = React.useState("");
  const [endereco, onChangeEndereco] = React.useState(""); //fake
  const isManager = true;

  const address = {
    country: "string",
    state: "string",
    cep: "55555000",
    city: "string",
    street: "string",
    district: "string",
    number: "string",
    reference: "string",
  };

  const data = {
    name,
    email,
    cpf,
    phoneNumber,
    birthDate,
    isManager,
    address,
  };

  async function pressHandler() {
    let newData = data;
    newData.birthDate = new Date(newData.birthDate);
    console.log(newData);

    const value = await AsyncStorage.getItem("id_token");
    api
      .post("/api/User/RegisterCollaborator", newData, {
        headers: { Authorization: `Bearer ${value}` },
      })
      .then((response) => {
        if (response.status > 199 && response.status < 300) {
          console.log("Usuário cadastrado com sucesso");
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
            Cadastre seu funcionário ;D
          </Text>

          <Text style={{ marginTop: 30, fontFamily: "MontserratSemiBold" }}>
            Nome completo
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={name}
          />

          <View style={styles.password}>
            <Text style={{ fontFamily: "MontserratSemiBold" }}>CPF</Text>
            <Text style={{ fontFamily: "MontserratSemiBold" }}>
              Data de nascimento
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TextInput
              style={styles.halfInput}
              onChangeText={onChangeCPF}
              value={cpf}
            />

            <TextInput
              style={styles.halfInput}
              onChangeText={onChangeBirthDate}
              value={birthDate}
            />
          </View>

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
            Endereço
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeEndereco}
            value={endereco}
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
