import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import image from "../../assets/background.jpg";
import { Feather } from "@expo/vector-icons";
import IconImage from "../../assets/avatar.jpg";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
export default ProfileScreen = () => {
  const navigation = useNavigation();
  const onLogout = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.containerForm}>
          <View style={styles.logout}>
            <TouchableOpacity onPress={onLogout}>
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </View>
          <View style={styles.containerIcon}>
            <Image source={IconImage} alt="avatar" style={styles.avatar} />
            <Feather name="plus" style={styles.icon} size={25} />
            <Feather name="circle" style={styles.iconC} size={25} />
          </View>
          <Text style={styles.header}>Natali Romanova</Text>
          <Posts filter={`email${5}@example.com`} />
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  containerForm: {
    flex: 0,
    height: 582,
    paddingLeft: 16,
    paddingRight: 16,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "#fff",
    alignItems: "center",
    position: "relative",
  },
  containerIcon: {
    flex: 0,
    left: "50%",
    top: -60,
    transform: [{ translateX: -50 }],
    width: 120,
    height: 120,
    borderRadius: 25,
    position: "absolute",
    backgroundColor: "#F6F6F6",
  },
  avatar: { borderRadius: 25 },
  logout: {
    position: "absolute",
    top: 22,
    right: 16,
    zIndex: 700,
  },
  icon: {
    color: "#BDBDBD",
    borderColor: null,
    position: "absolute",
    bottom: 14,
    right: -12,
    transform: [{ rotate: "45deg" }],
    zIndex: 100,
  },
  iconC: {
    color: "#FFF",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 13,
    right: -13,
    transform: [{ rotate: "45deg" }],
  },
  header: {
    marginTop: 92,
    color: "#212121",
    fontSize: 30,
    lineHeight: 35.16,
    fontWeight: 500,
    textAlign: "center",
  },
});
