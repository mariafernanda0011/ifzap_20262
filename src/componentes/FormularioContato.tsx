import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";

import { ContatoType } from "../tipos/types";
import { stylesGlobais } from "../style/themes";

type FormularioProps = {
  contato: ContatoType;
  onSalvar: (contato: ContatoType) => void;
};

export default function FormularioContato({
  contato,
  onSalvar,
}: FormularioProps) {
  const [nome, setNome] = useState(contato.nome);
  const [telefone, setTelefone] = useState(contato.telefone || "");

  function salvar() {
    const contatoAtualizado: ContatoType = {
      ...contato,
      nome,
      telefone,
    };

    onSalvar(contatoAtualizado);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={(novoNome) => setNome(novoNome)}
      />

      <Text style={styles.label}>Telefone:</Text>
      <TextInput
        style={styles.input}
        value={telefone}
        onChangeText={(novoTelefone) => setTelefone(novoTelefone)}
      />

      <TouchableOpacity style={stylesGlobais.btn} onPress={salvar}>
        <Text style={stylesGlobais.textBtn}>SALVAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },

  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },

  input: {
    borderColor: "#000000",
    borderWidth: 2,
    margin: 5,
    marginBottom: 15,
    padding: 8,
  },
});
