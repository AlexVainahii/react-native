import {
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import image from "../../assets/background.jpg";
import { Feather } from "@expo/vector-icons";
import IconImage from "../../assets/avatar.jpg";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
export default RegistrationScreen = () => {
  const navigation = useNavigation();
  const [focusInput, setFocusInput] = useState(null);
  const [isShowPass, setIsShowPass] = useState(false);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toggleShowPass = () => {
    setIsShowPass(!isShowPass);
  };
  const onFocus = (value) => {
    setFocusInput(value);
  };
  const onBlur = () => {
    setFocusInput(null);
  };
  const onSubmit = () => {
    console.log("registerData :>> ", {
      login,
      email,
      password,
    });
    navigation.navigate("Home");
    setEmail("");
    setLogin("");
    setPassword("");
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.containerForm}>
            <KeyboardAvoidingView
              style={{ width: "100%" }}
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <View style={styles.containerIcon}>
                <Image source={IconImage} alt="avatar" style={styles.avatar} />
                <Feather name="plus" style={styles.icon} size={25} />
                <Feather name="circle" style={styles.iconC} size={25} />
              </View>
              <Text style={styles.header}>Реєстрація</Text>
              <View style={styles.containerInputs}>
                <TextInput
                  style={[
                    styles.input,
                    focusInput === "Логін" && styles.focusInput,
                  ]}
                  placeholder="Логін"
                  value={login}
                  onChangeText={setLogin}
                  onFocus={() => {
                    onFocus("Логін");
                  }}
                  onBlur={onBlur}
                />

                <TextInput
                  style={[
                    styles.input,
                    focusInput === "Емейл" && styles.focusInput,
                  ]}
                  placeholder="Адреса електронної пошти"
                  value={email}
                  onChangeText={setEmail}
                  onFocus={() => {
                    onFocus("Емейл");
                  }}
                  onBlur={onBlur}
                />
                <View style={styles.containerPress}>
                  <TextInput
                    style={[
                      styles.input,
                      focusInput === "Пароль" && styles.focusInput,
                    ]}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!isShowPass}
                    placeholder="Пароль"
                    onFocus={() => {
                      onFocus("Пароль");
                    }}
                    onBlur={onBlur}
                  />
                  <Pressable onPress={toggleShowPass}>
                    <Text style={styles.press}>
                      {!isShowPass ? "Показати" : "Приховати"}
                    </Text>
                  </Pressable>
                </View>
              </View>
              <Pressable style={{ width: "100%" }} onPress={onSubmit}>
                <Text style={styles.button}>Зареєструватися</Text>
              </Pressable>
              <Pressable onPress={() => navigation.navigate("Login")}>
                <Text style={styles.navLogIn}>Вже є акаунт? Увійти</Text>
              </Pressable>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
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
    color: "#FF6C00",
    borderRadius: 25,
    backgroundColor: null,
    position: "absolute",
    bottom: 14,
    right: -12,
    zIndex: 100,
  },
  iconC: {
    backgroundColor: "#FFF",
    borderRadius: 25,
    color: "#FFF",
    borderWidth: 1,
    borderColor: "#FF6C00",
    position: "absolute",
    bottom: 13,
    right: -13,
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
