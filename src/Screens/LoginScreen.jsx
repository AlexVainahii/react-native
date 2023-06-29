import {
  ImageBackground,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import image from "../../assets/background.jpg";

export default LoginScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.containerLog}>
          <Text style={styles.header}>Увійти</Text>
          <View style={styles.containerInputs}>
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
            <Text style={styles.button}>Увійти</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.navLogIn}>Немає акаунту? Зареєструватися</Text>
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
  containerLog: {
    flex: 0,
    height: 489,
    paddingLeft: 16,
    paddingRight: 16,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "#fff",
    alignItems: "center",
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
    width: "100%",
    marginTop: 16,
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 18.75,
    fontWeight: 400,
    textAlign: "center",
  },
});
