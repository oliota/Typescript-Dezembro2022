export class Trabalhador {
    constructor(nome, idade, obrigacoes) {
        this._nome = nome;
        this._idade = idade;
        this._obrigacoes = obrigacoes;
    }
    get nome() {
        return this._nome;
    }
    set nome(valor) {
        this._nome = valor;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        this._idade = valor;
    }
    get obrigacoes() {
        return this._obrigacoes;
    }
    set obrigacoes(valor) {
        this._obrigacoes = valor;
    }
}
