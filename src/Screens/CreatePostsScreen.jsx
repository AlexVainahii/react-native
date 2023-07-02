import {
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { StyleSheet, View } from "react-native";
import { FontAwesome5, Feather } from "@expo/vector-icons";

import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";

export default CreatePostsScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={{ width: "100%" }}>
          <View style={styles.imagePost}>
            <TouchableOpacity>
              <View style={styles.circle}>
                <FontAwesome5 name="camera" size={24} color="#BDBDBD" />
              </View>
            </TouchableOpacity>
          </View>
          <Pressable style={{ width: "100%" }}>
            <Text style={styles.text}>Завантажте фото</Text>
          </Pressable>
        </View>
        <KeyboardAvoidingView
          style={{ width: "100%" }}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <TextInput style={styles.textInput} placeholder="Назва..." />
          <View
            style={{
              marginTop: 16,
              height: 50,
              width: "100%",
              position: "relative",
            }}
          >
            <TextInput
              style={styles.textLocation}
              placeholder="Місцевість..."
            />
            <Feather
              name="map-pin"
              size={24}
              color="#BDBDBD"
              style={styles.icon}
            />
          </View>
        </KeyboardAvoidingView>
        <Pressable style={{ width: "100%" }}>
          <Text style={styles.button}>Опубліковати</Text>
        </Pressable>
        <Feather
          name="trash-2"
          size={24}
          color="#BDBDBD"
          style={{ marginTop: "auto", marginBottom: 34 }}
        />
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
  },
  circle: {
    height: 60,
    width: 60,
    display: "flex",
    justifyContent: "center",
    borderRadius: 60,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  text: {
    width: 131,
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
    paddingLeft: 28,
  },
  icon: {
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -10 }],
  },
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
});
