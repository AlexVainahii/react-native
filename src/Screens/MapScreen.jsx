import { useRoute } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default MapScreen = () => {
  const route = useRoute();
  const { coordinates } = route.params.item;
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={coordinates} />
      </MapView>
    </View>
  );
};
