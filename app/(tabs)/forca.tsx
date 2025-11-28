import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
} from "react-native";
import { Svg, Line, Circle } from "react-native-svg";
import ConfettiCannon from "react-native-confetti-cannon";

import { palavras } from "../../lib/palavras";
import Teclado from "../../components/Teclado";

const MAX_ERROS = 6;
const COLORS = {
  background: "#0a0a0a",
  foreground: "#ededed",
  accent: "#007AFF",
  muted: "rgba(237, 237, 237, 0.6)",
  cardBg: "rgba(255, 255, 255, 0.06)",
  success: "#4ADE80", 
  error: "#EF4444", 
  white: "#FFFFFF", 
};

const BonecoForca = ({ erros }: { erros: number }) => {
  const strokeColor = COLORS.foreground;
  const commonProps = {
    stroke: strokeColor,
    strokeWidth: "3",
    fill: "transparent",
  };

  return (
    <Svg height="200" width="160" style={{ alignSelf: "center" }}>
      <Line
        x1="10"
        y1="190"
        x2="100"
        y2="190"
        stroke={strokeColor}
        strokeWidth="4"
      />
      <Line
        x1="55"
        y1="190"
        x2="55"
        y2="10"
        stroke={strokeColor}
        strokeWidth="4"
      />
      <Line
        x1="55"
        y1="10"
        x2="120"
        y2="10"
        stroke={strokeColor}
        strokeWidth="4"
      />
      <Line
        x1="120"
        y1="10"
        x2="120"
        y2="40"
        stroke={strokeColor}
        strokeWidth="4"
      />

      {erros > 0 && <Circle cx="120" cy="60" r="15" {...commonProps} />}
      {erros > 1 && (
        <Line x1="120" y1="75" x2="120" y2="130" {...commonProps} />
      )}
      {erros > 2 && <Line x1="120" y1="90" x2="95" y2="110" {...commonProps} />}
      {erros > 3 && (
        <Line x1="120" y1="90" x2="145" y2="110" {...commonProps} />
      )}
      {erros > 4 && (
        <Line x1="120" y1="130" x2="100" y2="160" {...commonProps} />
      )}
      {erros > 5 && (
        <Line x1="120" y1="130" x2="140" y2="160" {...commonProps} />
      )}
    </Svg>
  );
};

export default function ForcaTab() {
  const [palavra, setPalavra] = useState<string>("");
  const [letrasAdivinhadas, setLetrasAdivinhadas] = useState<string[]>([]);
  const [letrasErradas, setLetrasErradas] = useState<string[]>([]);
  const [jogoFinalizado, setJogoFinalizado] = useState<boolean>(false);
  const [mensagem, setMensagem] = useState<string>("");
  const [venceu, setVenceu] = useState<boolean>(false);

  const iniciarNovoJogo = useCallback(() => {
    const novaPalavra = palavras[Math.floor(Math.random() * palavras.length)];
    setPalavra(novaPalavra.toUpperCase());
    setLetrasAdivinhadas([]);
    setLetrasErradas([]);
    setJogoFinalizado(false);
    setMensagem("");
    setVenceu(false);
  }, []);

  useEffect(() => {
    iniciarNovoJogo();
  }, [iniciarNovoJogo]);

  const handleTentativa = (letra: string) => {
    const l = letra.toUpperCase();
    if (
      jogoFinalizado ||
      letrasAdivinhadas.includes(l) ||
      letrasErradas.includes(l)
    )
      return;

    if (palavra.includes(l)) {
      setLetrasAdivinhadas((prev) => [...prev, l]);
    } else {
      setLetrasErradas((prev) => [...prev, l]);
    }
  };

  useEffect(() => {
    if (!palavra) return;
    const vitoria = palavra
      .split("")
      .every((l) => letrasAdivinhadas.includes(l));

    if (vitoria) {
      setJogoFinalizado(true);
      setMensagem("Vitória!");
      setVenceu(true);
    } else if (letrasErradas.length >= MAX_ERROS) {
      setJogoFinalizado(true);
      setMensagem(`Game Over! A palavra era:`);
    }
  }, [letrasAdivinhadas, letrasErradas, palavra]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />

      {venceu && (
        <ConfettiCannon
          count={200}
          origin={{ x: -10, y: 0 }}
          fallSpeed={3000}
          autoStart={true}
          fadeOut={true}
        />
      )}

      <View style={styles.header}>
        <Text style={styles.title}>Jogo da Forca</Text>
        <Text style={styles.subtitle}>Adivinhe a tecnologia</Text>
      </View>

      <View style={styles.gameArea}>
        <BonecoForca erros={letrasErradas.length} />
        
        <View style={styles.palavraContainer}>
          {palavra.split("").map((letra, index) => {
            const descoberta =
              letrasAdivinhadas.includes(letra) || jogoFinalizado;
            const errouEssa =
              jogoFinalizado && !letrasAdivinhadas.includes(letra);

            return (
              <View key={index} style={styles.letraBox}>
                <Text
                  style={[
                    styles.letraTexto,
                    errouEssa && { color: COLORS.error, opacity: 0.8 }, // Mostra o que errou em vermelho
                  ]}
                >
                  {descoberta ? letra : ""}
                </Text>
              </View>
            );
          })}
        </View>
      </View>

      {jogoFinalizado ? (
        <View style={styles.resultContainer}>
          <Text
            style={[
              styles.resultText,
              { color: venceu ? COLORS.success : COLORS.error },
            ]}
          >
            {mensagem}
          </Text>
          {!venceu && <Text style={styles.palavraRevelada}>{palavra}</Text>}

          <TouchableOpacity
            onPress={iniciarNovoJogo}
            style={styles.restartButton}
          >
            <Text style={styles.restartText}>Jogar Novamente</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Teclado
          onGuess={handleTentativa}
          guessedLetters={[...letrasAdivinhadas, ...letrasErradas]}
        />
      )}

      <View style={styles.stats}>
        <Text style={styles.statsText}>
          Erros: {letrasErradas.length} / {MAX_ERROS}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: { alignItems: "center", marginBottom: 10 },
  title: { fontSize: 28, fontWeight: "bold", color: COLORS.foreground },
  subtitle: { fontSize: 14, color: COLORS.muted },

  gameArea: { alignItems: "center", marginBottom: 20, width: "100%" },

  palavraContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 8,
    marginTop: 30,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  letraBox: {
    width: 40,
    height: 50,
    borderBottomWidth: 3,
    borderColor: COLORS.foreground,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.03)",
    borderRadius: 4,
  },
  letraTexto: {
    fontSize: 32,
    fontWeight: "bold",
    color: COLORS.white,
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
  },

  resultContainer: {
    alignItems: "center",
    marginVertical: 20,
    width: "100%",
    minHeight: 120,
    justifyContent: "center",
  },
  resultText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  palavraRevelada: {
    fontSize: 20,
    color: COLORS.foreground,
    marginBottom: 16,
    fontWeight: "bold",
  },

  restartButton: {
    backgroundColor: COLORS.foreground,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
  },
  restartText: { color: COLORS.background, fontWeight: "bold" },

  stats: { marginTop: "auto", marginBottom: 20 },
  statsText: { color: COLORS.muted, fontSize: 14 },
});
