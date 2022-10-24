import React, { useState, useEffect } from "react";
import { Platform, Text, View, StyleSheet } from "react-native";

import * as Location from "expo-location";

export default function App() {
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

      let location = await Location.getCurrentPositionAsync({});
      const { street, streetNumber } = (
        await Location.reverseGeocodeAsync(location.coords)
      )[0];
      setLocation(location);
      setAddress(`${street}, ${streetNumber}`);
    })();
  }, []);

  return <Text>{address}</Text>;
}
