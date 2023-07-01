import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import PostsScreen from "./PostsScreen";
import { useNavigation } from "@react-navigation/native";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import { View } from "react-native";
import { TouchableOpacity } from "react-native";

const Tabs = createBottomTabNavigator();

export default function Home() {
  const navigation = useNavigation();
  const onLogout = () => {
    navigation.navigate("Login");
  };
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#21212180",
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            paddingLeft: 55,
            paddingRight: 55,
            height: 83,
            display: "flex",
            paddingBottom: 34,
            paddingTop: 10,
          },
          null,
        ],
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Публікації") {
            iconName = "grid";
          } else if (route.name === "Створити публікацію") {
            iconName = "plus";
          } else if (route.name === "Користувач") {
            iconName = "user";
          }

          return (
            <>
              <View
                style={{
                  backgroundColor: focused ? "#FF6C00" : null,
                  borderRadius: 30,
                  width: 70,
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Feather name={iconName} size={24} color={color} style={{}} />
              </View>
            </>
          );
        },
      })}
    >
      <Tabs.Screen
        name="Публікації"
        component={PostsScreen}
        options={{
          headerTitleAlign: "center",
          headerRight: () => (
            <TouchableOpacity onPress={onLogout}>
              <Feather
                name="log-out"
                size={24}
                color="#BDBDBD"
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="Створити публікацію"
        component={CreatePostsScreen}
        options={{
          headerTitleAlign: "center",
        }}
      />
      <Tabs.Screen
        name="Користувач"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
}
