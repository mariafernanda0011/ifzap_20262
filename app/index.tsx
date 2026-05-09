import { getContatos } from "@/src/api/contatosApi";
import Avatar from "@/src/componentes/Avatar";
import Contato from "@/src/componentes/Contato";
import { FlatList, View, Button, Text } from "react-native";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ContatoType } from "@/src/tipos/types";


export default function Index() {

  const router = useRouter();
  const [carregando, setCarregando] = useState(false);
  const [contatos, setContatos] = useState < ContatoType[]> ([]);

  async function renderizarLista() {
    setCarregando(true);
    const contatos = await getContatos();
    setContatos(contatos);
    setCarregando(false);
  }

  useEffect(() => {
    renderizarLista();
    setCarregando(false);
  }, []);


  return (
    <View style={{ flex: 1 }}>

      <Button
        title="Adicionar Contato"
        onPress={() => router.navigate("/novo")}
      />

      {/*<Avatar aoTocar={() => alert("Você clicou no avatar!")} />*/}

      {!carregando && (
        <FlatList
          data={contatos}
          renderItem={({ item, index }) => (
          <Contato key={index} contato={item} />
        )} 
        />
      )}
      {carregando && (
        <View>
          <Text>Carregando contatos...</Text>
        </View>
      )}

    </View>
  );
}
