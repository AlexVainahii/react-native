import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import RegistrationScreen from "./src/Screens/RegistrationScreen";
import { useFonts } from "expo-font";
import LoginScreen from "./src/Screens/LoginScreen";
import PostsScreen from "./src/Screens/PostsScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      {/* <RegistrationScreen /> */}
      {/* <LoginScreen /> */}
      <PostsScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
