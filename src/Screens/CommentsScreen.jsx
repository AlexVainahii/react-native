import { useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { TextInput } from "react-native";
import { Image } from "react-native";
import { Keyboard } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { View } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { FlatList } from "react-native";

export default CommentsScreen = () => {
  const route = useRoute();
  const item = route.params.item;
  const { comments } = item;
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={{ width: "100%" }}>
          <View style={styles.imagePost}>
            <Image
              source={{ uri: `${item.photoUrl}` }}
              alt={`${item.description}`}
              style={styles.imagePost}
            />
          </View>
        </View>
        <ScrollView style={styles.containerPosts} decelerationRate="fast">
          <FlatList
            data={comments}
            keyExtractor={(comment) => comment.id}
            renderItem={({ comment }) => (
              <View style={styles.containerPost}>
                <Image
                  source={{ uri: `${comment.avatarUrl}` }}
                  alt={`${comment.email}`}
                  style={styles.imagePost}
                />
                {/* <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                  }}
                >
                  <View>
                    <Text style={styles.imageTitle}>{item.description}</Text>
                    <View style={styles.containerIcons}>
                      <View style={styles.containerIcon}>
                        <View>
                          <Feather
                            name="message-circle"
                            size={24}
                            color={
                              item.comments.length > 0 ? "#FF6C00" : "#BDBDBD"
                            }
                            onPress={() =>
                              navigation.navigate("Коментарі", { item })
                            }
                          />
                        </View>
                        <Text style={styles.numbers}>
                          {item.comments.length}
                        </Text>
                        <Feather
                          name="thumbs-up"
                          size={24}
                          style={styles.icons}
                          color={
                            item.emails.includes(userEmail)
                              ? "#FF6C00"
                              : "#BDBDBD"
                          }
                          onPress={() => onToggleLike(item)}
                        />
                        <Text style={styles.numbers}>{item.emails.length}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.containerLocation}>
                    <TouchableOpacity
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                      onPress={() => navigation.navigate("Карта", { item })}
                    >
                      <Feather name="map-pin" size={24} color="#BDBDBD" />
                      <Text style={styles.location}>Україна</Text>
                    </TouchableOpacity>
                  </View>
                </View> */}
              </View>
            )}
            scrollEnabled={false}
            removeClippedSubviews={true}
          />
        </ScrollView>
        <KeyboardAvoidingView
          style={{ width: "100%" }}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View>
            <Pressable style={{ width: "100%" }}>
              <TextInput style={styles.button} placeholder="Коментувати..." />
            </Pressable>

            <Ionicons
              name="arrow-up-circle"
              size={34}
              color="#FF6C00"
              style={styles.icon}
            />
          </View>
        </KeyboardAvoidingView>
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
    width: 28,
    height: 28,
    backgroundColor: "#F8F8F8",
    textAlign: "center",
    marginBottom: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

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
    right: 2,
    transform: [{ translateY: -3 }],
  },
  button: {
    width: "100%",
    padding: 16,
    marginTop: 32,

    height: 51,
    borderRadius: 32,
    color: "#BDBDBD",
    fontSize: 16,
    lineHeight: 18.75,
    fontWeight: "400",
    backgroundColor: "#F6F6F6",
  },
});
