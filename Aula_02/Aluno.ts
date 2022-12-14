export class Aluno {

    private _nome: string
    private _idade: number
    private _notas: Array<number>

    constructor(
        nome: string,
        idade: number,
        notas: Array<number>

    ) {
        this._nome=nome
        this._idade=idade
        this._notas=notas

    }

    get nome():string{
        return this._nome
    }

    set nome(valor:string){
        this._nome=valor
    }

    get idade():number{
        return this._idade
    }

    set idade(valor){
        this._idade=valor
    }

    get notas():Array<number>{
        return this._notas
    }


    public apresentar ():string{
        return `Olá meu nome é ${nome} e  tenho ${idade} anos`
    }

    private somarNotas():number{
       return this.notas.reduce((total, numero) => total + numero, 0) 
    }
    public calcularMedia():number{
        return this.somarNotas()/this.notas.length
    }
}