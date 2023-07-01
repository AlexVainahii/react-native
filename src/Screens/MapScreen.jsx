import { StyleSheet, View } from "react-native";

export default MapScreen = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
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
