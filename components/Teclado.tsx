import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface TecladoProps {
  onGuess: (letra: string) => void;
  guessedLetters: string[];
}

export default function Teclado({ onGuess, guessedLetters }: TecladoProps) {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <View style={styles.teclado}>
      {letters.map((letter) => {
        const letraMaiuscula = letter.toUpperCase();
        const isSelected = guessedLetters.includes(letraMaiuscula);

        return (
          <TouchableOpacity
            key={letter}
            style={[styles.tecla, isSelected && styles.teclaDisabled]}
            onPress={() => onGuess(letter)}
            disabled={isSelected}
          >
            <Text style={styles.teclaText}>{letraMaiuscula}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  teclado: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    justifyContent: "center",
    maxWidth: 600,
  },
  tecla: {
    width: 40,
    height: 40,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.08)",
    backgroundColor: "rgba(0,0,0,0.05)",
    justifyContent: "center",
    alignItems: "center",
  },
  teclaDisabled: {
    opacity: 0.4,
  },
  teclaText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#171717",
  },
});
