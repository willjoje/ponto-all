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
        <View style={styles.content}>
          <Text>PONTO-ALL</Text>
          <Text>Faça o login para registrar sua presença</Text>
          <Text>CPF ou CNPJ</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="useless placeholder"
            keyboardType="numeric"
          />
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
  content: {
    marginHorizontal: 22,
  },
  input: {
    width: "auto",
    height: 48,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#F06595",
    paddingLeft: 15,
  },
});
