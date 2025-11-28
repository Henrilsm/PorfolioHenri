import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Linking,
  Platform,
  StatusBar,
} from "react-native";
import { Link } from "expo-router";
import {
  Gamepad2,
  Monitor,
  Smartphone,
  Sparkles,
  ArrowRight,
  Github,
  ExternalLink,
} from "lucide-react-native";

const COLORS = {
  background: "#0a0a0a",
  foreground: "#ededed",
  cardBg: "rgba(255, 255, 255, 0.06)",
  borderColor: "rgba(255, 255, 255, 0.1)",
  muted: "rgba(237, 237, 237, 0.6)",
  accent: "#ffffff",
  blue: "#007AFF",
};

export default function ProjetosPage() {
  const openLink = (url: string) => Linking.openURL(url);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.pageTitle}>Meus Projetos</Text>
        <Text style={styles.pageSubtitle}>
          Aplicações reais desenvolvidas com foco em design, performance e
          solução de problemas.
        </Text>

        <View style={styles.grid}>
          {/* --- PROJETO 1: JOGO DA FORCA (Interno) --- */}
          <Link href="/forca" asChild>
            <TouchableOpacity style={styles.card}>
              <View style={styles.cardHeader}>
                <View
                  style={[
                    styles.iconContainer,
                    { backgroundColor: "rgba(16, 185, 129, 0.1)" },
                  ]}
                >
                  <Gamepad2 size={24} color="#10B981" />
                </View>
                <View>
                  <Text style={styles.cardTitle}>Jogo da Forca</Text>
                  <Text style={styles.cardTag}>Mobile • React Native</Text>
                </View>
              </View>

              <Text style={styles.cardDescription}>
                Versão mobile do clássico jogo, com animações em SVG e lógica de
                estado otimizada.
              </Text>

              <View style={styles.cardFooter}>
                <Text style={styles.linkText}>Jogar Agora</Text>
                <ArrowRight size={16} color={COLORS.accent} />
              </View>
            </TouchableOpacity>
          </Link>

          {/* --- PROJETO 2: ESCALAÇÃO FC (Web & Mobile) --- */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View
                style={[
                  styles.iconContainer,
                  { backgroundColor: "rgba(59, 130, 246, 0.1)" },
                ]}
              >
                <View style={{ flexDirection: "row" }}>
                  <Monitor
                    size={16}
                    color="#3B82F6"
                    style={{ marginRight: -4 }}
                  />
                  <Smartphone
                    size={16}
                    color="#3B82F6"
                    style={{ marginTop: 4 }}
                  />
                </View>
              </View>
              <View>
                <Text style={styles.cardTitle}>Escalação FC</Text>
                <Text style={styles.cardTag}>Full Stack • Web & Mobile</Text>
              </View>
            </View>

            <Text style={styles.cardDescription}>
              Plataforma para fãs de futebol escalarem seus times. Agora
              disponível em versão Web (Next.js) e App Mobile (React Native).
            </Text>

            {/* Dois Botões de Ação */}
            <View style={styles.multiButtonContainer}>
              {/* Botão Web */}
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => openLink("https://site-grupo-two.vercel.app/")}
              >
                <Monitor size={14} color={COLORS.background} />
                <Text style={styles.actionButtonText}>Site</Text>
              </TouchableOpacity>

              {/* Botão Mobile */}
              <TouchableOpacity
                style={[
                  styles.actionButton,
                  {
                    backgroundColor: "rgba(255,255,255,0.1)",
                    borderWidth: 1,
                    borderColor: "rgba(255,255,255,0.2)",
                  },
                ]}
                onPress={() =>
                  openLink(
                    "https://expo.dev/preview/update?message=Projeto+Pronto&updateRuntimeVersion=1.0.0&createdAt=2025-11-25T11%3A15%3A58.033Z&slug=exp&projectId=390deff1-c915-4fcf-a0ae-2c679837c5ea&group=341fbd52-64fe-4034-b090-56c24dd00e69"
                  )
                }
              >
                <Smartphone size={14} color={COLORS.foreground} />
                <Text
                  style={[
                    styles.actionButtonText,
                    { color: COLORS.foreground },
                  ]}
                >
                  App (Expo)
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* --- PROJETO 3: AGAPE ESSENCE --- */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => openLink("https://agape-essence.vercel.app/")}
          >
            <View style={styles.cardHeader}>
              <View
                style={[
                  styles.iconContainer,
                  { backgroundColor: "rgba(236, 72, 153, 0.1)" },
                ]}
              >
                <Sparkles size={24} color="#EC4899" />
              </View>
              <View>
                <Text style={styles.cardTitle}>Agape Essence</Text>
                <Text style={styles.cardTag}>Web Institucional • React</Text>
              </View>
            </View>

            <Text style={styles.cardDescription}>
              Website moderno desenvolvido para uma nova clínica de estética,
              focando em elegância e apresentação de serviços.
            </Text>

            <View style={styles.cardFooter}>
              <Text style={styles.linkText}>Visitar Site</Text>
              <ExternalLink size={16} color={COLORS.accent} />
            </View>
          </TouchableOpacity>

          {/* --- LINK GITHUB --- */}
          <TouchableOpacity
            style={[
              styles.card,
              {
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                paddingVertical: 24,
              },
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
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: { fontSize: 18, fontWeight: "bold", color: COLORS.foreground },
  cardTag: { fontSize: 12, color: COLORS.muted, marginTop: 2 },
  cardDescription: {
    fontSize: 14,
    color: COLORS.muted,
    lineHeight: 20,
    marginBottom: 20,
  }, 

  cardFooter: { flexDirection: "row", alignItems: "center", gap: 8 },
  linkText: { fontSize: 14, fontWeight: "600", color: COLORS.accent },

  multiButtonContainer: { flexDirection: "row", gap: 12 },
  actionButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.foreground,
    paddingVertical: 10,
    borderRadius: 8,
    gap: 8,
  },
  actionButtonText: {
    fontSize: 13,
    fontWeight: "bold",
    color: COLORS.background,
  },
});
