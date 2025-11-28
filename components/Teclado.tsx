import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import * as Haptics from "expo-haptics";

interface TecladoProps {
  onGuess: (letra: string) => void;
  guessedLetters: string[];
}

export default function Teclado({ onGuess, guessedLetters }: TecladoProps) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const handlePress = (letter: string) => {
    if (Platform.OS !== "web") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    onGuess(letter);
  };

  return (
    <View style={styles.tecladoContainer}>
      {letters.map((letter) => {
        const isSelected = guessedLetters.includes(letter);

        return (
          <TouchableOpacity
            key={letter}
            style={[styles.tecla, isSelected && styles.teclaDisabled]}
            onPress={() => handlePress(letter)}
            disabled={isSelected}
            activeOpacity={0.7}
          >
            <Text
              style={[styles.teclaText, isSelected && styles.teclaTextDisabled]}
            >
              {letter}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tecladoContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    justifyContent: "center",
    maxWidth: "100%",
    paddingHorizontal: 10,
  },
  tecla: {
    width: 40,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#1F1F1F",
    borderWidth: 1,
    borderColor: "#333333",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4,
  },
  teclaText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
  },
  teclaDisabled: {
    backgroundColor: "#0a0a0a",
    borderColor: "#1a1a1a",
    elevation: 0,
  },
  teclaTextDisabled: {
    color: "#333333",
  },
});
