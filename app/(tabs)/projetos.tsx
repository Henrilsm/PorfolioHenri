import { Link } from "expo-router";
import { ArrowRight, Gamepad2, Github, Monitor } from "lucide-react-native";
import React from "react";
import {
  Linking,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const COLORS = {
  background: "#0a0a0a",
  foreground: "#ededed",
  cardBg: "rgba(255, 255, 255, 0.06)",
  borderColor: "rgba(255, 255, 255, 0.1)",
  muted: "rgba(237, 237, 237, 0.6)",
  accent: "#ffffff",
};

export default function ProjetosPage() {
  const openLink = (url: string) => Linking.openURL(url);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.pageTitle}>Meus Projetos</Text>
        <Text style={styles.pageSubtitle}>
          Aplicações desenvolvidas com foco em performance e experiência do
          usuário.
        </Text>

        <View style={styles.grid}>
          {/* --- PROJETO 1: JOGO DA FORCA (Interno) --- */}
          <Link href="/forca" asChild>
            <TouchableOpacity style={styles.card}>
              <View style={styles.cardHeader}>
                <View style={styles.iconContainer}>
                  <Gamepad2 size={24} color={COLORS.foreground} />
                </View>
                <View>
                  <Text style={styles.cardTitle}>Jogo da Forca</Text>
                  <Text style={styles.cardTag}>Mobile • React Native</Text>
                </View>
              </View>

              <Text style={styles.cardDescription}>
                Clássico jogo da forca portado do Next.js para Mobile. Utiliza
                animações SVG e lógica de estado complexa.
              </Text>

              <View style={styles.cardFooter}>
                <Text style={styles.linkText}>Jogar Agora</Text>
                <ArrowRight size={16} color={COLORS.accent} />
              </View>
            </TouchableOpacity>
          </Link>

          {/* --- PROJETO 2: ESCALAÇÃO FC (Externo) --- */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => openLink("https://site-grupo-two.vercel.app/")}
          >
            <View style={styles.cardHeader}>
              <View style={styles.iconContainer}>
                <Monitor size={24} color={COLORS.foreground} />
              </View>
              <View>
                <Text style={styles.cardTitle}>Escalação FC</Text>
                <Text style={styles.cardTag}>Web • Next.js</Text>
              </View>
            </View>

            <Text style={styles.cardDescription}>
              Plataforma interativa para fãs de futebol criarem e compartilharem
              suas escalações táticas ideais.
            </Text>

            <View style={styles.cardFooter}>
              <Text style={styles.linkText}>Acessar Site</Text>
              <ArrowRight size={16} color={COLORS.accent} />
            </View>
          </TouchableOpacity>

          {/* --- BOTÃO GITHUB --- */}
          <TouchableOpacity
            style={[
              styles.card,
              { alignItems: "center", justifyContent: "center", gap: 12 },
            ]}
            onPress={() => openLink("https://github.com/Henrilsm")}
          >
            <Github size={32} color={COLORS.foreground} />
            <Text style={styles.cardTitle}>Ver mais no GitHub</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  scrollContent: { padding: 24, paddingTop: 60, paddingBottom: 40 },
  pageTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: COLORS.foreground,
    marginBottom: 8,
  },
  pageSubtitle: {
    fontSize: 16,
    color: COLORS.muted,
    marginBottom: 32,
    lineHeight: 22,
  },
  grid: { gap: 16 },
  card: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
  },
  cardHeader: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 12,
    alignItems: "center",
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.05)",
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: { fontSize: 18, fontWeight: "bold", color: COLORS.foreground },
  cardTag: { fontSize: 12, color: COLORS.muted, marginTop: 2 },
  cardDescription: {
    fontSize: 14,
    color: COLORS.muted,
    lineHeight: 20,
    marginBottom: 16,
  },
  cardFooter: { flexDirection: "row", alignItems: "center", gap: 8 },
  linkText: { fontSize: 14, fontWeight: "600", color: COLORS.accent },
});
