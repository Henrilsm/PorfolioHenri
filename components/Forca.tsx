import React, { useState, useEffect, useCallback, useMemo } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ArrowLeft } from "lucide-react-native";
import { Link } from "expo-router";
import { Svg, Line, Circle } from "react-native-svg";
import ConfettiCannon from "react-native-confetti-cannon";


import { palavras } from "../lib/palavras";
import Teclado from "./Teclado";

const MAX_ERROS = 6;
const COLORS = {
  background: "#ffffff",
  foreground: "#171717",
  grayAlpha200: "rgba(0, 0, 0, 0.08)",
  grayAlpha100: "rgba(0, 0, 0, 0.05)",
};


interface BonecoForcaProps {
  erros: number;
}

const BonecoForca = ({ erros }: BonecoForcaProps) => {
  const strokeColor = COLORS.foreground;


  const commonProps = {
    stroke: strokeColor,
    strokeWidth: "3",
    fill: "transparent",
  };

  return (
    <Svg height="250" width="200" style={{ alignSelf: "center" }}>
      {/* Estrutura da Forca */}
      <Line
        x1="10"
        y1="230"
        x2="150"
        y2="230"
        stroke={strokeColor}
        strokeWidth="4"
      />
      <Line
        x1="50"
        y1="230"
        x2="50"
        y2="20"
        stroke={strokeColor}
        strokeWidth="4"
      />
      <Line
        x1="50"
        y1="20"
        x2="120"
        y2="20"
        stroke={strokeColor}
        strokeWidth="4"
      />
      <Line
        x1="120"
        y1="20"
        x2="120"
        y2="50"
        stroke={strokeColor}
        strokeWidth="4"
      />

      {/* Partes do Boneco */}
      {erros > 0 && <Circle cx="120" cy="70" r="20" {...commonProps} />}
      {erros > 1 && (
        <Line x1="120" y1="90" x2="120" y2="150" {...commonProps} />
      )}
      {erros > 2 && (
        <Line x1="120" y1="110" x2="90" y2="130" {...commonProps} />
      )}
      {erros > 3 && (
        <Line x1="120" y1="110" x2="150" y2="130" {...commonProps} />
      )}
      {erros > 4 && (
        <Line x1="120" y1="150" x2="90" y2="180" {...commonProps} />
      )}
      {erros > 5 && (
        <Line x1="120" y1="150" x2="150" y2="180" {...commonProps} />
      )}
    </Svg>
  );
};

export default function Forca() {
  const [palavra, setPalavra] = useState<string>("");
  const [letrasAdivinhadas, setLetrasAdivinhadas] = useState<string[]>([]);
  const [letrasErradas, setLetrasErradas] = useState<string[]>([]);
  const [jogoFinalizado, setJogoFinalizado] = useState<boolean>(false);
  const [mensagem, setMensagem] = useState<string>("");
  const [venceu, setVenceu] = useState<boolean>(false);

  const selecionarPalavra = () =>
    palavras[Math.floor(Math.random() * palavras.length)];

  const iniciarNovoJogo = useCallback(() => {
    const novaPalavra = selecionarPalavra();
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
    const letraMaiuscula = letra.toUpperCase();
    if (
      jogoFinalizado ||
      letrasAdivinhadas.includes(letraMaiuscula) ||
      letrasErradas.includes(letraMaiuscula)
    )
      return;

    if (palavra.includes(letraMaiuscula)) {
      setLetrasAdivinhadas((prev) => [...prev, letraMaiuscula]);
    } else {
      setLetrasErradas((prev) => [...prev, letraMaiuscula]);
    }
  };

  useEffect(() => {
    if (palavra === "") return;

    const palavraArray = palavra.split("");
    const vitoria = palavraArray.every((letra) =>
      letrasAdivinhadas.includes(letra)
    );

    if (vitoria) {
      setJogoFinalizado(true);
      setMensagem("Parabéns, você venceu!");
      setVenceu(true);
      return;
    }

    if (letrasErradas.length >= MAX_ERROS) {
      setJogoFinalizado(true);
      setMensagem(`Você perdeu! A palavra era: ${palavra}`);
    }
  }, [letrasAdivinhadas, letrasErradas, palavra]);

  const palavraExibida = useMemo(
    () =>
      palavra
        .split("")
        .map((letra) => (letrasAdivinhadas.includes(letra) ? letra : "_"))
        .join(" "),
    [palavra, letrasAdivinhadas]
  );

  return (
    <View style={styles.container}>
      {venceu && (
        <ConfettiCannon
          count={200}
          origin={{ x: -10, y: 0 }}
          fallSpeed={3000}
          autoStart={true}
          fadeOut={true}
        />
      )}

      <Link href="/" asChild>
        <TouchableOpacity style={styles.botaoVoltar}>
          <ArrowLeft size={16} color={COLORS.foreground} />
          <Text style={styles.botaoVoltarText}>Voltar ao Portfólio</Text>
        </TouchableOpacity>
      </Link>

      <Text style={styles.title}>Jogo da Forca</Text>

      <View style={styles.forcaContainer}>
        <BonecoForca erros={letrasErradas.length} />
      </View>

      <Text style={styles.palavra}>{palavraExibida}</Text>

      {jogoFinalizado ? (
        <View style={styles.mensagemFinal}>
          <Text style={styles.mensagemFinalText}>{mensagem}</Text>
          <TouchableOpacity onPress={iniciarNovoJogo} style={styles.botao}>
            <Text style={styles.botaoText}>Jogar Novamente</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Teclado
          onGuess={handleTentativa}
          guessedLetters={[...letrasAdivinhadas, ...letrasErradas]}
        />
      )}

      <View style={styles.infoJogo}>
        <Text style={styles.infoJogoText}>
          Letras erradas: {letrasErradas.join(", ")}
        </Text>
        <Text style={styles.infoJogoText}>
          Tentativas restantes: {MAX_ERROS - letrasErradas.length}
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
    justifyContent: "center",
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: COLORS.foreground,
    marginBottom: 20,
  },
  forcaContainer: {
    height: 250,
    width: 200,
  },
  palavra: {
    fontSize: 28,
    letterSpacing: 6,
    marginVertical: 20,
    fontWeight: "bold",
    color: COLORS.foreground,
    textAlign: "center",
  },
  mensagemFinal: {
    alignItems: "center",
    gap: 16,
    marginTop: 20,
  },
  mensagemFinalText: {
    fontSize: 20,
    textAlign: "center",
    color: COLORS.foreground,
  },
  botao: {
    borderRadius: 128,
    height: 48,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.foreground,
  },
  botaoText: {
    color: COLORS.background,
    fontWeight: "600",
    fontSize: 16,
  },
  infoJogo: {
    marginTop: 30,
    opacity: 0.7,
    alignItems: "center",
  },
  infoJogoText: {
    fontSize: 14,
    color: COLORS.foreground,
  },
  botaoVoltar: {
    position: "absolute",
    top: 50, 
    left: 20,
    zIndex: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    opacity: 0.6,
  },
  botaoVoltarText: {
    fontSize: 14,
    color: COLORS.foreground,
  },
});
