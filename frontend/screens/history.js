import React, { useState, useEffect } from "react";
import { Pressable, Image, Text, View, ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import img from "../assets/perfil.png";
import pinkCircle from "../assets/pinkCircle.png";
import pin from "../assets/pin_drop.png";
import api from "../services/api";

export default function History({ navigation }) {
  const [pointList, setPointList] = useState([]);
  const [overtime, setOvertime] = useState("");
  const [res, setRes] = useState([]);

  useEffect(() => {
    getPoints();
  }, [0]);

  const getPoints = async () => {
    const token = await AsyncStorage.getItem("id_token");
    const decodedToken = jwt_decode(token);
    api
      .get("/api/Point/GetPoints", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const { points, overtime } = response.data;
        setRes(points);
        setOvertime(overtime);
      })
      .catch((error) => console.log("Erro aqui: " + error));
  };

  const formatData = (item, index) => {
    const date = new Date(item.datePoint);

    const formatedDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;

    const hora = `${date.getHours() + 3}:${date.getMinutes()}`;
    let type = "";
    if (item.typePoint == "Entry") {
      type = "Ponto de entrada";
    } else {
      type = "Ponto de saída";
    }

    return (
      <View key={index} style={styles.point}>
        <View
          style={{ flexDirection: "column", alignContent: "space-between" }}
        >
          <Text style={globalStyles.pinkText}>{formatedDate}</Text>
          <Text>Hora: {hora}</Text>
        </View>

        <Text>{type}</Text>
      </View>
    );
  };

  return (
    <>
      <View style={styles.container} onMount>
        <View style={globalStyles.contentPlace}>
          <Text style={styles.title}>PONTO-ALL</Text>
          <View style={styles.pinkRectangle}></View>
          <Text style={{ marginTop: 12, fontFamily: "MontserratSemiBold" }}>
            Histórico de pontos
          </Text>
          <Text>Overtime: {overtime}</Text>
          <ScrollView>{res.map(formatData)}</ScrollView>
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
  image: {
    marginTop: 70,
    width: 200,
    height: 200,
    zIndex: 2,
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
  point: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "auto",
    height: 68,
    borderWidth: 1.5,
    borderRadius: 15,
    borderColor: "#F06595",
    paddingHorizontal: 15,
    marginTop: 15,
  },
});
