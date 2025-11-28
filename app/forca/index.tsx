import React from "react";
import { View, StyleSheet } from "react-native";
import { Stack } from "expo-router";
// Importaremos o componente adaptado (ajuste o caminho conforme sua pasta)
// No Next.js você usava @/, no RN geralmente usamos caminhos relativos
import Forca from "../../components/Forca";

export default function ForcaPage() {
  return (
    <View style={styles.container}>
      {/* Configura o título da barra superior especificamente para essa tela */}
      <Stack.Screen
        options={{
          title: "Jogo da Forca",
          headerBackTitle: "Voltar", // Texto do botão voltar no iOS
          headerTintColor: "#000", // Cor da seta/texto
        }}
      />

      {/* O componente do jogo */}
      <Forca />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Garante que a div ocupe a tela toda
    backgroundColor: "#fff", // Fundo branco padrão
  },
});
