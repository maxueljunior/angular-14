
export interface Promocao{
    id: number;
    destino: string;
    imagem: string;
    preco: number
}

export interface Estado{
  id: number;
  nome: string;
  sigla: string;
}

export interface Depoimento{
  id: number;
  texto: string;
  autor: string;
  avatar: string;
}
