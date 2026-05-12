import { useState } from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import { useFocusEffect, useRouter } from "expo-router";

import Avatar from "@/src/componentes/Avatar";
import Contato from "@/src/componentes/Contato";
import { ContatoType } from "@/src/tipos/types";
import { getContatos } from "@/src/api/contatosApi";

import { stylesGlobais } from "@/src/style/themes";
import { FontAwesome } from "@expo/vector-icons";

export default function Index() {
  
  const router = useRouter();
  const [carregando, setCarregando] = useState(false);
  const [contatos, setContatos] = useState<ContatoType[]>([]);

  // Função para carregar os contatos da API
  async function renderizarLista() {
    setCarregando(true);
    const contatos = await getContatos();
    setContatos(contatos);
    setCarregando(false);
  }

  // Função para carregar os contatos toda vez que a tela ganhar foco
  useFocusEffect(() => {
    renderizarLista();
  });

  return (
    <View style={{ flex: 1, padding: 8 }}>

      <TouchableOpacity
        style={stylesGlobais.btn}
        onPress={() => router.navigate("/contato/novo")}
      >
        <FontAwesome name="user-plus" size={18} color="white" />
        <Text style={stylesGlobais.textBtn}>ADICIONAR CONTATO</Text>
      </TouchableOpacity>

      {/*<Avatar aoTocar={() => alert("Você clicou no avatar!")} />*/}

      {/* Enquanto carrega */}
      {carregando && (
        <View>
          <Text>Carregando contatos...</Text>
        </View>
      )}

      {/* Quando a lista carregar e tiver contatos */}
      {!carregando && contatos.length > 0  &&(
        <>
          <Text style={stylesGlobais.texto}>LISTA DE CONTATOS</Text>

          <FlatList
            data={contatos}
            renderItem={({ item, index }) => (
              <Contato key={index} contato={item} />
            )}
          />
        </>
      )}

    </View>
  );
}
