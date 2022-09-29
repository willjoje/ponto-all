import React from "react";
import { Button, Image, Text, View } from "react-native";
import { StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={StyleSheet.container}>
      <Text>Rua das Flores, 263</Text>
      <Text>09:41</Text>
      <Text>Bem vindo, usuário!</Text>
      <Button title="Registrar entrada"></Button>
      <Button title="Ver Histórico"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
