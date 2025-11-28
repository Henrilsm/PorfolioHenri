import { Briefcase, GraduationCap } from "lucide-react-native";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

const COLORS = {
  background: "#0a0a0a",
  foreground: "#ededed",
  cardBg: "rgba(255, 255, 255, 0.06)",
  borderColor: "rgba(255, 255, 255, 0.1)",
  muted: "rgba(237, 237, 237, 0.6)",
  lineColor: "rgba(255, 255, 255, 0.1)",
};

export default function ExperienciaPage() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.pageTitle}>Formação & Carreira</Text>

        {/* Container da Timeline */}
        <View style={styles.timelineContainer}>
          {/* ITEM 1: EDUCAÇÃO (Atual) */}
          <View style={styles.timelineItem}>
            <View style={styles.timelineLeft}>
              <View style={styles.iconCircle}>
                <GraduationCap size={20} color="#fff" />
              </View>
              <View style={styles.line} />
            </View>

            <View style={styles.timelineRight}>
              <Text style={styles.date}>Atualmente (5º Semestre)</Text>
              <Text style={styles.title}>Ciência da Computação</Text>
              <Text style={styles.institution}>
                Universidade Católica de Pernambuco (UNICAP)
              </Text>
              <Text style={styles.description}>
                Foco em algoritmos, estrutura de dados e desenvolvimento de
                software.
              </Text>
            </View>
          </View>

          {/* ITEM 2: FREELANCE / PROJETOS (Exemplo, pode remover se quiser) */}
          <View style={styles.timelineItem}>
            <View style={styles.timelineLeft}>
              <View
                style={[
                  styles.iconCircle,
                  { backgroundColor: "rgba(255,255,255,0.05)" },
                ]}
              >
                <Briefcase size={20} color="#999" />
              </View>
              {/* Sem linha abaixo do último item */}
            </View>

            <View style={styles.timelineRight}>
              <Text style={styles.date}>2024 - Presente</Text>
              <Text style={styles.title}>Desenvolvedor Full Stack</Text>
              <Text style={styles.institution}>Projetos Autônomos</Text>
              <Text style={styles.description}>
                Desenvolvimento de aplicações web e mobile, como o "Escalação
                FC" e portfólio pessoal.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  scrollContent: { padding: 24, paddingTop: 60, paddingBottom: 40 },
  pageTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.foreground,
    marginBottom: 32,
  },

  timelineContainer: { paddingLeft: 8 },
  timelineItem: { flexDirection: "row", marginBottom: 32 },
  timelineLeft: { alignItems: "center", marginRight: 16, width: 40 },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#007AFF", // Destaque azul para educação
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  line: {
    width: 2,
    flex: 1,
    backgroundColor: COLORS.lineColor,
    marginTop: 8,
    minHeight: 40,
  },

  timelineRight: { flex: 1, paddingTop: 4 },
  date: { fontSize: 13, color: "#007AFF", fontWeight: "600", marginBottom: 4 },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.foreground,
    marginBottom: 4,
  },
  institution: {
    fontSize: 15,
    color: COLORS.foreground,
    opacity: 0.8,
    marginBottom: 8,
  },
  description: { fontSize: 14, color: COLORS.muted, lineHeight: 20 },
});
