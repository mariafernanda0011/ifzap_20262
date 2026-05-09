import { ContatoType } from "../tipos/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

//const contatos: ContatoType[] = [];
//let proxId = 1;

export async function getContatos(): Promise<ContatoType[]> {
  //await new Promise((resolve) => setTimeout(resolve, 3000));
  const contatosString = await AsyncStorage.getItem("contatos");
  const contatos = JSON.parse(contatosString || "[]") as ContatoType[];
  return contatos;
}

export async function criarContato(nome: string, telefone?: string) {

  //throw new Error("Erro ao criar contato");
  //await new Promise((resolve) => setTimeout(resolve, 3000));

  const contatos = await getContatos();
  const proxId = contatos.length + 1;

  const novoContato: ContatoType = {
    id: proxId,
    imagem: "https://i.pinimg.com/474x/57/40/08/5740086ce904a58a1ad9621f65786b93.jpg?nii=t",
    nome,
    telefone,
    online: false,
  };

  contatos.push(novoContato);
  await AsyncStorage.setItem("contatos", JSON.stringify(contatos));
  console.log("A função 'criarContato' foi executada!");
}
