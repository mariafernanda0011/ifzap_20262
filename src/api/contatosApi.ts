import { ContatoType } from "../tipos/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Criar contatos
export async function criarContato(nome: string, telefone?: string) {

  //throw new Error("Erro ao criar contato");
  //await new Promise((resolve) => setTimeout(resolve, 3000));

  const contatos = await getContatos(); // Carrega a lista atual de contatos para garantir que o novo contato seja adicionado à lista existente
  const proxId = contatos.length + 1; // Gera um ID para o novo contato com base no tamanho atual da lista de contatos 

  // Cria um novo objeto de contato com os dados fornecidos e um ID gerado
  const novoContato: ContatoType = {
    id: proxId,
    imagem: "https://i.pinimg.com/474x/57/40/08/5740086ce904a58a1ad9621f65786b93.jpg?nii=t",
    nome,
    telefone,
    online: false,
  };

  contatos.push(novoContato); // Adiciona o novo contato à lista de contatos existente
  await AsyncStorage.setItem("contatos", JSON.stringify(contatos)); // Salva a lista atualizada de contatos no AsyncStorage
  console.log("A função 'criarContato' foi executada!"); // Log para verificar se a função foi chamada
}

// Renderizar lista de contatos
export async function getContatos(): Promise<ContatoType[]> {
  // await AsyncStorage.clear(); // Comando para limpar o AsyncStorage - útil para testes

  //await new Promise((resolve) => setTimeout(resolve, 3000));
  const contatosString = await AsyncStorage.getItem("contatos"); // Busca a string armazenada no AsyncStorage com a chave "contatos"
  const contatos = JSON.parse(contatosString || "[]") as ContatoType[]; // Converte a string JSON de volta para um array de objetos do tipo ContatoType, se não houver nada armazenado, retorna um array vazio
  return contatos; // Retorna o array de contatos
}

// Buscar contato específico
export async function getContato(id: number): Promise<ContatoType> {

  const contatos = await getContatos(); // Carrega a lista atual de contatos
  const contato = contatos.find((c) => c.id === id); // Encontra o contato com o ID correspondente

  // Se o contato não for encontrado, lança um erro
  if (!contato) {
    throw new Error("Contato não encontrado.");
  }

  return contato;  // Retorna o contato encontrado
}

// Salvar alterações feitas no contato
export async function atualizarContato(contatoAtualizado: ContatoType): Promise<void> {
  
  const contatos = await getContatos(); // Carrega a lista atual de contatos
  const indice = contatos.findIndex((c) => c.id === contatoAtualizado.id); // Encontra o índice do contato a ser atualizado

  // Se o contato não for encontrado, lança um erro
  if (indice === -1) {
    throw new Error("Contato não encontrado.");
  }

  // Atualiza o contato na lista
  contatos[indice] = contatoAtualizado;

  // Salva a lista atualizada de volta no AsyncStorage
  await AsyncStorage.setItem(
    "contatos",
    JSON.stringify(contatos)
  );

}

