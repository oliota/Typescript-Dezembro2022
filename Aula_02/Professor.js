export class Professor {
    constructor(nome, disciplina, assuntos) {
        this._nome = nome;
        this._disciplina = disciplina;
        this._assuntos = assuntos;
    }
    get nome() {
        return this._nome;
    }
    set nome(valor) {
        this._nome = valor;
    }
    get disciplina() {
        return this._disciplina;
    }
    set disciplina(valor) {
        this._disciplina = valor;
    }
    get assuntos() {
        return this._assuntos;
    }
    set assuntos(valor) {
        this._assuntos = valor;
    }
    apresentar(quemPerguntou) {
        return `Olá ${quemPerguntou}, meu nome é ${this.nome} e seja bem vindo a minha aula sobre ${this.disciplina}`;
    }
    detalhes() {
        let detalhes = `O curso de  ${this.disciplina} tem os seguintes assuntos:`;
        this.assuntos.forEach(assunto => {
            detalhes += "\n - " + assunto;
        });
        return detalhes;
    }
}
