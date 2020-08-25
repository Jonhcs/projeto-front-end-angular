import { Profissao } from './Profissao';
import { Telefone } from './telefone';
export class Usuario {
    id: number;
    login: String;
    senha: String;
    nome: String;
    cpf: String;
    telefones: Array<Telefone>;
    dataNascimento: String;
    profissao: Profissao = new Profissao;
    salario: number;
}
