import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { v4 as uuidv4 } from "uuid";
import { StyleSheet, View } from "react-native";
import { FontAwesome5, Feather, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import * as Animatable from "react-native-animatable";
import { CommonActions } from "@react-navigation/native";
import { useState, useEffect, useRef } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
export default CreatePostsScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [hasLibraryPermission, setHasLibraryPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");
  const [locationName, setLocationName] = useState("");
  const [location, setLocation] = useState("");
  const [focusInput, setFocusInput] = useState(null);
  const [isCamera, setIsCamera] = useState(false);

  const route = useRoute();
  const navigation = useNavigation();
  let userLocation = null;
  let isUserLocation = false;
  if (route.params && route.params.userLocation) {
    console.log(route.params);
    userLocation = { ...route.params.userLocation };
    isUserLocation = true;
  }

  if (route.params) {
  }

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
        maximumAge: 10000,
      });
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setLocation(coords);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasLibraryPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  if (hasLibraryPermission === null) {
    return <View />;
  }
  if (hasLibraryPermission === false) {
    return <Text>No access to library</Text>;
  }
  const openImagePicker = async () => {
    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (pickerResult.canceled === true) {
      return;
    }

    setPhoto(pickerResult.assets[0].uri);
    setIsCamera(false);
  };

  const onFocus = (value) => {
    setFocusInput(value);
  };
  const onBlur = () => {
    setFocusInput(null);
  };
  const zoomOut = {
    0: {
      scale: 1,
    },
    0.5: {
      scale: 1.2,
    },
    1: {
      scale: 1,
    },
  };
  const onResetForm = () => {
    setPhoto("");
    setLocationName("");
    setDescription("");
    userLocation = null;
    setIsCamera(false);
    isUserLocation = false;
  };
  const addPost = () => {
    const newPost = {
      id: uuidv4(),
      photoUrl: photo,
      description: description,
      email: `email4@example.com`,
      coordinates: isUserLocation ? userLocation : location,
      coordinateName: locationName,
      emails: [],
      comments: [],
    };
    console.log("newPost :>> ", newPost);
    onResetForm();

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: "Публікації",
            params: { paramName: null }, // Передача параметра зі значенням null
          },
        ],
      })
    );
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={{ width: "100%" }}>
          {photo ? (
            <View style={styles.imagePost}>
              <Image source={{ uri: photo }} style={styles.image} />
              <TouchableOpacity
                style={{ position: "absolute", bottom: 10, right: 10 }}
                onPress={() => {
                  setPhoto("");
                  setIsCamera("");
                }}
              >
                <View style={styles.reverse}>
                  <MaterialIcons name="delete" size={24} color="#BDBDBD" />
                </View>
              </TouchableOpacity>
            </View>
          ) : (
            <Camera
              style={styles.imagePost}
              type={type}
              ref={setCameraRef}
              ratio="16:9"
            >
              <TouchableOpacity
                onPress={async () => {
                  if (cameraRef) {
                    const { uri } = await cameraRef.takePictureAsync();
                    console.log("uri :>> ", uri);
                    await MediaLibrary.createAssetAsync(uri);
                    setPhoto(uri);
                    setIsCamera(true);
                  }
                }}
              >
                <View style={styles.circle}>
                  <FontAwesome5 name="camera" size={24} color="#BDBDBD" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ position: "absolute", bottom: 10, right: 10 }}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}
              >
                <View style={styles.reverse}>
                  <MaterialIcons
                    name="flip-camera-android"
                    size={24}
                    color="#BDBDBD"
                  />
                </View>
              </TouchableOpacity>
            </Camera>
          )}

          <TouchableOpacity style={{ width: "100%" }} onPress={openImagePicker}>
            <Text style={styles.text}>Завантажити фото з галереї</Text>
          </TouchableOpacity>
        </View>
        <KeyboardAvoidingView
          style={{ width: "100%" }}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <TextInput
            style={[
              styles.textInput,
              focusInput === "Назва" && styles.focusInput,
            ]}
            placeholder="Назва..."
            value={description}
            onChangeText={setDescription}
            onFocus={() => {
              onFocus("Назва");
            }}
            onBlur={onBlur}
          />
          <View
            style={{
              marginTop: 16,
              height: 50,
              width: "100%",
              position: "relative",
            }}
          >
            <TextInput
              style={[
                styles.textLocation,
                focusInput === "Місцевість" && styles.focusInput,
              ]}
              placeholder="Місцевість..."
              value={locationName}
              onChangeText={setLocationName}
              onFocus={() => {
                onFocus("Місцевість");
              }}
              onBlur={onBlur}
            />
            <View style={styles.iconCont}>
              {!isUserLocation && !isCamera && photo ? (
                <Animatable.View
                  animation={zoomOut}
                  easing="ease-in-out"
                  iterationCount="infinite"
                  direction="alternate"
                  iterationDelay={3000}
                >
                  <TouchableOpacity
                    style={styles.icon}
                    onPress={() =>
                      navigation.navigate("Карта", {
                        isCurrentLocation: true,
                      })
                    }
                  >
                    <Feather name="map-pin" size={24} color="#fff" />
                  </TouchableOpacity>
                </Animatable.View>
              ) : (
                <TouchableOpacity
                  style={[
                    styles.icon,
                    {
                      backgroundColor:
                        isCamera || !photo
                          ? "#BDBDBD"
                          : isUserLocation
                          ? "#FF6C00"
                          : "#BDBDBD",
                    },
                  ]}
                  disabled={isCamera || !photo ? true : false}
                  onPress={() =>
                    navigation.navigate("Карта", {
                      isCurrentLocation: true,
                    })
                  }
                >
                  <Feather name="map-pin" size={24} color="#fff" />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </KeyboardAvoidingView>

        <TouchableOpacity
          style={{ width: "100%" }}
          disabled={
            photo && description && locationName && (location || userLocation)
              ? false
              : true
          }
          onPress={() => addPost()}
        >
          <Text
            style={[
              styles.button,
              description &&
                locationName &&
                photo &&
                (location || userLocation) &&
                styles.allSubmit,
            ]}
          >
            Опубліковати
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 70,
            height: 40,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            marginTop: "auto",
            marginBottom: 34,
            backgroundColor:
              !photo && !description && !locationName && !userLocation
                ? "#F6F6F6"
                : "#FF6C00",
          }}
          disabled={
            !photo && !description && !locationName && !userLocation
              ? true
              : false
          }
          onPress={() => onResetForm()}
        >
          <Feather
            name="trash-2"
            size={24}
            style={[
              {
                color:
                  photo || description || locationName || userLocation
                    ? "#FFF"
                    : "#BDBDBD",
              },
            ]}
          />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
  },
  imagePost: {
    width: "100%",
    height: 240,
    backgroundColor: "#F8F8F8",
    textAlign: "center",
    marginBottom: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    position: "relative",
  },
  image: {
    width: "100%",
    height: 240,
  },
  circle: {
    height: 60,
    width: 60,
    display: "flex",
    justifyContent: "center",
    borderRadius: 60,
    alignItems: "center",
    backgroundColor: "#FFFFFF4D",
  },
  reverse: {
    height: 40,
    width: 40,
    display: "flex",
    justifyContent: "center",
    borderRadius: 60,
    alignItems: "center",
    backgroundColor: "#FFFFFF4D",
  },
  text: {
    width: 250,
    height: 19,
    color: "#BDBDBD",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 18.75,
  },
  textInput: {
    width: "100%",
    color: "#212121",
    fontSize: 16,
    height: 50,
    paddingBottom: 15,
    paddingTop: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    fontWeight: "400",
    lineHeight: 18.75,
    marginTop: 32,
  },
  textLocation: {
    width: "100%",
    color: "#212121",
    fontSize: 16,
    height: 50,
    paddingBottom: 15,
    paddingTop: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    fontWeight: "400",
    lineHeight: 18.75,
  },
  icon: {
    borderRadius: 30,
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C004D",
    transform: [{ translateY: -25 }],
  },
  iconCont: { position: "absolute", top: "50%", right: 15 },
  button: {
    width: "100%",
    padding: 16,
    marginTop: 32,
    textAlign: "center",
    height: 51,
    borderRadius: 32,
    color: "#BDBDBD",
    fontSize: 16,
    lineHeight: 18.75,
    fontWeight: 400,
    backgroundColor: "#F6F6F6",
  },
  focusInput: {
    borderBottomColor: "#FF6C00",
  },
  allSubmit: {
    backgroundColor: "#FF6C00",
    color: "#fff",
  },
});
