import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  Platform,
} from "react-native";

const COLORS = {
  background: "#0a0a0a",
  foreground: "#ededed",
  cardBg: "rgba(255, 255, 255, 0.06)",
  borderColor: "rgba(255, 255, 255, 0.1)",
  muted: "rgba(237, 237, 237, 0.6)",
  accent: "#007AFF",
};

const TECH_SKILLS = [
  "JavaScript",
  "React",
  "Next.js",
  "React Native",
  "Expo",
  "TypeScript",
  "Node.js",
  "SQL",
  "CSS3",
  "HTML5",
  "Python",
  "GitHub",
  "C",
  "Java",
];

export default function SobrePage() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerProfile}>
          <View style={styles.initialsContainer}>
            <Text style={styles.initialsText}>HM</Text>
          </View>

          <Text style={styles.pageTitle}>Henri Leonardo</Text>
          <Text style={styles.role}>Desenvolvedor Back-end</Text>
        </View>
        {/* -------------------------------- */}

        {/* TEXTO DE APRESENTAÇÃO */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sobre Mim</Text>
          <Text style={styles.paragraph}>
            Sou um desenvolvedor de software backend com foco na construção de
            sistemas robustos e escaláveis. Tenho experiência com o ecossistema
            Node.js, Python e Java, incluindo tecnologias como Express e bancos
            de dados como SQL.
          </Text>
          <Text style={[styles.paragraph, { marginTop: 16 }]}>
            Atualmente, estou buscando novas oportunidades para aplicar minhas
            habilidades e contribuir para projetos inovadores.
          </Text>
        </View>

        {/* HABILIDADES TÉCNICAS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Habilidades Técnicas</Text>
          <View style={styles.skillsContainer}>
            {TECH_SKILLS.map((skill) => (
              <View key={skill} style={styles.skillBadge}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* IDIOMAS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Idiomas</Text>
          <View style={styles.skillsContainer}>
            <View style={styles.skillBadge}>
              <Text style={styles.skillText}>Português (Nativo)</Text>
            </View>
            <View style={styles.skillBadge}>
              <Text style={styles.skillText}>Inglês (Fluente)</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  scrollContent: { padding: 24, paddingTop: 40, paddingBottom: 40 },
  headerProfile: { alignItems: "center", marginBottom: 40 },
  initialsContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "rgba(255,255,255,0.08)",
    borderWidth: 2,
    borderColor: COLORS.borderColor,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  initialsText: {
    fontSize: 36,
    fontWeight: "bold",
    color: COLORS.foreground,
    letterSpacing: 1,
  },

  pageTitle: { fontSize: 28, fontWeight: "bold", color: COLORS.foreground },
  role: { fontSize: 16, color: COLORS.muted, marginTop: 4 },

  section: { marginBottom: 32 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.foreground,
    marginBottom: 16,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.accent,
    paddingLeft: 12,
  },
  paragraph: { fontSize: 16, color: COLORS.muted, lineHeight: 24 },

  skillsContainer: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  skillBadge: {
    backgroundColor: COLORS.cardBg,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
  },
  skillText: {
    color: COLORS.foreground,
    fontSize: 14,
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
    fontWeight: "500",
  },
});
