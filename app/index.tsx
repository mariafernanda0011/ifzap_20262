import { getContatos } from "@/src/api/contatosApi";
import Contato from "@/src/componentes/Contato";
import { FlatList } from "react-native";

export default function Index() {
  const contatos = getContatos();

  return (
    // <ScrollView>
    //   {contatos.map((item, index) => (
    //     <Contato key={index} contato={item} />
    //   ))}
    // </ScrollView>

    <FlatList
      data={contatos}
      renderItem={({ item, index }) => <Contato key={index} contato={item} />}
    />
  );
}
