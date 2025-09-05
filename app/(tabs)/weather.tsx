// WeatherApp.tsx
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function WeatherApp() {
  const [city, setCity] = useState("");

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>🌦️ Weather App</Text>

      {/* Input Box */}
      <TextInput
        style={styles.input}
        placeholder="Enter city name..."
        value={city}
        onChangeText={setCity}
      />

      {/* Search Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Weather</Text>
      </TouchableOpacity>

      {/* Weather Card */}
      <View style={styles.card}>
        <Text style={styles.cityName}>Islamabad</Text>
        <Text style={styles.temperature}>27°C</Text>
        <Text style={styles.description}>☁️ Cloudy</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e2c",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#4e9bde",
    padding: 12,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  card: {
    backgroundColor: "#2e2e42",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    width: "100%",
  },
  cityName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  temperature: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#4e9bde",
    marginVertical: 10,
  },
  description: {
    fontSize: 18,
    color: "#ccc",
  },
});
