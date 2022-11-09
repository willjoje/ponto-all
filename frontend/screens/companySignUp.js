import React from "react";
import { Pressable, Image, Text, View, TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";
import Axios from "axios";

export default function Login({ navigation }) {
  const [nome, onChangeNome] = React.useState("");
  const [CPF, onChangeCPF] = React.useState(null);

  useEffect(() => {
    Axios.post({{
  "corporateName": "google",
  "fantasyName": "google",
  "cnpj": "108108108108",
  "password": "1998998",
  "confirmPassword": "1998998",
  "phoneNumber": "81998903369",
  "email": "user@example.com"
}})
  });

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
            onChangeText={onChangeNome}
            value={nome}
            keyboardType="numeric"
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
              value={CPF}
            />

            <TextInput
              style={styles.halfInput}
              onChangeText={onChangeCPF}
              value={CPF}
            />
          </View>

          <Text style={{ marginTop: 5, fontFamily: "MontserratSemiBold" }}>
            E-mail
          </Text>

          <TextInput
            style={styles.input}
            onChangeText={onChangeNome}
            value={nome}
            keyboardType="numeric"
          />

          <Text style={{ marginTop: 5, fontFamily: "MontserratSemiBold" }}>
            Telefone
          </Text>

          <TextInput
            style={styles.input}
            onChangeText={onChangeNome}
            value={nome}
            keyboardType="numeric"
          />

          <Text style={{ marginTop: 5, fontFamily: "MontserratSemiBold" }}>
            Endereço
          </Text>

          <TextInput
            style={styles.input}
            onChangeText={onChangeNome}
            value={nome}
            keyboardType="numeric"
          />

          <Text style={{ marginTop: 5, fontFamily: "MontserratSemiBold" }}>
            Senha
          </Text>

          <TextInput
            style={styles.input}
            onChangeText={onChangeNome}
            value={nome}
            keyboardType="numeric"
          />
          <Text style={{ marginTop: 5, fontFamily: "MontserratSemiBold" }}>
            Confirmar senha
          </Text>

          <TextInput
            style={styles.input}
            onChangeText={onChangeNome}
            value={nome}
            keyboardType="numeric"
          />
          <Pressable style={styles.button}>
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
