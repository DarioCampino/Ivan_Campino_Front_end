export interface Comentario{
    id?: number; //el ? es para decir que es opcional
    titulo: string;
    autor: string;
    texto: string;
    fechaCreacion: Date;
}