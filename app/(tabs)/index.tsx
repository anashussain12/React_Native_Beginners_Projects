import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App 🚀</Text>
      <Text style={styles.counter}>{count}</Text>

      <View style={styles.buttons}>
        <Button
          title="➕ Increase"
          onPress={() => {
            setCount(count + 1);
          }}
        />
        <Button
          title="➖ Decrease"
          onPress={() => {
            setCount(count - 1);
            if (count <= 0) {
              setCount(0);
            }
          }}
        />
        <Button
        title="🔄 Reset" 
        onPress={()=>{
          setCount(0);
        }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  counter: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 30,
  },
  buttons: {
    gap: 10,
  },
});
