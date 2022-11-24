import React, { useState, useEffect } from "react";
import { Platform, Text, View, StyleSheet } from "react-native";
import * as Location from "expo-location";
import saveKey from "../services/deviceStorage";

export default function location() {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  let street, streetNumber;

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let position = await Location.getCurrentPositionAsync({});

      // filtring the geocode response to what the API expect
      const {
        country,
        district,
        postalCode,
        region,
        street,
        streetNumber,
        subregion,
      } = (await Location.reverseGeocodeAsync(position.coords))[0];
      const expectedLocation = {
        address: {
          country: country,
          state: region,
          cep: postalCode,
          city: subregion,
          street: street,
          district: district,
          number: streetNumber,
          reference: "",
        },
      };
      const expectedLocationStringfied = JSON.stringify(expectedLocation);
      // saving the formated location object to be persistent and accessable anywhere
      saveKey("full_location", expectedLocationStringfied);
      // setting the return variable 'address' only stree and street number
      setAddress(`${street}, ${streetNumber}`);
    })();
  }, []);

  return <Text>{address}</Text>;
}
