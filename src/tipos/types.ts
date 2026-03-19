{/* Considerasse que essas propriedades sejam constantes, 
  sendo assim não é boa prática alterá-las dentro das funções */}

export type ContatoType = {
  id: number;
  imagem: string;
  nome: string;
  telefone?: string;
  online: boolean;
};
