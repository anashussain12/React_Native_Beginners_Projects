import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const addTask = () => {
    if (task.trim().length === 0) return; // avoid empty tasks
    setTodos([...todos, task]); // add to list
    setTask(""); // clear input
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📝 My Todo List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={task}
          onChangeText={setTask}
          style={styles.input}
          placeholder="Enter a task..."
          placeholderTextColor="#b8b8b89d"
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addButtonText}>➕</Text>
        </TouchableOpacity>
      </View>
      {/* Idher saara list waala code hai */}
      <FlatList
        data={todos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No tasks yet 😴</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: "#4CAF50",
    paddingHorizontal: 20,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  emptyText: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
    color: "#666",
  },
  todoItem: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  todoText: {
    fontSize: 16,
    color: "#333",
  },
});
