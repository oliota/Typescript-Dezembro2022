

export class Trabalhador {

    private _nome: string
    private _idade: number
    private _obrigacoes: Array<string> 

    constructor(
        nome: string,
        idade: number,
        obrigacoes: Array<string>  

    ) {
        this._nome = nome
        this._idade = idade
        this._obrigacoes = obrigacoes 
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

    set idade(valor:number){
        this._idade=valor
    }

    get obrigacoes():Array<string>{
        return this._obrigacoes
    }

    set obrigacoes(valor:Array<string>){
        this._obrigacoes=valor
    }
 

}