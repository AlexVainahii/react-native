import { Text } from "react-native";
import { View } from "react-native";
import { image, ImageBackground, StyleSheet } from "react-native";

export default PostsScreen = () => (
  <View style={styles.container}>
    <Text>Публікації</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "black",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",

    marginTop: 32,
  },
});
