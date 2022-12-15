import { Trabalhador } from './Trabalhador.js';
export class Junior extends Trabalhador {
    constructor(nome, idade, obrigacoes, formacaoAcademica) {
        super(nome, idade, obrigacoes);
        this._formacaoAcademica = formacaoAcademica;
    }
    get formacaoAcademica() {
        return this._formacaoAcademica;
    }
    set formacaoAcademica(valor) {
        this._formacaoAcademica = valor;
    }
}
