import { Trabalhador } from './Trabalhador.js';
export class Estagiario extends Trabalhador {
    constructor(nome, idade, obrigacoes, tempoLimite) {
        super(nome, idade, obrigacoes);
        this._tempoLimite = tempoLimite;
    }
    get tempoLimite() {
        return this._tempoLimite;
    }
    set tempoLimite(valor) {
        this._tempoLimite = valor;
    }
}
