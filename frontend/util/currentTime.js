import React from "react";
import { Text } from "react-native";

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
const date = new Date();
let hours = addZero(date.getHours());
let minutes = addZero(date.getMinutes());
let time = hours + ":" + minutes;

console.log(time);
export default function currentTime() {
  return <Text>{time}</Text>;
}
