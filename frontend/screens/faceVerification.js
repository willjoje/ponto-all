import { useState, useRef, useEffect, React } from "react";
import { StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";
import { Pressable, Image, Text, View, Button } from "react-native";
import { Camera, CameraType } from "expo-camera";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Location from "expo-location";
import * as MediaLibrary from "expo-media-library";
import location from "../util/location";
import pin from "../assets/pin_drop.png";
import api from "../services/api";
import FormData from "form-data";
import FsLightbox from "fslightbox-react";
import img from "../assets/landing-img.png";

export default function faceVerification({ navigation }) {
  let cameraRef = useRef();
  const [type, setType] = useState(CameraType.front);
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState({ uri: "" });
  const [address, setAddress] = useState();

  // Granting permission
  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
    })();
  }, []);

  // taking and saving the picture
  let takePic = async () => {
    let options = {
      height: 1600,
      width: 900,
      quality: 0.5,
      format: "jpg",
    };

    const newPhoto = await cameraRef.current.takePictureAsync(options);
    console.log("new photo uri:", newPhoto.uri);

    const jsonData = await AsyncStorage.getItem("full_location");
    const token = await AsyncStorage.getItem("id_token");

    if (newPhoto) {
      let filename = newPhoto.uri.split("/").pop();
      let match = /\.(\w+)$/.exec(filename);
      let type = "image/jpg";

      let data = new FormData();
      console.log(newPhoto.uri);
      data.append("photo", { uri: newPhoto.uri, name: filename, type });
      data.append("jsonData", jsonData);

      api
        .post("/api/Point/RegisterPoint", data, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          setPhoto(response.userPhotograph);
          if (response.status > 199 && response.status < 300) {
            navigation.navigate("Confirmation");
          } else {
            alert("Tente outra vez!");
          }
        })
        .catch((error) => console.log("Erro aqui: " + error));
    }
  };

  // going back to previous screen
  const pressHandlerBack = () => {
    navigation.navigate("Guide");
  };

  // handling post request to the API with location, picture and authorization

  // const handlePost = async () => {
  //   await takePic();

  // };

  return (
    <>
      <View style={styles.container}>
        <View style={globalStyles.localization}>
          <Image source={pin} style={globalStyles.pin}></Image>
          <Text style={globalStyles.street}> {location.call()}</Text>
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
        <Pressable style={globalStyles.button} onPress={takePic}>
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
