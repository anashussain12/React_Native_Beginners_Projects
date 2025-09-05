import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [display, setDisplay] = useState("0");

  const handlePress = (input: string) => {
    if (input === "C") {
      setDisplay("0");
    } else if (input === "=") {
      try {
        // Replace × with * and ÷ with / for eval
        const result = eval(display.replace(/×/g, "*").replace(/÷/g, "/"));
        setDisplay(String(result));
      } catch (e) {
        setDisplay("Error");
      }
    } else {
      if (display === "0" && !["+", "−", "×", "÷"].includes(input)) {
        setDisplay(input); // replace 0 with first number
      } else {
        setDisplay(display + input);
      }
    }
  };

  const Button = ({ label }: { label: string }) => (
    <TouchableOpacity
      style={[
        styles.button,
        ["+", "−", "×", "÷", "="].includes(label) && styles.operatorButton,
        label === "C" && styles.clearButton,
      ]}
      onPress={() => handlePress(label)}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Display */}
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{display}</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          <Button label="C" />
          <Button label="±" />
          <Button label="%" />
          <Button label="÷" />
        </View>
        <View style={styles.row}>
          <Button label="7" />
          <Button label="8" />
          <Button label="9" />
          <Button label="×" />
        </View>
        <View style={styles.row}>
          <Button label="4" />
          <Button label="5" />
          <Button label="6" />
          <Button label="−" />
        </View>
        <View style={styles.row}>
          <Button label="1" />
          <Button label="2" />
          <Button label="3" />
          <Button label="+" />
        </View>
        <View style={styles.row}>
          <Button label="0" />
          <Button label="." />
          <Button label="=" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom : 67,
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "flex-end",
  },
  displayContainer: {
    padding: 20,
    alignItems: "flex-end",
  },
  displayText: {
    fontSize: 60,
    color: "#fff",
  },
  buttonsContainer: {
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  button: {
    flex: 1,
    margin: 5,
    backgroundColor: "#333",
    paddingVertical: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  operatorButton: {
    backgroundColor: "#ff9500",
  },
  clearButton: {
    backgroundColor: "#d9534f",
  },
  buttonText: {
    fontSize: 24,
    color: "#fff",
  },
});
