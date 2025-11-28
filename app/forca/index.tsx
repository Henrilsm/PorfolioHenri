import React from "react";
import { View, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import Forca from "../../components/Forca";

export default function ForcaPage() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Jogo da Forca",
          headerBackTitle: "Voltar", 
          headerTintColor: "#000",
        }}
      />

      <Forca />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0909ff", 
  },
});
