import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Link, useRouter } from "expo-router";
import {
  User,
  GraduationCap,
  FolderGit2,
  Gamepad2,
  ArrowRight,
} from "lucide-react-native";

const COLORS = {
  background: "#0a0a0a",
  foreground: "#ededed",
  cardBg: "rgba(255, 255, 255, 0.06)",
  borderColor: "rgba(255, 255, 255, 0.1)",
};

export default function HomePage() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header Simples */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Olá, sou</Text>
          <Text style={styles.name}>Henri Leonardo</Text>
          <Text style={styles.role}>Desenvolvedor Back-end</Text>
        </View>

        <Text style={styles.sectionTitle}>Navegação Rápida</Text>

        <View style={styles.grid}>
          {/* Card Sobre */}
          <Link href="/sobremim" asChild>
            <TouchableOpacity style={styles.card}>
              <View style={styles.iconBox}>
                <User color="#fff" size={24} />
              </View>
              <Text style={styles.cardTitle}>Sobre Mim</Text>
              <Text style={styles.cardDesc}>Conheça minha trajetória.</Text>
            </TouchableOpacity>
          </Link>

          {/* Card Formação */}
          <Link href="/experiencia" asChild>
            <TouchableOpacity style={styles.card}>
              <View style={styles.iconBox}>
                <GraduationCap color="#fff" size={24} />
              </View>
              <Text style={styles.cardTitle}>Formação</Text>
              <Text style={styles.cardDesc}>Ciência da Computação.</Text>
            </TouchableOpacity>
          </Link>

          {/* Card Projetos */}
          <Link href="/projetos" asChild>
            <TouchableOpacity style={styles.card}>
              <View style={styles.iconBox}>
                <FolderGit2 color="#fff" size={24} />
              </View>
              <Text style={styles.cardTitle}>Projetos</Text>
              <Text style={styles.cardDesc}>Web e Mobile.</Text>
            </TouchableOpacity>
          </Link>

          {/* Card Especial para o Jogo */}
          <Link href="/forca" asChild>
            <TouchableOpacity style={[styles.card, styles.cardHighlight]}>
              <View style={styles.iconBox}>
                <Gamepad2 color="#000" size={24} />
              </View>
              <Text style={[styles.cardTitle, { color: "#000" }]}>
                Jogar Forca
              </Text>
              <Text style={[styles.cardDesc, { color: "#333" }]}>
                Teste agora!
              </Text>
              <ArrowRight
                style={{ position: "absolute", right: 16, bottom: 16 }}
                color="#000"
                size={20}
              />
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: 24 },
  header: { marginBottom: 40, marginTop: 20 },
  greeting: { fontSize: 18, color: COLORS.foreground, opacity: 0.7 },
  name: {
    fontSize: 36,
    fontWeight: "bold",
    color: COLORS.foreground,
    marginVertical: 4,
  },
  role: { fontSize: 16, color: "#007AFF", fontWeight: "600" },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.foreground,
    marginBottom: 16,
  },
  grid: { gap: 16 },
  card: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 8,
  },
  cardHighlight: { backgroundColor: "#fff" }, // Destaque para o jogo (branco com texto preto)
  iconBox: { marginBottom: 8 },
  cardTitle: { fontSize: 18, fontWeight: "bold", color: COLORS.foreground },
  cardDesc: { fontSize: 14, color: COLORS.foreground, opacity: 0.6 },
});
