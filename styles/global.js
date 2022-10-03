import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  buttonGroup: {
    height: "20%",
    paddingBottom: "50px",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#F06595",
    width: "90%",
    height: "40%",
  },
  buttonText: {
    color: "white",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "24px",
  },
  pressableText: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "24px",
    marginTop: "-13px",
  },
  localization: {
    width: 350,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  pin: {
    marginRight: "3%",
    width: 12,
    height: 16,
  },
  street: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "24px",
  },
  time: {
    marginTop: "50px",
    fontStyle: "bold",
    fontWeight: "600",
    fontSize: "34px",
    lineHeight: "24px",
  },
});
