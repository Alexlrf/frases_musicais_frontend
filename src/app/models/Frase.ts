import { Artista } from "./Artista";

export interface Frase {
    idFrase: number;
    texto : string;
    nome_musica: string;
    link_video: string;
    artista: Artista;
}
