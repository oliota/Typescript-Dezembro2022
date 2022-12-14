export class Aluno {
    constructor(nome, idade, notas) {
        this._nome = nome;
        this._idade = idade;
        this._notas = notas;
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
    get notas() {
        return this._notas;
    }
    apresentar() {
        return `Olá meu nome é ${nome} e  tenho ${idade} anos`;
    }
    somarNotas() {
        return this.notas.reduce((total, numero) => total + numero, 0);
    }
    calcularMedia() {
        return this.somarNotas() / this.notas.length;
    }
}
