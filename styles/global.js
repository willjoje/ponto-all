import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  buttonGroup: {
    height: "20%",
    paddingBottom: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#F06595",
    width: 350,
    height: 45,
  },
  buttonText: {
    color: "white",
    fontWeight: "800",
    fontSize: 15,
    lineHeight: 24,
  },
  pressable: {
    marginTop: -13,
  },
  boldText: {
    color: "black",
    fontWeight: "900",
    fontSize: 15,
    lineHeight: 24,
  },
  localization: {
    width: 350,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  pin: {
    marginRight: 5,
    width: 12,
    height: 16,
  },
  street: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 24,
  },
  time: {
    marginTop: 50,
    fontStyle: "bold",
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 24,
  },
});
