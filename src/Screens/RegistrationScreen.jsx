import {
  Image,
  ImageBackground,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import image from "../../assets/background.jpg";
import Icon from "react-native-vector-icons/MaterialIcons";
import IconImage from "../../assets/avatar.jpg";

export default RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.containerReg}>
          <View style={styles.containerIcon}>
            <Image source={IconImage} alt="avatar" style={styles.avatar} />
            <Icon name="add-circle" style={styles.icon} size={25} />
          </View>
          <Text style={styles.header}>Реєстрація</Text>
          <View style={styles.containerInputs}>
            <TextInput style={[styles.input]} placeholder="Логін" />

            <TextInput
              style={[styles.input]}
              placeholder="Адреса електронної пошти"
            />
            <View style={styles.containerPress}>
              <TextInput style={[styles.input]} placeholder="Пароль" />
              <Pressable>
                <Text style={styles.press}>Показати</Text>
              </Pressable>
            </View>
          </View>
          <Pressable style={{ width: "100%" }}>
            <Text style={styles.button}>Зареєструватися</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.navLogIn}>Вже є акаунт? Увійти</Text>
          </Pressable>
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
  containerReg: {
    flex: 0,
    height: 549,
    paddingLeft: 16,
    paddingRight: 16,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "#fff",
    alignItems: "center",
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
  icon: {
    color: "#FFF",
    borderRadius: 25,
    backgroundColor: "#FF6C00",
    position: "absolute",
    bottom: 14,
    right: -12,
  },

  header: {
    marginTop: 92,
    color: "#212121",
    fontSize: 30,
    lineHeight: 35.16,
    fontWeight: 500,
    textAlign: "center",
    marginBottom: 16,
  },
  containerInputs: {
    width: "100%",
    paddingBottom: 32,
    marginBottom: 11,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    padding: 16,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    marginTop: 16,
  },
  focusInput: {
    borderColor: "#FF6C00",
    borderWidth: 1,
  },
  containerPress: {
    width: "100%",
  },
  press: {
    position: "absolute",
    bottom: 16,
    right: 16,
    fontSize: 16,
    lineHeight: 18.75,
    fontWeight: 400,
    color: "#1B4371",
  },
  button: {
    width: "100%",
    padding: 16,
    textAlign: "center",
    height: 50,
    borderRadius: 32,
    color: "white",
    fontSize: 16,
    lineHeight: 18.75,
    fontWeight: 400,
    backgroundColor: "#FF6C00",
  },
  navLogIn: {
    marginTop: 16,
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 18.75,
    fontWeight: 400,
    textAlign: "center",
  },
});
