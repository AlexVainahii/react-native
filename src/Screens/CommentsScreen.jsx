import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { v4 as uuidv4 } from "uuid";
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
import { SafeAreaView } from "react-native";

export default CommentsScreen = () => {
  const route = useRoute();
  const item = route.params.item;
  const userEmail = route.params.userEmail;

  const { comments } = item;
  const [newComment, setNewComment] = useState("");
  function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  // Функція для отримання поточного часу
  function getCurrentTime() {
    const currentDate = new Date();
    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");
    const seconds = String(currentDate.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }
  const onAddComment = () => {
    const newComments = {
      date: getCurrentDate(),
      email: userEmail,
      id: uuidv4(),

      avatarUrl: `https://source.unsplash.com/random/350x240?nature`,
      time: getCurrentTime(),
      comment: newComment,
    };
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={{ width: "100%", flex: 1 }}>
        <View style={styles.container}>
          <View style={{ width: "100%", height: 240 }}>
            <Image
              source={{ uri: `${item.photoUrl}` }}
              alt={`${item.description}`}
              style={styles.imagePost}
            />
          </View>
          <ScrollView style={styles.containerComments} decelerationRate="fast">
            <FlatList
              data={comments}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View
                  style={[
                    styles.containerComment,
                    {
                      flexDirection:
                        userEmail === item.email ? "row-reverse" : "row",
                    },
                  ]}
                >
                  <Image
                    source={{ uri: item.avatarUrl }}
                    alt={`${item.id}`}
                    style={styles.avatar}
                  />
                  <View
                    style={[
                      styles.containerText,
                      {
                        marginLeft: userEmail === item.email ? 0 : 16,
                        marginRight: userEmail === item.email ? 16 : 0,
                        borderTopLeftRadius: userEmail === item.email ? 6 : 0,
                        borderTopRightRadius: userEmail === item.email ? 0 : 6,
                      },
                    ]}
                  >
                    <Text style={styles.text}>{item.comment}</Text>

                    <Text
                      style={[
                        styles.textDate,
                        {
                          textAlign:
                            userEmail === item.email ? "left" : "right",
                        },
                      ]}
                    >
                      {item.date} | {item.time}
                    </Text>
                  </View>
                </View>
              )}
              scrollEnabled={false}
              removeClippedSubviews={true}
            />
          </ScrollView>

          <View style={styles.containerInput}>
            <TextInput
              style={styles.button}
              placeholder="Коментувати..."
              value={newComment}
              onChangeText={setNewComment}
            />

            <Ionicons
              name="arrow-up-circle"
              size={34}
              color="#FF6C00"
              style={styles.icon}
              onPress={() => onAddComment()}
            />
          </View>
        </View>
      </SafeAreaView>
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
    width: "100%",
    flex: 1,
    backgroundColor: "#F8F8F8",
    marginBottom: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 8,
  },

  containerComments: {
    backgroundColor: "#fff",
    width: "100%",
    height: 296,
    marginBottom: 31,
  },
  containerComment: {
    display: "flex",
    height: 103,
    marginBottom: 24,
  },
  avatar: { width: 28, height: 28, borderRadius: 28 },
  containerText: {
    padding: 16,
    height: "100%",
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderRadius: 6,
  },
  text: {
    width: "100%",
    height: 52,
    color: "#212121",
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 18,
  },
  textDate: {
    width: "100%",
    height: 11,
    color: "#BDBDBD",
    fontSize: 10,
    fontWeight: "400",
    lineHeight: 11.72,
    marginTop: 8,
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
    flex: 1,
  },
  containerInput: { flex: 1, width: "100%", marginBottom: 46 },
  icon: {
    position: "absolute",
    top: "50%",
    right: 2,
    transform: [{ translateY: -6 }],
  },
  button: {
    width: "100%",
    padding: 16,

    height: 51,
    borderRadius: 32,
    color: "#212121",
    fontSize: 16,
    lineHeight: 18.75,
    fontWeight: "400",
    backgroundColor: "#F6F6F6",
  },
});
