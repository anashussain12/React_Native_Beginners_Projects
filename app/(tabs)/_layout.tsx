import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Animated, Platform, useColorScheme } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          left: 20,
          right: 20,
          bottom: 20,
          borderRadius: 25,
          height: 65,
          paddingBottom: Platform.OS === "ios" ? 15 : 10,
          backgroundColor:
            colorScheme === "dark"
              ? "rgba(30,30,30,0.9)"
              : "rgba(255,255,255,0.9)",
          borderTopWidth: 0,
          elevation: 10, // Android shadow
          shadowColor: "#000", // iOS shadow
          shadowOpacity: 0.15,
          shadowRadius: 8,
          shadowOffset: { width: 0, height: 4 },
        },
        tabBarActiveTintColor: "#3B82F6",
        tabBarInactiveTintColor: colorScheme === "dark" ? "#aaa" : "#666",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Counter App",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "calculator" : "calculator-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="todolist"
        options={{
          title: "Todo List",
          tabBarIcon: ({ color, focused }) => (
            <AnimatedIcon
              name={focused ? "list" : "list-outline"}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="calculator"
        options={{
          title: "Calculator",
          tabBarIcon: ({ color, focused }) => (
            <AnimatedIcon
              name={focused ? "apps" : "apps-outline"}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="weather"
        options={{
          title: "Weather App",
          tabBarIcon: ({ color, focused }) => (
            <AnimatedIcon
              name={focused ? "cloud" : "cloud-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

// ✅ Animated Icon Component
const AnimatedIcon = ({ name, color }: { name: any; color: string }) => {
  const scaleValue = React.useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    Animated.spring(scaleValue, {
      toValue: 1.1,
      friction: 3,
      useNativeDriver: true,
    }).start(() => {
      Animated.spring(scaleValue, {
        toValue: 1,
        friction: 3,
        useNativeDriver: true,
      }).start();
    });
  }, [name]);

  return (
    <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
      <Ionicons name={name} size={24} color={color} />
    </Animated.View>
  );
};
