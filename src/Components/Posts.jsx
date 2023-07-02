import { Image, Text } from "react-native";
import { ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { View } from "react-native";
import { generateDataArray } from "../helpers";
import { useState } from "react";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default Posts = ({ filter }) => {
  const navigation = useNavigation();
  const [randomPosts, setRandomPosts] = useState(generateDataArray(20, filter));
  const userEmail = `email${2}@example.com`;
  const onToggleLike = (item) => {
    let newItem = {};
    let newEmails = [];
    if (item.emails.includes(userEmail)) {
      newEmails = item.emails.filter((email) => email !== userEmail);
      newItem = { ...item, emails: newEmails };
    } else {
      newItem = { ...item, emails: [...item.emails, userEmail] };
    }
    const newPosts = randomPosts.map((post) =>
      post.id === item.id ? newItem : post
    );
    setRandomPosts(newPosts);
  };

  return (
    <ScrollView style={styles.containerPosts} decelerationRate="fast">
      <FlatList
        data={randomPosts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.containerPost}>
            <Image
              source={{ uri: `${item.photoUrl}` }}
              alt={`${item.description}`}
              style={styles.imagePost}
            />
            <View
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
                        color={item.comments.length > 0 ? "#FF6C00" : "#BDBDBD"}
                        onPress={() =>
                          navigation.navigate("Коментарі", { item })
                        }
                      />
                    </View>
                    <Text style={styles.numbers}>{item.comments.length}</Text>
                    <Feather
                      name="thumbs-up"
                      size={24}
                      style={styles.icons}
                      color={
                        item.emails.includes(userEmail) ? "#FF6C00" : "#BDBDBD"
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
            </View>
          </View>
        )}
        scrollEnabled={false}
        removeClippedSubviews={true}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  containerPosts: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    marginTop: 32,
  },
  containerPost: {
    height: 299,
    width: "100%",
    backgroundColor: null,
    marginBottom: 32,
  },
  imagePost: {
    borderRadius: 8,
    width: "100%",
    height: 240,
    marginBottom: 8,
  },
  imageTitle: {
    color: "#212121",
    marginBottom: 8,
  },
  containerIcons: {
    width: "100%",
    height: 24,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerIcon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  containerLocation: {
    maxHeight: 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  icons: { marginLeft: 24 },
  numbers: {
    color: "#212121",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 18.75,
    marginLeft: 6,
  },
  location: {
    color: "#212121",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 18.75,
    marginLeft: 6,
    textDecorationLine: "underline",
    textAlign: "justify",
  },
});
