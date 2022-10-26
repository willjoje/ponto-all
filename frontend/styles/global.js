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
    fontFamily: "Montserrat",
    fontWeight: "800",
    fontSize: 15,
    lineHeight: 24,
  },
  pressable: {
    marginTop: -13,
  },
  boldText: {
    color: "black",
    fontFamily: "Montserrat",
    fontWeight: "900",
    fontSize: 15,
    lineHeight: 24,
  },
  normalText: {
    fontFamily: "Montserrat",
    fontWeight: "400",
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
    fontFamily: "Montserrat",
    fontWeight: "800",
    fontSize: 14,
    lineHeight: 24,
  },
  time: {
    marginTop: 50,
    fontFamily: "Montserrat",
    color: "#343A40",
    fontSize: 32,
    lineHeight: 32,
  },
  pinkText: {
    color: "#F06595",
    fontFamily: "MontserratBold",
  },
  contentPlace: {
    marginHorizontal: 22,
    fontFamily: "Montserrat",
  },
});
