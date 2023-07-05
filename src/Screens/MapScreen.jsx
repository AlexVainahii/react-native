import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { Entypo } from "@expo/vector-icons";
import { Text } from "react-native";
import { Navigation } from "react-native-feather";
import ContinuousAnimation from "../Components/ContinuousAnimation";

export default MapScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const isCurrentLocation = route.params.isCurrentLocation;
  let item = null;
  if (!isCurrentLocation) {
    item = route.params.item;
  }

  const [selectedCoordinates, setSelectedCoordinates] = useState(null);

  useEffect(() => {
    if (isCurrentLocation) {
      const currLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          console.log("Permission to access location was denied");
        }

        const location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Highest,
          maximumAge: 10000,
        });

        coords = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        };
        setSelectedCoordinates(coords);
      };

      currLocation();
    } else {
      coords = {
        ...item.coordinates,
      };
      setSelectedCoordinates(coords);
    }
  }, []);

  const onMapPress = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setSelectedCoordinates({ latitude, longitude });
  };

  return (
    <View style={{ flex: 1 }}>
      {!selectedCoordinates && <ContinuousAnimation />}
      {selectedCoordinates && (
        <MapView
          style={{ flex: 1 }}
          mapType="hybrid"
          minZoomLevel={5}
          initialRegion={{
            latitude: selectedCoordinates.latitude,
            longitude: selectedCoordinates.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={isCurrentLocation}
          onPress={isCurrentLocation && onMapPress} // Додано обробник події натискання на карту
        >
          <Marker
            title="Я тут"
            coordinate={selectedCoordinates} // Використовуємо обрані координати, якщо вони є, або передані координати
            description={
              !isCurrentLocation
                ? item.coordinateName
                : "Встановіть координити фото"
            }
          >
            <View
              style={{
                backgroundColor: "white",
                height: 19,
                width: 19,
                borderRadius: 20,
                position: "absolute",
                left: 25,
                top: 15,
              }}
            />
            <Entypo name="location-pin" size={70} color="#FF6C00" />
          </Marker>
        </MapView>
      )}
      {isCurrentLocation && selectedCoordinates && (
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            justifyContent: "center",
            width: "90%",
            bottom: 20,
            alignSelf: "center",

            backgroundColor: "#FF6C00",
            alignItems: "center",
            height: 51,
            borderRadius: 32,
          }}
          onPress={() => {
            navigation.navigate("Створити публікацію", {
              userLocation: selectedCoordinates,
            });
          }}
        >
          <Entypo
            name="location"
            size={24}
            color="#FFFFFF"
            style={{ position: "absolute", left: 20 }}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "#FFF",
              fontSize: 16,
              lineHeight: 18.75,
              fontWeight: 400,
            }}
          >
            Задати координати фото
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
