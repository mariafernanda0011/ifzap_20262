import { getContatos } from "@/src/api/contatosApi";
import Avatar from "@/src/componentes/Avatar";
import Contato from "@/src/componentes/Contato";
import { FlatList, View, Button } from "react-native";


function funcaoTeste1() {
  alert("Função teste 1 executada!");
}

export default function Index() {
  const contatos = getContatos();

  return (
    <View style={{ flex: 1 }}>

      <Button
        title="Adicionar Contato"
        onPress={funcaoTeste1}
      />

      <Avatar aoTocar={() => alert("Você clicou no avatar!")} />

      <FlatList
        data={contatos}
        renderItem={({ item, index }) => <Contato key={index} contato={item} />} />

    </View>
  );
}
