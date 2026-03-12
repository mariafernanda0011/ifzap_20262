import { getContatos } from "@/src/api/contatosApi";
import Contato from "@/src/componentes/Contato";
import { FlatList, View } from "react-native";

export default function Index() {
  const contatos = getContatos();

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={contatos}
        renderItem={({ item, index }) => <Contato key={index} contato={item} />}
      />
    </View>
  );
}
