import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [letraAtual, setLetraAtual] = useState("a - A (â)");

  const letras = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const letrasExibe = [
    "a - A (â)",
    "b - B (bê)",
    "c - C (cê)",
    "d - D (dê)",
    "e - E (é)",
    "f - F (éfe)",
    "g - G (gê)",
    "h - H (agá)",
    "i - I (i)",
    "j - J (jóta)",
    "k - K (cá)",
    "l - L (éle)",
    "m - M (ême)",
    "n - N (êne)",
    "o - O (ó)",
    "p - P (pê)",
    "q - Q (quê)",
    "r - R (érre)",
    "s - S (ésse)",
    "t - T (tê)",
    "u - U (u)",
    "v - V (vê)",
    "w - W (dáblio)",
    "x - X (xis)",
    "y - Y (ípsilon)",
    "z - Z (zê)",
  ];

  function executar(l) {
    setLetraAtual(l);
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={{ color: "#fff", marginBottom: 16, fontSize: 42 }}>
          {letraAtual}
        </Text>
        <View style={styles.containerLetra}>
          {letras.map((letra) => (
            <View style={styles.buttonContainer} key={letra}>
              <Button
                color="#8257e5"
                title={letra}
                onPress={() => executar(letrasExibe[letras.indexOf(letra)])}
              />
            </View>
          ))}
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121214",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  containerLetra: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  buttonContainer: {
    width: "30%",
    padding: 5,
    borderRadius: 20,
    color: "#fff",
  },
});
