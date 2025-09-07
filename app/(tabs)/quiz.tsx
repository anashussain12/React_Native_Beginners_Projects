// QuizApp.tsx
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
  },
  {
    question: "What is 5 + 3?",
    options: ["5", "8", "9", "7"],
    correctAnswer: "8",
  },
];

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isFinished, setIsFinished] = useState(false);

  const handleOptionPress = (option: string) => {
    setSelectedOption(option);
    if (option === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧠 Quiz App</Text>

      {isFinished ? (
        <View style={styles.card}>
          <Text style={styles.question}>🎉 Quiz Finished!</Text>
          <Text style={styles.score}>
            Your Score: {score} / {quizData.length}
          </Text>
        </View>
      ) : (
        <View style={styles.card}>
          <Text style={styles.question}>
            {quizData[currentQuestion].question}
          </Text>

          {quizData[currentQuestion].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.option,
                selectedOption === option &&
                  (option === quizData[currentQuestion].correctAnswer
                    ? styles.correct
                    : styles.wrong),
              ]}
              onPress={() => handleOptionPress(option)}
              disabled={selectedOption !== null}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {!isFinished && (
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>
            {currentQuestion + 1 === quizData.length ? "Finish ✅" : "Next ➡️"}
          </Text>
        </TouchableOpacity>
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
    marginBottom: 30,
  },
  card: {
    backgroundColor: "#2e2e42",
    padding: 20,
    borderRadius: 15,
    width: "100%",
    marginBottom: 20,
  },
  question: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  option: {
    backgroundColor: "#4e9bde",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 18,
    color: "white",
  },
  correct: {
    backgroundColor: "green",
  },
  wrong: {
    backgroundColor: "red",
  },
  button: {
    backgroundColor: "#ff7f50",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  score: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4e9bde",
    marginTop: 10,
  },
});
