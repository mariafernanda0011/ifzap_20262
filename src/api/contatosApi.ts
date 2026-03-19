import { ContatoType } from "../tipos/types";

const contatos: ContatoType[] = [];
let proxId = 1;

export function getContatos(): ContatoType[] {
  return contatos;
}

export async function criarContato(nome: string, telefone?: string){
  
  //throw new Error("Erro ao criar contato");

  const novoContato: ContatoType = {
    id: proxId,
    imagem: "https://i.pinimg.com/474x/57/40/08/5740086ce904a58a1ad9621f65786b93.jpg?nii=t",
    nome, 
    telefone,
    online: false,
  };

  contatos.push(novoContato);
  proxId++;
  console.log("A função 'criarContato' foi executada!");
}