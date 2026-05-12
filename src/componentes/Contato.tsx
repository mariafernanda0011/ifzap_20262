import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

import Avatar from "./Avatar";
import { ContatoType } from "@/src/tipos/types";
import { FontAwesome } from "@expo/vector-icons";

type ContatoProps = {
  contato: ContatoType;
};

export default function Contato({ contato }: ContatoProps) {

  const router = useRouter();

  return (
    <View style={styles.container}>

      <View style={styles.group1}>
        <Avatar aoTocar={() => alert(contato.nome)} />{" "}
        {/* Padrão de função anônima - Arrow Function  */}
        <View style={styles.content}>
          <Text style={styles.nome}>{contato.nome}</Text>
          <Text style={styles.telefone}>
            {contato.telefone || "Telefone não informado"}
          </Text>
          <Text>{contato.online ? "Online" : "Offline"}</Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => router.navigate(`/contato/${contato.id}`)}>
        <FontAwesome name="pencil-square-o" size={24} color="black" padding={10}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flexDirection: "row",
    padding: 6,
    marginTop: 5,
    backgroundColor: "#dfdfdf5e",
    borderRadius: 5,
    justifyContent: "space-between",
    alignItems: "center",
  },

  group1: {
    flexDirection: "row",
    gap: 10,
  },

  content: {
    justifyContent: "center",
  },

  nome: {
    fontSize: 20,
    fontWeight: "bold",
  },

  telefone: {
    fontSize: 18,
    color: "#919191ff",
  },

});
