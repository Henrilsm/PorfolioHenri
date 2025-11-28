import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  Platform,
} from "react-native";
import { Code2, Package, Cpu, Layers } from "lucide-react-native";

const COLORS = {
  background: "#0a0a0a",
  foreground: "#ededed",
  cardBg: "rgba(255, 255, 255, 0.06)",
  borderColor: "rgba(255, 255, 255, 0.1)",
  muted: "rgba(237, 237, 237, 0.6)",
  accent: "#007AFF",
};

const TECH_STACK = [
  {
    category: "Core",
    icon: <Cpu size={20} color={COLORS.foreground} />,
    items: ["React Native", "Expo SDK 50", "TypeScript", "Node.js"],
  },
  {
    category: "Navegação & UI",
    icon: <Layers size={20} color={COLORS.foreground} />,
    items: [
      "Expo Router (File-based)",
      "React Native SVG",
      "Lucide React Native",
      "StyleSheet API",
    ],
  },
  {
    category: "Funcionalidades",
    icon: <Package size={20} color={COLORS.foreground} />,
    items: [
      "React Native Confetti Cannon",
      "Expo Linking",
      "Expo Haptics",
    ],
  },
];

export default function SobreAppPage() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Code2 size={48} color={COLORS.foreground} />
          <Text style={styles.pageTitle}>Sobre este App</Text>
          <Text style={styles.pageSubtitle}>
            Este portfólio foi construído utilizando as tecnologias mais
            modernas do ecossistema React Native.
          </Text>
        </View>

        {TECH_STACK.map((section, index) => (
          <View key={index} style={styles.section}>
            <View style={styles.sectionHeader}>
              {section.icon}
              <Text style={styles.sectionTitle}>{section.category}</Text>
            </View>

            <View style={styles.grid}>
              {section.items.map((item) => (
                <View key={item} style={styles.techBadge}>
                  <Text style={styles.techText}>{item}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}

        <View style={styles.footer}>
          <Text style={styles.footerText}>Versão 1.0.0</Text>
          <Text style={styles.footerText}>Desenvolvido por Henri Leonardo</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  scrollContent: { padding: 24, paddingTop: 60, paddingBottom: 40 },
  header: { alignItems: "center", marginBottom: 40 },
  pageTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.foreground,
    marginTop: 16,
    marginBottom: 8,
  },
  pageSubtitle: {
    fontSize: 16,
    color: COLORS.muted,
    textAlign: "center",
    lineHeight: 22,
  },

  section: { marginBottom: 32 },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 16,
  },
  sectionTitle: { fontSize: 18, fontWeight: "600", color: COLORS.foreground },

  grid: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  techBadge: {
    backgroundColor: COLORS.cardBg,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
  },
  techText: {
    color: COLORS.foreground,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
  },
  footer: { marginTop: 20, alignItems: "center", opacity: 0.5 },
  footerText: { color: COLORS.foreground, fontSize: 12 },
});
