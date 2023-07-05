import React, { useRef, useEffect } from "react";
import { View, Animated } from "react-native";
import { Entypo } from "@expo/vector-icons";

const ContinuousAnimation = () => {
  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startAnimation = () => {
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1.5,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ]).start(() => {
        startAnimation();
      });
    };

    startAnimation();

    return () => {
      scaleValue.stopAnimation();
    };
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Animated.View
        style={{
          transform: [{ scale: scaleValue }],
        }}
      >
        <Entypo name="location-pin" size={42} color="#FF6C00" />
      </Animated.View>
    </View>
  );
};

export default ContinuousAnimation;
