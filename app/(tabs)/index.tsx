import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";
import { Link } from "expo-router";
import {
  User,
  GraduationCap,
  FolderGit2,
  Gamepad2,
  Code2,
} from "lucide-react-native";

const COLORS = {
  background: "#0a0a0a",
  foreground: "#ededed",
  cardBg: "rgba(255, 255, 255, 0.05)",
  cardBorder: "rgba(255, 255, 255, 0.1)",
  accent: "#007AFF",
};

export default function HomePage() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />

      <ScrollView contentContainerStyle={styles.content}>
        {/* CABEÇALHO */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Olá, eu sou</Text>
          <Text style={styles.name}>Henri Leonardo</Text>
          <Text style={styles.role}>Este é meu portifólio</Text>
        </View>

        <Text style={styles.sectionTitle}>Menu Principal</Text>

        {/* GRADE DE CARDS (Todos iguais) */}
        <View style={styles.grid}>
          {/* 1. Sobre Mim */}
          <Link href="/sobremim" asChild>
            <TouchableOpacity style={styles.card}>
              <User
                size={28}
                color={COLORS.foreground}
                style={styles.cardIcon}
              />
              <Text style={styles.cardTitle}>Sobre Mim</Text>
              <Text style={styles.cardDesc}>Perfil e bio.</Text>
            </TouchableOpacity>
          </Link>

          {/* 2. Formação */}
          <Link href="/experiencia" asChild>
            <TouchableOpacity style={styles.card}>
              <GraduationCap
                size={28}
                color={COLORS.foreground}
                style={styles.cardIcon}
              />
              <Text style={styles.cardTitle}>Formação</Text>
              <Text style={styles.cardDesc}>Minha jornada.</Text>
            </TouchableOpacity>
          </Link>

          {/* 3. Projetos */}
          <Link href="/projetos" asChild>
            <TouchableOpacity style={styles.card}>
              <FolderGit2
                size={28}
                color={COLORS.foreground}
                style={styles.cardIcon}
              />
              <Text style={styles.cardTitle}>Projetos</Text>
              <Text style={styles.cardDesc}>Meus trabalhos.</Text>
            </TouchableOpacity>
          </Link>

          {/* 4. Jogo da Forca (Novo Card Padrão) */}
          <Link href="/forca" asChild>
            <TouchableOpacity style={styles.card}>
              <Gamepad2
                size={28}
                color={COLORS.foreground}
                style={styles.cardIcon}
              />
              <Text style={styles.cardTitle}>Jogo da Forca</Text>
              <Text style={styles.cardDesc}>Jogue agora.</Text>
            </TouchableOpacity>
          </Link>

          {/* 5. App Info */}
          <Link href="/sobre" asChild>
            <TouchableOpacity style={styles.card}>
              <Code2
                size={28}
                color={COLORS.foreground}
                style={styles.cardIcon}
              />
              <Text style={styles.cardTitle}>App Info</Text>
              <Text style={styles.cardDesc}>Tecnologias.</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  content: { padding: 24, paddingBottom: 40 },

  // Header
  header: { marginBottom: 32, marginTop: 10 },
  greeting: { fontSize: 16, color: COLORS.foreground, opacity: 0.7 },
  name: {
    fontSize: 32,
    fontWeight: "bold",
    color: COLORS.foreground,
    marginTop: 4,
  },
  role: { fontSize: 16, color: COLORS.accent, fontWeight: "600", marginTop: 4 },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.foreground,
    marginBottom: 16,
  },

  // Grid Layout
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12, 
    justifyContent: "space-between", 
  },

  // Estilo unificado dos Cards
  card: {
    width: "48%", 
    backgroundColor: COLORS.cardBg,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    minHeight: 130, 
    justifyContent: "center",
    marginBottom: 4, 
  },
  cardIcon: { marginBottom: 16 },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.foreground,
    marginBottom: 4,
  },
  cardDesc: { fontSize: 13, color: COLORS.foreground, opacity: 0.5 },
});
