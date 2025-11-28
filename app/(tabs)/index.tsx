import { Link } from "expo-router";
import { ArrowRight, Github, Mail } from "lucide-react-native";
import React from "react";
import {
  Linking,
  Platform,
  SafeAreaView,
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
  cardBackground: "rgba(255, 255, 255, 0.06)",
  borderColor: "rgba(255, 255, 255, 0.145)",
  muted: "rgba(237, 237, 237, 0.7)",
};

const handleOpenLink = (url: string) => {
  Linking.openURL(url);
};

export default function HomePage() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* StatusBar ajustada para texto claro em fundo escuro */}
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.h1}>Henri Leonardo</Text>
          <Text style={styles.subtitle}>
            Desenvolvedor Back-end | Apaixonado por tecnologia e inovação
          </Text>

          <View style={styles.socialLinks}>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => handleOpenLink("https://github.com/Henrilsm")}
            >
              <Github size={20} color={COLORS.foreground} />
              <Text style={styles.socialText}>GitHub</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => handleOpenLink("mailto:henrilsm@gmail.com")}
            >
              <Mail size={20} color={COLORS.foreground} />
              <Text style={styles.socialText}>Email</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* SOBRE MIM */}
        <View style={styles.section}>
          <Text style={styles.h2}>Sobre Mim</Text>
          <Text style={styles.paragraph}>
            Sou um desenvolvedor de software backend com foco na construção de
            sistemas robustos e escaláveis. Tenho experiência com o ecossistema
            Node.js, Python e Java, incluindo tecnologias como Express e bancos
            de dados como SQL. Atualmente, estou buscando novas oportunidades
            para aplicar minhas habilidades e contribuir para projetos
            inovadores.
          </Text>
        </View>

        {/* EDUCAÇÃO */}
        <View style={styles.section}>
          <Text style={styles.h2}>Educação</Text>
          <View style={styles.job}>
            <Text style={styles.h3}>Ciência da Computação</Text>
            <Text style={styles.jobInfo}>
              Universidade Católica de Pernambuco (UNICAP) | Cursando atualmente
              no 5º semestre.
            </Text>
          </View>
        </View>

        {/* PROJETOS */}
        <View style={styles.section}>
          <Text style={styles.h2}>Projetos</Text>
          <View style={styles.projectGrid}>
            {/* Card 1 - Jogo da Forca */}
            <View style={styles.projectCard}>
              <Text style={styles.h3}>Jogo da Forca</Text>
              <Text style={styles.paragraph}>
                Clássico jogo da forca implementado originalmente em Next.js e
                agora portado para Mobile.
              </Text>
              <Link href="/forca" asChild>
                <TouchableOpacity style={styles.projectLink}>
                  <Text style={styles.linkText}>Ver Projeto</Text>
                  <ArrowRight size={16} color={COLORS.foreground} />
                </TouchableOpacity>
              </Link>
            </View>

            {/* Card 2 - Escalação FC */}
            <View style={styles.projectCard}>
              <Text style={styles.h3}>Escalação FC</Text>
              <Text style={styles.paragraph}>
                Site web desenvolvido para que fãs de futebol possam dar uma de
                treinador e esboçar uma escalação.
              </Text>
              <TouchableOpacity
                style={styles.projectLink}
                onPress={() =>
                  handleOpenLink("https://site-grupo-two.vercel.app/")
                }
              >
                <Text style={styles.linkText}>Ver Projeto</Text>
                <ArrowRight size={16} color={COLORS.foreground} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* HABILIDADES */}
        <View style={styles.section}>
          <Text style={styles.h2}>Habilidades</Text>

          <Text style={styles.subheading}>Técnicas</Text>
          <View style={styles.skillsGrid}>
            {[
              "JavaScript",
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "SQL",
              "CSS3",
              "HTML5",
              "Python",
              "GitHub",
              "C",
              "Java",
            ].map((skill) => (
              <View key={skill} style={styles.skillBadge}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>

          <Text style={[styles.subheading, { marginTop: 16 }]}>Idiomas</Text>
          <View style={styles.skillsGrid}>
            <View style={styles.skillBadge}>
              <Text style={styles.skillText}>Português (Nativo)</Text>
            </View>
            <View style={styles.skillBadge}>
              <Text style={styles.skillText}>Inglês (Fluente)</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  scrollContainer: {
    padding: 24,
    paddingBottom: 50,
  },
  header: {
    marginBottom: 48,
    gap: 8,
  },
  h1: {
    fontSize: 32,
    fontWeight: "700",
    color: COLORS.foreground,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.muted,
    lineHeight: 24,
  },
  socialLinks: {
    flexDirection: "row",
    gap: 24,
    marginTop: 16,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  socialText: {
    fontSize: 14,
    color: COLORS.foreground,
  },
  section: {
    marginBottom: 48,
  },
  h2: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.foreground,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderColor,
    paddingBottom: 8,
    marginBottom: 16,
  },
  h3: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.foreground,
    marginBottom: 4,
  },
  paragraph: {
    fontSize: 16,
    color: COLORS.muted,
    lineHeight: 24,
  },
  job: {
    gap: 4,
  },
  jobInfo: {
    fontSize: 14,
    color: COLORS.muted,
  },
  projectGrid: {
    gap: 16,
  },
  projectCard: {
    backgroundColor: COLORS.cardBackground,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    borderRadius: 8,
    padding: 16,
    gap: 8,
  },
  projectLink: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 8,
  },
  linkText: {
    fontSize: 14,
    fontWeight: "500",
    color: COLORS.foreground,
  },
  subheading: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.foreground,
    marginBottom: 8,
    opacity: 0.8,
  },
  skillsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  skillBadge: {
    backgroundColor: COLORS.borderColor,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  skillText: {
    fontSize: 13,
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
    color: COLORS.foreground,
  },
});
