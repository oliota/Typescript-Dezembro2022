export class Professor {

    private _nome: string
    private _disciplina: string
    private _assuntos: Array<string>

    constructor(
        nome: string,
        disciplina: string,
        assuntos: Array<string>
    ) {
        this._nome = nome
        this._disciplina = disciplina
        this._assuntos = assuntos
    }

    get nome(): string {
        return this._nome
    }

    set nome(valor: string) {
        this._nome = valor
    }

    
    get disciplina(): string {
        return this._disciplina
    }

    set disciplina(valor: string) {
        this._disciplina = valor
    }

    
    get assuntos(): Array<string> {
        return this._assuntos
    }

    set assuntos(valor: Array<string>) {
        this._assuntos = valor
    }

    apresentar(quemPerguntou:string):string{
        return `Olá ${quemPerguntou}, meu nome é ${this.nome} e seja bem vindo a minha aula sobre ${this.disciplina}`
    }

    detalhes():string{
        let detalhes:string=`O curso de  ${this.disciplina} tem os seguintes assuntos:`

        this.assuntos.forEach(assunto => {
            detalhes+="\n - "+assunto
        });

        return detalhes
    }

}