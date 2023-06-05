import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import estilo from "./estilo";

const TelaInicial = () => {
  const [numeroSorteador, setNumeroSorteador] = useState(0);
  const gerarNumero = () => {
    const novoNumero = Math.floor(Math.random() * 101);
    setNumeroSorteador(novoNumero);
  };
  return (
    <View style={estilo.tela}>
      <Text style={estilo.titulo}>
        Toque no botão e veja quem é o vencedor de 1 à 100
      </Text>

      <View style={estilo.boxNumero}>
        <Text style={estilo.numero}>{numeroSorteador}</Text>
      </View>
      <View>
        <Button title="Sortear" onPress={gerarNumero} />
      </View>
    </View>
  );
};

export default TelaInicial;
