import { useState, useRef, useEffect, React } from "react";
import { StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";
import { Camera, CameraType } from "expo-camera";
import pin from "../assets/pin_drop.png";
import { Pressable, Image, Text, View, Button } from "react-native";

export default function faceVerification({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Confirmation");
  };
  const pressHandlerBack = () => {
    navigation.navigate("Guide");
  };
  let cameraRef = useRef();
  const [type, setType] = useState(CameraType.front);
  const [hasCameraPermission, setHasCameraPermission] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
    })();
  }, []);

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  return (
    <>
      <View style={styles.container}>
        <View style={globalStyles.localization}>
          <Image source={pin} style={globalStyles.pin}></Image>
          <Text style={globalStyles.street}> Rua das Flores, 263</Text>
        </View>
      </View>
      <View style={styles.cameraContainer}>
        <Camera
          style={styles.camera}
          ref={cameraRef}
          type={type}
          ratio="16:9"
        ></Camera>
      </View>
      <View style={globalStyles.buttonGroup}>
        <Pressable style={globalStyles.button} onPress={pressHandler}>
          <Text style={globalStyles.buttonText}>Enviar foto</Text>
        </Pressable>
        <Pressable style={globalStyles.pressable} onPress={pressHandlerBack}>
          <Text style={globalStyles.boldText}>Cancelar</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  cameraContainer: {
    flex: 1,
    height: 800,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  camera: {
    height: 623,
    width: 350,
  },
  wellcome: {
    marginTop: 40,
    fontStyle: "bold",
    fontWeight: "800",
    fontSize: 24,
    lineHeight: 34,
  },
});
