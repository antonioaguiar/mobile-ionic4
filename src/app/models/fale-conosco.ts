import { Photo } from '../models/photo';

export class FaleConosco {
    id: string;
    protocolo: string;
    email: string;
    assunto: string;
    telefone: string;
    mensagem: string;
    icone: string;
    fotos: Array<Photo>;
}


//criar server;
//json-server --watch API/data.json

//criar o arquivo:
// “~API/data.json”


//executar servidor
//json-server --watch API/data.json

