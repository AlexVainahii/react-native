import { Text } from "react-native";
import { StyleSheet, View } from "react-native";

export default PostsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Публікації</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    height: 500,
    backgroundColor: "#fff",
  },
  header: {
    marginTop: 32,
    color: "#212121",
    fontSize: 30,
    lineHeight: 35.16,
    fontWeight: 500,
    textAlign: "center",
    marginBottom: 16,
  },
});
