import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
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
      setMensagem(`Game Over! Era: ${palavra}`);
    }
  }, [letrasAdivinhadas, letrasErradas, palavra]);

  const palavraExibida = useMemo(
    () =>
      palavra
        .split("")
        .map((l) => (letrasAdivinhadas.includes(l) ? l : "_"))
        .join("  "),
    [palavra, letrasAdivinhadas]
  );

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
        <Text style={styles.palavra}>{palavraExibida}</Text>
      </View>

      {jogoFinalizado ? (
        <View style={styles.resultContainer}>
          <Text
            style={[
              styles.resultText,
              { color: venceu ? "#4ADE80" : "#EF4444" },
            ]}
          >
            {mensagem}
          </Text>
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
  header: { alignItems: "center", marginBottom: 20 },
  title: { fontSize: 28, fontWeight: "bold", color: COLORS.foreground },
  subtitle: { fontSize: 14, color: COLORS.muted },

  gameArea: { alignItems: "center", marginBottom: 20 },
  palavra: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.foreground,
    marginTop: 20,
    letterSpacing: 2,
  },

  resultContainer: {
    alignItems: "center",
    marginVertical: 20,
    width: "100%",
    minHeight: 120,
    justifyContent: "center",
  },
  resultText: { fontSize: 22, fontWeight: "bold", marginBottom: 16 },
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
