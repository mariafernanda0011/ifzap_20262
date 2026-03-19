import { getContatos } from "@/src/api/contatosApi";
import Avatar from "@/src/componentes/Avatar";
import Contato from "@/src/componentes/Contato";
import { FlatList, View, Button } from "react-native";
import {useRouter} from "expo-router";


function funcaoTeste1() {
  alert("Função teste 1 executada!");
}

export default function Index() {
  const contatos = getContatos();
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>

      <Button
        title="Adicionar Contato" 
        onPress={() => router.navigate("/novo")}
      />

      {/*<Avatar aoTocar={() => alert("Você clicou no avatar!")} />*/}

      <FlatList
        data={contatos}
        renderItem={({ item, index }) => <Contato key={index} contato={item} />} />

    </View>
  );
}
