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
  const API_KEY = "cd3e125a72d1e30d43fc99255a18f3af"; 

  const [city, setCity] = useState(""); // user input
  const [weather, setWeather] = useState<any>(null);

  const getWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();

      if (data.cod === 200) {
        setWeather({
          name: data.name,
          temp: data.main.temp,
          description: data.weather[0].main,
        });
      } else {
        setWeather(null);
        alert("City not found!");
      }
    } catch (error) {
      alert("Something went wrong!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌦️ Weather App</Text>

      {/* Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter city name..."
        value={city}
        onChangeText={setCity}
      />

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={getWeather}>
        <Text style={styles.buttonText}>Get Weather</Text>
      </TouchableOpacity>
      {/* Weather Card */}
      {weather && (
        <View style={styles.card}>
          <Text style={styles.cityName}>{weather.name}</Text>
          <Text style={styles.temperature}>{weather.temp}°C</Text>
          <Text style={styles.description}>{weather.description}</Text>
        </View>
      )}
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
