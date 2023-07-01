import { Text } from "react-native";
import { StyleSheet, View } from "react-native";
import Posts from "../Components/Posts";
import IconImage from "../../assets/avatar.jpg";
import { Image } from "react-native";

export default PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerIcon}>
        <Image source={IconImage} alt="avatar" style={styles.avatar} />
        <View style={styles.containerText}>
          <Text style={styles.text}>Natali Romanova</Text>
          <Text style={styles.email}>email@example.com</Text>
        </View>
      </View>

      <Posts filter={""} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 500,
    backgroundColor: "#fff",
    paddingLeft: 16,
    paddingRight: 16,
  },

  containerIcon: {
    flex: 0,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  containerText: { marginLeft: 8 },
  avatar: { borderRadius: 16, width: 60, height: 60 },
  text: { lineHeight: 15.23, fontSize: 13, fontWeight: 700 },
  email: { lineHeight: 12.89, fontSize: 11, fontWeight: 400 },
});
